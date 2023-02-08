import {z} from 'zod'

export const stringBooleanSchema = z.string().transform(val => val === 'true')

export const playerUUIDSchema = z.string().uuid().describe('Player UUID')
export const matchIDSchema = z.string().uuid().describe('Match ID')
export const pregameIDSchema = z.string().uuid().describe('Pre-Game Match ID')
export const currentGameIDSchema = z.string().uuid().describe('Current Game Match ID')
export const partyIDSchema = z.string().uuid().describe('Party ID')
export const gameModeSchema = z.string().describe('Game Mode')
export const dateSchema = z.string().datetime().transform(val => new Date(val)).describe('Date in ISO 8601 format')
export const millisSchema = z.number().transform(val => new Date(val)).describe('Milliseconds since epoch')

// IDs that can be derived from game files
export const seasonIDSchema = z.string().uuid().describe('Season ID')
export const queueIDSchema = z.string().describe('Queue ID')
export const mapIDSchema = z.string().describe('Map ID')
export const characterIDSchema = z.string().uuid().describe('Character ID')
export const cardIDSchema = z.string().uuid().describe('Card ID')
export const titleIDSchema = z.string().uuid().describe('Title ID')
export const preferredLevelBorderIDSchema = z.string().uuid().describe('Preferred Level Border ID')
export const xpModificationIDSchema = z.string().describe('XP Modification ID')
export const itemIDSchema = z.string().uuid().describe('Item ID')
export const itemTypeIDSchema = z.string().uuid().describe('Item Type ID')
export const armorIDSchema = z.string().uuid().describe('Armor ID')
export const currencyIDSchema = z.string().uuid().describe('Currency ID')


const partyMembershipSchema = z.array(z.object({Subject: playerUUIDSchema})).nullable()
export const partySchema = z.object({
    ID: partyIDSchema,
    MUCName: z.string(),
    VoiceRoomID: z.string(),
    Version: z.number(),
    ClientVersion: z.string(),
    Members: z.array(z.object({
        Subject: playerUUIDSchema,
        CompetitiveTier: z.number(),
        PlayerIdentity: z.object({
            Subject: playerUUIDSchema,
            PlayerCardID: cardIDSchema,
            PlayerTitleID: titleIDSchema,
            AccountLevel: z.number(),
            PreferredLevelBorderID: preferredLevelBorderIDSchema,
            Incognito: z.boolean(),
            HideAccountLevel: z.boolean()
        }),
        SeasonalBadgeInfo: z.null(),
        IsOwner: z.boolean().optional(),
        QueueEligibleRemainingAccountLevels: z.number(),
        Pings: z.array(z.object({
            Ping: z.number(),
            GamePodID: z.string()
        })),
        IsReady: z.boolean(),
        IsModerator: z.boolean(),
        UseBroadcastHUD: z.boolean(),
        PlatformType: z.string()
    })),
    State: z.string(),
    PreviousState: z.string(),
    StateTransitionReason: z.string(),
    Accessibility: z.union([z.literal('OPEN'), z.literal('CLOSED')]),
    CustomGameData: z.object({
        Settings: z.object({
            Map: mapIDSchema,
            Mode: gameModeSchema,
            UseBots: z.boolean(),
            GamePod: z.string(),
            GameRules: z.object({
                AllowGameModifiers: stringBooleanSchema.optional(),
                IsOvertimeWinByTwo: stringBooleanSchema.optional(),
                PlayOutAllRounds: stringBooleanSchema.optional(),
                SkipMatchHistory: stringBooleanSchema.optional(),
                TournamentMode: stringBooleanSchema.optional()
            }).nullable()
        }),
        Membership: z.object({
            teamOne: partyMembershipSchema,
            teamTwo: partyMembershipSchema,
            teamSpectate: partyMembershipSchema,
            teamOneCoaches: partyMembershipSchema,
            teamTwoCoaches: partyMembershipSchema
        }),
        MaxPartySize: z.number(),
        AutobalanceEnabled: z.boolean(),
        AutobalanceMinPlayers: z.boolean(),
        HasRecoveryData: z.boolean()
    }),
    MatchmakingData: z.object({
        QueueID: queueIDSchema,
        PreferredGamePods: z.array(z.string()),
        SkillDisparityRRPenalty: z.number()
    }),
    Invites: z.null(),
    Requests: z.array(z.unknown()),
    QueueEntryTime: dateSchema,
    ErrorNotification: z.object({
        ErrorType: z.string(),
        ErroredPlayers: partyMembershipSchema
    }),
    RestrictedSeconds: z.number(),
    EligibleQueues: z.array(z.string()),
    QueueIneligibilities: z.array(z.string()),
    CheatData: z.object({
        GamePodOverride: z.string(),
        ForcePostGameProcessing: z.boolean()
    }),
    XPBonuses: z.array(z.unknown())
})

export const offerSchema = z.object({
    OfferID: z.string(),
    IsDirectPurchase: z.boolean(),
    StartDate: dateSchema,
    Cost: z.record(currencyIDSchema, z.number()),
    Rewards: z.array(z.object({
        ItemTypeID: itemTypeIDSchema,
        ItemID: itemIDSchema,
        Quantity: z.number()
    }))
})


const pregameTeamSchema = z.object({
    TeamID: z.enum(['Blue', 'Red']).or(playerUUIDSchema),
    Players: z.array(z.object({
        Subject: playerUUIDSchema,
        CharacterID: characterIDSchema,
        CharacterSelectionState: z.enum(['', 'selected']),
        PregamePlayerState: z.enum(['joined']), //TODO find other values
        CompetitiveTier: z.number(),
        PlayerIdentity: z.object({
            Subject: playerUUIDSchema,
            PlayerCardID: cardIDSchema,
            PlayerTitleID: titleIDSchema,
            AccountLevel: z.number(),
            PreferredLevelBorderID: preferredLevelBorderIDSchema,
            Incognito: z.boolean(),
            HideAccountLevel: z.boolean()
        }),
        SeasonalBadgeInfo: z.object({
            SeasonID: seasonIDSchema.or(z.literal('')),
            NumberOfWins: z.number(),
            WinsByTier: z.null(),
            Rank: z.number(),
            LeaderboardRank: z.number()
        }),
        IsCaptain: z.boolean()
    }))
})
export const pregameMatchSchema = z.object({
    ID: pregameIDSchema,
    Version: z.number(),
    Teams: z.array(pregameTeamSchema),
    AllyTeam: pregameTeamSchema.nullable(),
    EnemyTeam: pregameTeamSchema.nullable(),
    ObserverSubjects: z.array(z.unknown()), //TODO verify
    MatchCoaches: z.array(z.unknown()), //TODO verify
    EnemyTeamSize: z.number(),
    EnemyTeamLockCount: z.number(),
    PregameState: z.enum(['character_select_active']), //TODO find other values
    LastUpdated: dateSchema,
    MapID: mapIDSchema,
    MapSelectPool: z.array(z.unknown()),
    BannedMapIDs: z.array(z.unknown()),
    CastedVotes: z.unknown(),
    MapSelectSteps: z.array(z.unknown()),
    MapSelectStep: z.number(),
    Team1: z.enum(['Blue', 'Red']).or(playerUUIDSchema),
    GamePodID: z.string(),
    Mode: gameModeSchema,
    VoiceSessionID: z.string(),
    MUCName: z.string(),
    QueueID: queueIDSchema.or(z.literal('')),
    ProvisioningFlow: z.enum(['Matchmaking', 'CustomGame']),
    IsRanked: z.boolean(),
    PhaseTimeRemainingNS: z.number(),
    StepTimeRemainingNS: z.number(),
    altModesFlagADA: z.boolean(),
    TournamentMetadata: z.null(),
    RosterMetadata: z.null()
})

export const contractsResponse = z.object({
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