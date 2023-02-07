import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const pregameQuitEndpoint = {
    name: 'Pre-Game Quit',
    description: 'Quit the pre-game lobby',
    queryName: 'Pregame_QuitMatch',
    category: 'Pre-Game Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'pregame/v1/matches/{pre-game match id}/quit',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '204': z.undefined()
    }
} satisfies ValorantEndpoint