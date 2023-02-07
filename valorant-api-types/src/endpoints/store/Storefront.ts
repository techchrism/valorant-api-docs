import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {currencyIDSchema, itemIDSchema, itemTypeIDSchema, offerSchema} from '../../commonTypes'

const bundleSchema = z.object({
    ID: z.string().uuid(),
    DataAssetID: z.string().uuid(),
    CurrencyID: currencyIDSchema,
    Items: z.array(z.object({
        Item: z.object({
            ItemTypeID: itemTypeIDSchema,
            ItemID: itemIDSchema,
            Quantity: z.number()
        }),
        BasePrice: z.number(),
        CurrencyID: currencyIDSchema,
        DiscountPercent: z.number(),
        DiscountedPrice: z.number(),
        IsPromoItem: z.boolean()
    }))
})

export const storefrontEndpoint = {
    name: 'Storefront',
    description: 'Get the currently available items in the store',
    queryName: 'Store_GetStorefrontV2',
    category: 'Store Endpoints',
    type: 'pd',
    suffix: 'store/v2/storefront/{puuid}',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            FeaturedBundle: z.object({
                Bundle: bundleSchema,
                Bundles: z.array(bundleSchema),
                BundleRemainingDurationInSeconds: z.number()
            }),
            SkinsPanelLayout: z.object({
                SingleItemOffers: z.array(itemIDSchema),
                SingleItemStoreOffers: z.array(offerSchema),
                SingleItemOffersRemainingDurationInSeconds: z.number()
            }),
            UpgradeCurrencyStore: z.object({
                UpgradeCurrencyOffers: z.array(z.object({
                    OfferID: z.string(),
                    StorefrontItemID: itemIDSchema,
                    Offer: offerSchema
                }))
            })
        })
    }
} satisfies ValorantEndpoint

export type StorefrontResponse = z.input<typeof storefrontEndpoint.responses['200']>