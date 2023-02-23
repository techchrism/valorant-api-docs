import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partySchema} from '../../commonTypes'
import {z} from 'zod'

export const refreshPingsEndpoint = {
    name: 'Refresh Pings',
    description: 'Refresh the pings of the specified player',
    queryName: 'Party_RefreshPings',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/parties/{party id}/members/{puuid}/refreshPings',
    riotRequirements: {
        token: true,
        entitlement: true,
        clientVersion: true
    },
    responses: {
        '200': partySchema
    }
} as const satisfies ValorantEndpoint

export type RefreshPingsResponse = z.input<typeof refreshPingsEndpoint.responses['200']>