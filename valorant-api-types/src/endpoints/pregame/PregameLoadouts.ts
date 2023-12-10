import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {characterIDSchema, itemIDSchema, itemTypeIDSchema, playerUUIDSchema, weakUUIDSchema} from '../../commonTypes'

export const pregameLoadoutsEndpoint = {
    name: 'Pre-Game Loadouts',
    description: 'Get Pre-Game loadout data',
    queryName: 'Pregame_GetMatchLoadouts',
    category: 'Pre-Game Endpoints',
    type: 'glz',
    suffix: 'pregame/v1/matches/{pre-game match id}/loadouts',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            Loadouts: z.array(z.object({
                Subject: playerUUIDSchema,
                Sprays: z.object({
                    SpraySelections: z.array(z.object({
                        SocketID: weakUUIDSchema,
                        SprayID: weakUUIDSchema,
                        LevelID: weakUUIDSchema
                    }))
                }),
                Expressions: z.object({
                    AESSelections: z.array(z.object({
                        SocketID: weakUUIDSchema,
                        AssetID: weakUUIDSchema,
                        TypeID: weakUUIDSchema
                    }))
                }),
                Items: z.record(z.object({
                    ID: itemIDSchema,
                    TypeID: itemTypeIDSchema,
                    Sockets: z.record(z.object({
                        ID: weakUUIDSchema,
                        Item: z.object({
                            ID: itemIDSchema,
                            TypeID: itemTypeIDSchema
                        })
                    }))
                }))
            })),
            LoadoutsValid: z.boolean()
        })
    }
} as const satisfies ValorantEndpoint

export type PregameLoadoutsResponse = z.infer<typeof pregameLoadoutsEndpoint.responses['200']>