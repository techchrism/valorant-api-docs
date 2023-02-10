import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema, weakUUIDSchema} from '../../commonTypes'

const gunCommonSchema = z.object({
    SkinID: weakUUIDSchema,
    SkinLevelID: weakUUIDSchema,
    ChromaID: weakUUIDSchema,
    Attachments: z.array(z.unknown())
})

export const playerLoadoutSchema = z.object({
    Guns: z.array(z.object({
            ID: weakUUIDSchema,
            CharmInstanceID: weakUUIDSchema,
            CharmID: weakUUIDSchema,
            CharmLevelID: weakUUIDSchema
        }).merge(gunCommonSchema).describe("Guns and knife. Note that the knife (ID: 2f59173c-4bed-b6c3-2191-dea9b58be9c7) does not have charm data (buddies)."),
    ),
    Sprays: z.array(z.object({
        EquipSlotID: weakUUIDSchema,
        SprayID: weakUUIDSchema,
        SprayLevelID: z.null()
    })),
    Identity: z.object({
        PlayerCardID: weakUUIDSchema,
        PlayerTitleID: weakUUIDSchema,
        AccountLevel: z.number(),
        PreferredLevelBorderID: weakUUIDSchema,
        HideAccountLevel: z.boolean()
    }),
    Incognito: z.boolean()
})

export const playerLoadoutEndpoint = {
    name: 'Player Loadout',
    description: 'Get the player\'s current loadout. Only works for your own PUUID.',
    queryName: 'playerLoadoutUpdate',
    category: 'PVP Endpoints',
    type: 'pd',
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
    }
} satisfies ValorantEndpoint

export type PlayerLoadoutResponse = z.input<typeof playerLoadoutEndpoint.responses['200']>