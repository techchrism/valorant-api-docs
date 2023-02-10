import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {currencyIDSchema, dateSchema, itemIDSchema, itemTypeIDSchema} from '../../commonTypes'

export const pricesEndpoint = {
    name: 'Prices',
    description: 'Get the current store prices for all items',
    queryName: 'Store_GetOffers',
    category: 'Store Endpoints',
    type: 'pd',
    suffix: 'store/v1/offers',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            Offers: z.array(z.object({
                OfferID: z.string(),
                IsDirectPurchase: z.boolean(),
                StartDate: dateSchema,
                Cost: z.record(currencyIDSchema, z.number()),
                Rewards: z.array(z.object({
                    ItemTypeID: itemTypeIDSchema,
                    ItemID: itemIDSchema,
                    Quantity: z.number()
                }))
            }))
        })
    }
} satisfies ValorantEndpoint

export type PricesResponse = z.input<typeof pricesEndpoint.responses['200']>