import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {dateSchema, partyIDSchema, partyPlayerSchema, platformSchema, playerUUIDSchema} from '../../commonTypes'

export const partyPlayerEndpoint = {
    name: 'Party Player',
    description: 'Get the party information for the given player',
    queryName: 'Party_FetchPlayer',
    category: 'Party Endpoints',
    type: 'glz',
    suffix: 'parties/v1/players/{puuid}',
    riotRequirements: {
        token: true,
        entitlement: true,
        clientVersion: true,
        clientPlatform: true
    },
    responses: {
        '200': partyPlayerSchema
    }
} as const satisfies ValorantEndpoint

export type PartyPlayerResponse = z.input<typeof partyPlayerEndpoint.responses['200']>