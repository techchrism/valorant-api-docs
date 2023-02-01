import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema} from '../../commonTypes'

const gunCommonSchema = z.object({
    SkinID: z.string().uuid(),
    SkinLevelID: z.string().uuid(),
    ChromaID: z.string().uuid(),
    Attachments: z.array(z.unknown())
})

export const playerLoadoutSchema = z.object({
    Guns: z.array(z.discriminatedUnion("ID", [
        z.object({
            ID: z.literal('2f59173c-4bed-b6c3-2191-dea9b58be9c7')
        }).merge(gunCommonSchema),
        z.object({
            ID: z.string().uuid(),
            CharmInstanceID: z.string().uuid(),
            CharmID: z.string().uuid(),
            CharmLevelID: z.string().uuid()
        }).merge(gunCommonSchema)
    ])).describe("Guns and knife. Note that the knife (ID: 2f59173c-4bed-b6c3-2191-dea9b58be9c7) does not have charm data (buddies)."),
    Sprays: z.array(z.object({
        EquipSlotID: z.string().uuid(),
        SprayID: z.string().uuid(),
        SprayLevelID: z.null()
    })),
    Identity: z.object({
        PlayerCardID: z.string().uuid(),
        PlayerTitleID: z.string().uuid(),
        AccountLevel: z.number(),
        PreferredLevelBorderID: z.string().uuid(),
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