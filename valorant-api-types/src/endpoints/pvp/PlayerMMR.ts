import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {mapIDSchema, matchIDSchema, playerUUIDSchema, queueIDSchema, seasonIDSchema} from '../../commonTypes'

export const playerMMREndpoint = {
    name: 'Player MMR',
    description: 'Get a player\'s MMR and history',
    queryName: 'MMR_FetchPlayer',
    category: 'PVP Endpoints',
    type: 'pd',
    suffix: 'mmr/v1/players/{puuid}',
    riotRequirements: {
        token: true,
        entitlement: true,
        clientPlatform: true,
        clientVersion: true
    },
    responses: {
        '200': z.object({
            Version: z.number(),
            Subject: playerUUIDSchema,
            NewPlayerExperienceFinished: z.boolean(),
            QueueSkills: z.record(queueIDSchema, z.object({
                TotalGamesNeededForRating: z.number(),
                TotalGamesNeededForLeaderboard: z.number(),
                CurrentSeasonGamesNeededForRating: z.number(),
                SeasonalInfoBySeasonID: z.record(seasonIDSchema, z.object({
                    SeasonID: seasonIDSchema,
                    NumberOfWins: z.number(),
                    NumberOfWinsWithPlacements: z.number(),
                    NumberOfGames: z.number(),
                    Rank: z.number(),
                    CapstoneWins: z.number(),
                    LeaderboardRank: z.number(),
                    CompetitiveTier: z.number(),
                    RankedRating: z.number(),
                    WinsByTier: z.record(z.string().describe("Tier ID"), z.number()).transform(val => {
                        const winsMap = new Map<number, number>()
                        for(const [key, value] of Object.entries(val)) {
                            winsMap.set(parseInt(key), value)
                        }
                        return winsMap
                    }).nullable(),
                    GamesNeededForRating: z.number(),
                    TotalWinsNeededForRank: z.number()
                }))
            })),
            LatestCompetitiveUpdate: z.object({
                MatchID: matchIDSchema,
                MapID: mapIDSchema,
                SeasonID: seasonIDSchema,
                MatchStartTime: z.number().transform(val => new Date(val)),
                TierAfterUpdate: z.number(),
                TierBeforeUpdate: z.number(),
                RankedRatingAfterUpdate: z.number(),
                RankedRatingBeforeUpdate: z.number(),
                RankedRatingEarned: z.number(),
                RankedRatingPerformanceBonus: z.number(),
                CompetitiveMovement: z.literal('MOVEMENT_UNKNOWN'), //TODO verify
                AFKPenalty: z.number()
            }),
            IsLeaderboardAnonymized: z.boolean(),
            IsActRankBadgeHidden: z.boolean()
        })
    }

} as const satisfies ValorantEndpoint

export type PlayerMMRResponse = z.input<typeof playerMMREndpoint.responses['200']>