import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partySchema} from '../../commonTypes'
import {z} from 'zod'

export const partyInviteEndpoint = {
    name: 'Party Invite',
    description: 'Invite a player to the party by name and tagline',
    queryName: 'Party_InviteToPartyByDisplayName',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/parties/{party id}/invites/name/{name}/tag/{tagline}',
    variables: new Map([
        ['name', z.string()],
        ['tagline', z.string()]
    ]),
    riotRequirements: {
        token: true,
        entitlement: true,
        clientVersion: true
    },
    responses: {
        '200': partySchema
    }
} as const satisfies ValorantEndpoint

export type PartyInviteResponse = z.input<typeof partyInviteEndpoint.responses['200']>