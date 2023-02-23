import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z, ZodType} from 'zod'
import {matchIDSchema, millisSchema, playerUUIDSchema, queueIDSchema} from '../../commonTypes'

export const matchHistoryEndpoint = {
    name: 'Match History',
    description: 'Get the match history for the given player',
    queryName: 'MatchHistory_FetchMatchHistory',
    category: 'PVP Endpoints',
    type: 'pd',
    suffix: 'match-history/v1/history/{puuid}',
    query: new Map([
        ['startIndex', z.number().optional().describe('The index of the first match to return. Defaults to 0')],
        ['endIndex', z.number().optional().describe('The index of the last match to return. Defaults to 20')],
        ['queue', z.string().optional().describe('The queue to filter by. Defaults to all queues') as ZodType], // Not sure why this "as ZodType" is needed
    ]),
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            Subject: playerUUIDSchema,
            BeginIndex: z.number(),
            EndIndex: z.number(),
            Total: z.number(),
            History: z.array(z.object({
                MatchID: matchIDSchema,
                GameStartTime: millisSchema,
                QueueID: queueIDSchema
            }))
        })
    }
} as const satisfies ValorantEndpoint

export type MatchHistoryResponse = z.input<typeof matchHistoryEndpoint.responses['200']>