import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const currentGameQuitEndpoint = {
    name: 'Current Game Quit',
    description: 'Quits the current game',
    queryName: 'CoreGame_DisassociatePlayer',
    category: 'Current Game Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'core-game/v1/players/{puuid}/disassociate/{current game match id}',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '204': z.undefined()
    }
} satisfies ValorantEndpoint