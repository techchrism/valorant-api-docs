import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {dateSchema, matchIDSchema, millisSchema, playerUUIDSchema} from '../../commonTypes'

export const contractsEndpoint = {
    name: 'Contracts',
    description: 'Get contract details including agents, battlepass, missions, and recent games',
    queryName: 'Contracts_Fetch',
    category: 'Contract Endpoints',
    type: 'pd',
    suffix: 'contracts/v1/contracts/{puuid}',
    riotRequirements: {
        token: true,
        entitlement: true,
        clientVersion: true
    },
    responses: {
        '200': z.object({
            Version: z.number(),
            Subject: playerUUIDSchema,
            Contracts: z.array(z.object({
                ContractDefinitionID: z.string().uuid(),
                ContractProgression: z.object({
                    TotalProgressionEarned: z.number(),
                    TotalProgressionEarnedVersion: z.number(),
                    HighestRewardedLevel: z.record(z.object({
                        Amount: z.number(),
                        Version: z.number()
                    }))
                }),
                ProgressionLevelReached: z.number(),
                ProgressionTowardsNextLevel: z.number()
            })),
            ProcessedMatches: z.array(z.object({
                ID: matchIDSchema,
                StartTime: millisSchema,
                XPGrants: z.object({
                    GamePlayed: z.number(),
                    GameWon: z.number(),
                    RoundPlayed: z.number(),
                    RoundWon: z.number(),
                    Missions: z.object({}),
                    Modifier: z.object({
                        Value: z.number(),
                        BaseMultiplierValue: z.number(),
                        Modifiers: z.array(z.object({
                            Value: z.number(),
                            Name: z.enum(['RESTRICTIONS_XP', 'PREMIUM_CONTRACT_XP']),
                            BaseOnly: z.boolean()
                        }))
                    }),
                    NumAFKRounds: z.number()
                }).nullable(),
                RewardGrants: z.object({}).nullable(),
                MissionDeltas: z.record(z.string().uuid(), z.object({
                    ID: z.string().uuid(),
                    Objectives: z.record(z.string().uuid(), z.number()),
                    ObjectiveDeltas: z.record(z.string().uuid(), z.object({
                        ID: z.string().uuid(),
                        ProgressBefore: z.number(),
                        ProgressAfter: z.number()
                    }))
                })).nullable(),
                ContractDeltas: z.record(z.string().uuid(), z.object({
                    ID: z.string().uuid(),
                    TotalXPBefore: z.number(),
                    TotalXPAfter: z.number(),
                })).nullable(),
                CouldProgressMissions: z.boolean()
            })),
            ActiveSpecialContract: z.string().uuid(),
            Missions: z.array(z.object({
                ID: z.string().uuid(),
                Objectives: z.record(z.string().uuid(), z.number()),
                Complete: z.boolean(),
                ExpirationTime: dateSchema
            })),
            MissionMetadata: z.object({
                NPECompleted: z.boolean(),
                WeeklyCheckpoint: dateSchema,
                WeeklyRefillTime: dateSchema
            })
        })
    }
} satisfies ValorantEndpoint