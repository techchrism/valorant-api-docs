import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partySchema} from '../../commonTypes'
import {z} from 'zod'

export const partyDeclineEndpoint = {
    name: 'Party Decline',
    description: 'Decline a party invite request',
    queryName: 'Party_DeclineRequest',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/parties/{party id}/request/{request id}/decline',
    variables: new Map([
        ['request id', z.string().describe('The ID of the request to decline')]
    ]),
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': partySchema
    }
} as const satisfies ValorantEndpoint

export type PartyDeclineResponse = z.input<typeof partyDeclineEndpoint.responses['200']>