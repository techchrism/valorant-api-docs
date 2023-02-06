import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z, ZodType} from 'zod'
import {mapIDSchema, matchIDSchema, millisSchema, playerUUIDSchema, seasonIDSchema} from '../../commonTypes'

export const competitiveUpdatesEndpoint = {
    name: 'Competitive Updates',
    description: 'Get recent games and how they changed ranking',
    queryName: 'MMR_FetchCompetitiveUpdates',
    category: 'PVP Endpoints',
    type: 'pd',
    suffix: 'mmr/v1/players/{puuid}/competitiveupdates',
    query: new Map([
        ['startIndex', z.number().optional().describe('The index of the first match to return. Defaults to 0')],
        ['endIndex', z.number().optional().describe('The index of the last match to return. Defaults to 10')],
        ['queue', z.string().optional().describe('The queue to filter by. Defaults to all queues') as ZodType], // Not sure why this "as ZodType" is needed
    ]),
    riotRequirements: {
        token: true,
        entitlement: true,
        clientPlatform: true
    },
    responses: {
        '200': z.object({
            Version: z.number(),
            Subject: playerUUIDSchema,
            Matches: z.array(z.object({
                MatchID: matchIDSchema,
                MapID: mapIDSchema,
                SeasonID: seasonIDSchema,
                MatchStartTime: millisSchema,
                TierAfterUpdate: z.number(),
                TierBeforeUpdate: z.number(),
                RankedRatingAfterUpdate: z.number(),
                RankedRatingBeforeUpdate: z.number(),
                RankedRatingEarned: z.number(),
                RankedRatingPerformanceBonus: z.number(),
                CompetitiveMovement: z.literal('MOVEMENT_UNKNOWN'),
                AFKPenalty: z.number()
            }))
        })
    }
} satisfies ValorantEndpoint

export type CompetitiveUpdatesResponse = z.input<typeof competitiveUpdatesEndpoint.responses['200']>