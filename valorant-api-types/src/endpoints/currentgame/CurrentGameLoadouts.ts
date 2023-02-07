import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {characterIDSchema, itemIDSchema, itemTypeIDSchema} from '../../commonTypes'

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
                Loadout: z.object({
                    Sprays: z.object({
                        SpraySelection: z.array(z.object({
                            SocketID: z.string().uuid(),
                            SprayID: z.string().uuid(),
                            LevelID: z.string().uuid()
                        }))
                    }),
                    Items: z.record(z.object({
                        ID: itemIDSchema,
                        TypeID: itemTypeIDSchema,
                        Sockets: z.record(z.object({
                            ID: z.string().uuid(),
                            Item: z.object({
                                ID: itemIDSchema,
                                TypeID: itemTypeIDSchema
                            })
                        }))
                    }))
                })
            }))
        })
    }
} satisfies ValorantEndpoint

export type CurrentGameLoadoutsResponse = z.input<typeof currentGameLoadoutsEndpoint.responses['200']>