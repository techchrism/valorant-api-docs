import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z, ZodType} from 'zod'
import {cardIDSchema, playerUUIDSchema, queueIDSchema, seasonIDSchema, titleIDSchema} from '../../commonTypes'

export const leaderboardEndpoint = {
    name: 'Leaderboard',
    description: 'Get the leaderboard for a given season',
    queryName: 'MMR_FetchLeaderboard',
    category: 'PVP Endpoints',
    type: 'pd',
    suffix: 'mmr/v1/leaderboards/affinity/na/queue/competitive/season/{season id}',
    query: new Map([
        ['startIndex', z.number().describe('The index of the first entry to return. The client will have this set to 0')],
        ['size', z.number().describe('The number of entries to retrieve. The client will request 510 entries')],
        ['query', z.string().optional().describe('An optional username to search for') as ZodType],
    ]),
    variables: new Map([
        ['season id', seasonIDSchema]
    ]),
    riotRequirements: {
        token: true,
        entitlement: true,
        clientVersion: true
    },
    responses: {
        '200': z.object({
            Deployment: z.string(),
            QueueID: queueIDSchema,
            SeasonID: seasonIDSchema,
            Players: z.array(z.object({
                PlayerCardID: cardIDSchema,
                TitleID: titleIDSchema,
                IsBanned: z.boolean(),
                IsAnonymized: z.boolean(),
                puuid: playerUUIDSchema,
                gameName: z.string(),
                tagLine: z.string(),
                leaderboardRank: z.number(),
                rankedRating: z.number(),
                numberOfWins: z.number(),
                competitiveTier: z.number()
            })),
            totalPlayers: z.number(),
            immortalStartingPage: z.number(),
            immortalStartingIndex: z.number(),
            topTierRRThreshold: z.number(),
            topTierStartingPage: z.number(),
            tierDetails: z.record(z.object({
                rankedRatingThreshold: z.number(),
                startingPage: z.number(),
                startingIndex: z.number()
            })),
            startIndex: z.number(),
            query: z.string()
        })
    }
} satisfies ValorantEndpoint

export type LeaderboardResponse = z.input<typeof leaderboardEndpoint.responses['200']>