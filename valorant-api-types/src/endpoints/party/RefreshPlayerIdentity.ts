import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partySchema} from '../../commonTypes'
import {z} from 'zod'

export const refreshPlayerIdentityEndpoint = {
    name: 'Refresh Player Identity',
    description: 'Refresh the identity of the specified player',
    queryName: 'Party_RefreshPlayerIdentity',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/parties/{party id}/members/{puuid}/refreshPlayerIdentity',
    riotRequirements: {
        token: true,
        entitlement: true,
        clientVersion: true
    },
    responses: {
        '200': partySchema
    }
} as const satisfies ValorantEndpoint

export type RefreshPlayerIdentityResponse = z.input<typeof refreshPlayerIdentityEndpoint.responses['200']>