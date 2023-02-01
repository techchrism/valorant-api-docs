import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema} from '../../commonTypes'
import {PlayerLoadoutResponse, playerLoadoutSchema} from './PlayerLoadout'

export const setPlayerLoadoutEndpoint = {
    name: 'Set Player Loadout',
    description: 'Set the player\'s current loadout.',
    queryName: 'playerLoadoutUpdate',
    category: 'PVP Endpoints',
    type: 'pd',
    method: 'PUT',
    suffix: 'personalization/v2/players/{puuid}/playerloadout',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            Subject: playerUUIDSchema,
            Version: z.number()
        }).merge(playerLoadoutSchema)
    },
    body: '{loadout data}',
    variables: new Map([
        ['{loadout data}', playerLoadoutSchema.describe('JSON-encoded player loadout object. See the Player Loadout endpoint for an example. Exclude the Subject and Version properties.')]
    ])
} satisfies ValorantEndpoint

export type SetPlayerLoadoutResponse = PlayerLoadoutResponse