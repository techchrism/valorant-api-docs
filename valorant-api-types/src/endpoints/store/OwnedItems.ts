import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {itemIDSchema, itemTypeIDSchema, weakUUIDSchema} from '../../commonTypes'
export const ownedItemsEndpoint = {
    name: 'Owned Items',
    description: 'List what the player owns (agents, skins, buddies, ect.)\n' +
        'Category names and IDs:  \n' +
        '\n' +
        '`ItemTypeID` | Name\n' +
        '--- | ---\n' +
        '`01bb38e1-da47-4e6a-9b3d-945fe4655707` | Agents\n' +
        '`f85cb6f7-33e5-4dc8-b609-ec7212301948` | Contracts\n' +
        '`d5f120f8-ff8c-4aac-92ea-f2b5acbe9475` | Sprays\n' +
        '`dd3bf334-87f3-40bd-b043-682a57a8dc3a` | Gun Buddies\n' +
        '`3f296c07-64c3-494c-923b-fe692a4fa1bd` | Cards\n' +
        '`e7c63390-eda7-46e0-bb7a-a6abdacd2433` | Skins\n' +
        '`3ad1b2b2-acdb-4524-852f-954a76ddae0a` | Skin Variants\n' +
        '`de7caa6b-adf7-4588-bbd1-143831e786c6` | Titles  ',
    queryName: 'Store_GetEntitlements',
    category: 'Store Endpoints',
    type: 'pd',
    suffix: 'store/v1/entitlements/{puuid}/{ItemTypeID}',
    variables: new Map([
        ['{ItemTypeID}', itemTypeIDSchema.optional()]
    ]),
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            EntitlementsByTypes: z.array(z.object({
                ItemTypeID: z.string(),
                Entitlements: z.array(z.object({
                    TypeID: weakUUIDSchema,
                    ItemID: itemIDSchema,
                    InstanceID: weakUUIDSchema.optional()
                }))
            }))
        })
    }
} as const satisfies ValorantEndpoint

export type OwnedItemsResponse = z.input<typeof ownedItemsEndpoint.responses['200']>