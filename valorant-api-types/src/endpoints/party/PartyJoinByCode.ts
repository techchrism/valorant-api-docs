import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partyPlayerSchema} from '../../commonTypes'
import {z} from 'zod'

export const partyJoinByCodeEndpoint = {
    name: 'Party Join By Code',
    description: 'Join a party using an invite code',
    queryName: 'Party_CreateInviteCode',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/players/joinbycode/{code}',
    variables: new Map([
        ['code', z.string().describe('The invite code to join the party')]
    ]),
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': partyPlayerSchema,
        '404': z.object({
            httpStatus: z.literal(404),
            errorCode: z.literal('ERR_MISSING_INVITE_CODE_MAPPING'),
            message: z.literal('No PartyID <--> InviteCode mapping found')
        })
    }
} as const satisfies ValorantEndpoint

export type PartyJoinByCodeResponse = z.input<typeof partyJoinByCodeEndpoint.responses['200']>