import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema, pregameIDSchema} from '../../commonTypes'

export const currentGamePlayerEndpoint = {
    name: 'Current Game Player',
    description: 'Get the current game match ID for the provided player',
    queryName: 'CoreGame_FetchPlayer',
    category: 'Current Game Endpoints',
    type: 'glz',
    suffix: 'core-game/v1/players/{puuid}',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            Subject: playerUUIDSchema,
            MatchID: pregameIDSchema,
            Version: z.number()
        })
    }
} satisfies ValorantEndpoint

export type CurrentGamePlayerResponse = z.input<typeof currentGamePlayerEndpoint.responses['200']>