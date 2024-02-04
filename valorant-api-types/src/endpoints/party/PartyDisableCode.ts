import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partySchema} from '../../commonTypes'
import {z} from 'zod'

export const partyDisableCodeEndpoint = {
    name: 'Party Disable Code',
    description: 'Disable the party invite code',
    queryName: 'Party_CreateInviteCode',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'DELETE',
    suffix: 'parties/v1/parties/{party id}/invitecode',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': partySchema
    }
} as const satisfies ValorantEndpoint

export type PartyDisableCodeResponse = z.input<typeof partyDisableCodeEndpoint.responses['200']>