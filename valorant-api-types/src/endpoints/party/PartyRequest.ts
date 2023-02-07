import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const partyRequestEndpoint = {
    name: 'Party Request',
    description: 'Requests to join the specified party ID',
    queryName: 'Party_RequestToJoinParty',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/parties/{party id}/request',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.unknown() //TODO verify
    }
} satisfies ValorantEndpoint

export type PartyRequestResponse = z.input<typeof partyRequestEndpoint.responses['200']>