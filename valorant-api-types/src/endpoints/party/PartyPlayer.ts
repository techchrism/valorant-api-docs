import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {dateSchema, partyIDSchema, platformSchema, playerUUIDSchema} from '../../commonTypes'

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
        clientVersion: true
    },
    responses: {
        '200': z.object({
            Subject: playerUUIDSchema,
            Version: z.number(),
            CurrentPartyID: partyIDSchema,
            Invites: z.null(),
            Requests: z.array(z.object({
                ID: z.string(),
                PartyID: partyIDSchema,
                RequestedBySubject: playerUUIDSchema,
                Subjects: z.array(playerUUIDSchema),
                CreatedAt: dateSchema,
                RefreshedAt: dateSchema,
                ExpiresIn: z.number()
            })),
            PlatformInfo: platformSchema
        })
    }
} as const satisfies ValorantEndpoint

export type PartyPlayerResponse = z.input<typeof partyPlayerEndpoint.responses['200']>