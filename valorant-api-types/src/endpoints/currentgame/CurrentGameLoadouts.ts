import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {
    characterIDSchema,
    itemIDSchema,
    itemTypeIDSchema,
    loadoutsSchema,
    playerUUIDSchema,
    weakUUIDSchema
} from '../../commonTypes'

export const currentGameLoadoutsEndpoint = {
    name: 'Current Game Loadouts',
    description: 'Get the current game loadout info for all players in the match',
    queryName: 'CoreGame_FetchMatchLoadouts',
    category: 'Current Game Endpoints',
    type: 'glz',
    suffix: 'core-game/v1/matches/{current game match id}/loadouts',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            Loadouts: z.array(z.object({
                CharacterID: characterIDSchema,
                Loadout: loadoutsSchema
            }))
        })
    }
} as const satisfies ValorantEndpoint

export type CurrentGameLoadoutsResponse = z.input<typeof currentGameLoadoutsEndpoint.responses['200']>