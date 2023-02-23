import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {pregameMatchSchema} from '../../commonTypes'

export const pregameMatchEndpoint = {
    name: 'Pre-Game Match',
    description: 'Get Pre-Game match data',
    queryName: 'Pregame_GetMatch',
    category: 'Pre-Game Endpoints',
    type: 'glz',
    suffix: 'pregame/v1/matches/{pre-game match id}',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': pregameMatchSchema
    }
} as const satisfies ValorantEndpoint

export type PregameMatchResponse = z.infer<typeof pregameMatchEndpoint.responses['200']>