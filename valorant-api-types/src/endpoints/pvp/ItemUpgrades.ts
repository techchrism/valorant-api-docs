import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {currencyIDSchema, itemIDSchema, itemTypeIDSchema} from '../../commonTypes'

const itemSchema = z.object({
    ItemTypeID: itemTypeIDSchema,
    ItemID: itemIDSchema,
})
const rewardSchema = z.object({Amount: z.number()}).merge(itemSchema)

export const itemUpgradesEndpoint = {
    name: 'Item Upgrades',
    description: 'Get details for item upgrades',
    queryName: 'ItemProgressionDefinitionsV2_Fetch', // not a typo - the query name incorrectly uses V2 instead of V3
    category: 'PVP Endpoints',
    type: 'pd',
    suffix: 'contract-definitions/v3/item-upgrades',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            Definitions: z.array(z.object({
                ID: z.string().uuid(),
                Item: itemSchema,
                RequiredEntitlement: itemSchema,
                ProgressionSchedule: z.object({
                    Name: z.string(),
                    ProgressionCurrencyID: currencyIDSchema,
                    ProgressionDeltaPerLevel: z.array(z.number()).nullable()
                }),
                RewardSchedule: z.object({
                    ID: z.string().uuid(),
                    Name: z.string(),
                    Prerequisites: z.null(),
                    RewardsPerLevel: z.array(z.object({
                        EntitlementRewards: z.array(rewardSchema),
                        WalletRewards: z.null(),
                        CounterRewards: z.null()
                    })).nullable()
                }),
                Sidegrades: z.array(z.object({
                    SidegradeID: z.string().uuid(),
                    Options: z.array(z.object({
                        OptionID: z.string().uuid(),
                        Cost: z.object({
                            WalletCosts: z.array(z.object({
                                CurrencyID: currencyIDSchema,
                                AmountToDeduct: z.number()
                            }))
                        }),
                        Rewards: z.array(rewardSchema)
                    })),
                    Prerequisites: z.object({
                        RequiredEntitlements: z.array(itemSchema)
                    })
                })).nullable()
            }))
        })
    }
} satisfies ValorantEndpoint

export type ItemUpgradesResponse = z.input<typeof itemUpgradesEndpoint.responses['200']>