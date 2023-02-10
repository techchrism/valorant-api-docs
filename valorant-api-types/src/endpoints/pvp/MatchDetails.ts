import {ValorantEndpoint} from '../../ValorantEndpoint'
import {
    armorIDSchema,
    cardIDSchema,
    characterIDSchema,
    gameModeSchema, itemIDSchema,
    mapIDSchema,
    matchIDSchema,
    partyIDSchema, playerUUIDSchema, preferredLevelBorderIDSchema,
    queueIDSchema,
    seasonIDSchema, titleIDSchema, xpModificationIDSchema
} from '../../commonTypes'
import {z} from 'zod'

const newPlayerExperienceTimingSchema = z.object({
    idleTimeMillis: z.literal(0),
    objectiveCompleteTimeMillis: z.literal(0)
})
const teamOrPlayerSchema = z.enum(['Blue', 'Red']).or(playerUUIDSchema)
const locationSchema = z.object({
    x: z.number(),
    y: z.number()
})
const playerLocationSchema = z.object({
    subject: playerUUIDSchema,
    viewRadians: z.number(),
    location: locationSchema
})
const economySchema = z.object({
    loadoutValue: z.number(),
    weapon: itemIDSchema.or(z.literal('')),
    armor: armorIDSchema.or(z.literal('')),
    remaining: z.number(),
    spent: z.number()
})
const killSchema = z.object({
    gameTime: z.number().describe('Time in milliseconds since the start of the game'),
    roundTime: z.number().describe('Time in milliseconds since the start of the round'),
    killer: playerUUIDSchema,
    victim: playerUUIDSchema,
    victimLocation: locationSchema,
    assistants: z.array(playerUUIDSchema),
    playerLocations: z.array(playerLocationSchema),
    finishingDamage: z.object({
        damageType: z.enum(['Weapon', 'Bomb', 'Ability', 'Fall', 'Melee', '']),
        damageItem: itemIDSchema
            .or(z.enum(['Ultimate', 'Ability1', 'Ability2', 'GrenadeAbility', 'Primary']))
            .or(z.literal(''))
            .describe('Item ID of the weapon used to kill the player. Empty string if the player was killed by the spike, fall damage, or melee.'),
        isSecondaryFireMode: z.boolean()
    })
})

export const matchDetailsEndpoint = {
    name: 'Match Details',
    description: 'Get the details of a match after it ends',
    queryName: 'MatchDetails_FetchMatchDetails',
    category: 'PVP Endpoints',
    type: 'pd',
    suffix: 'match-details/v1/matches/{matchID}',
    variables: new Map([
        ['matchID', matchIDSchema]
    ]),
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            matchInfo: z.object({
                matchID: matchIDSchema,
                mapId: mapIDSchema,
                gamePodId: z.string(),
                gameLoopZone: z.string(),
                gameServerAddress: z.string(),
                gameVersion: z.string(),
                gameLengthMillis: z.number(),
                gameStartMillis: z.number(),
                provisioningFlowID: z.enum(['Matchmaking', 'CustomGame']),
                isCompleted: z.boolean(),
                customGameName: z.string(),
                forcePostProcessing: z.boolean(),
                queueId: queueIDSchema,
                gameMode: gameModeSchema,
                isRanked: z.boolean(),
                isMatchSampled: z.boolean(),
                seasonId: seasonIDSchema,
                completionState: z.enum(['Surrendered', 'Completed', 'VoteDraw']), // TODO find remake string
                platformType: z.literal('PC'),
                partyRRPenalties: z.record(partyIDSchema, z.number()),
                shouldMatchDisablePenalties: z.boolean(),
            }),
            players: z.array(z.object({
                subject: playerUUIDSchema,
                gameName: z.string(),
                tagLine: z.string(),
                platformInfo: z.object({
                    platformType: z.literal('PC'),
                    platformOS: z.literal('Windows'),
                    platformOSVersion: z.string(),
                    platformChipset: z.literal('Unknown')
                }),
                teamId: teamOrPlayerSchema,
                partyId: partyIDSchema,
                characterId: characterIDSchema,
                stats: z.object({
                    score: z.number(),
                    roundsPlayed: z.number(),
                    kills: z.number(),
                    deaths: z.number(),
                    assists: z.number(),
                    playTimeMillis: z.number(),
                    abilityCasts: z.object({
                        grenadeCasts: z.number(),
                        ability1Casts: z.number(),
                        ability2Casts: z.number(),
                        ultimateCasts: z.number()
                    })
                }),
                roundDamage: z.array(z.object({
                    round: z.number(),
                    receiver: playerUUIDSchema,
                    damage: z.number()
                })),
                competitiveTier: z.number(),
                isObserver: z.boolean(),
                playerCard: cardIDSchema,
                playerTitle: titleIDSchema,
                preferredLevelBorder: preferredLevelBorderIDSchema,
                accountLevel: z.number(),
                sessionPlaytimeMinutes: z.number(),
                xpModifications: z.array(z.object({
                    Value: z.number().describe('XP multiplier'),
                    ID: xpModificationIDSchema
                })).optional(),
                behaviorFactors: z.object({
                    afkRounds: z.number(),
                    collisions: z.number().describe('Float value of unknown significance. Possibly used to quantify how much the player was in the way of their teammates?'),
                    damageParticipationOutgoing: z.number(),
                    friendlyFireIncoming: z.number(),
                    friendlyFireOutgoing: z.number(),
                    mouseMovement: z.number(),
                    stayedInSpawnRounds: z.number()
                }),
                newPlayerExperienceDetails: z.object({
                    basicMovement: newPlayerExperienceTimingSchema,
                    basicGunSkill: newPlayerExperienceTimingSchema,
                    adaptiveBots: z.object({
                        adaptiveBotAverageDurationMillisAllAttempts: z.literal(0),
                        adaptiveBotAverageDurationMillisFirstAttempt: z.literal(0),
                        killDetailsFirstAttempt: z.null()
                    }).merge(newPlayerExperienceTimingSchema),
                    ability: newPlayerExperienceTimingSchema,
                    bombPlant: newPlayerExperienceTimingSchema,
                    defendBombSite: z.object({
                        success: z.literal(false)
                    }).merge(newPlayerExperienceTimingSchema),
                    settingsStatus: z.object({
                        isMouseSensitivityDefault: z.boolean(),
                        isCrosshairDefault: z.boolean(),
                    })
                })
            })),
            bots: z.array(z.unknown()),
            coaches: z.array(z.object({
                subject: playerUUIDSchema,
                teamId: z.enum(['Blue', 'Red'])
            })),
            teams: z.array(z.object({
                teamId: teamOrPlayerSchema,
                won: z.boolean(),
                roundsPlayed: z.number(),
                roundsWon: z.number(),
                numPoints: z.number()
            })),
            roundResults: z.array(z.object({
                roundNum: z.number(),
                roundResult: z.enum(['Eliminated', 'Bomb detonated', 'Bomb defused', 'Surrendered', 'Round timer expired']),
                roundCeremony: z.enum(['CeremonyDefault', 'CeremonyTeamAce', 'CeremonyFlawless', 'CeremonyCloser', 'CeremonyClutch', 'CeremonyThrifty', 'CeremonyAce', '']),
                winningTeam: teamOrPlayerSchema,
                bombPlanter: playerUUIDSchema.optional(),
                bombDefuser: teamOrPlayerSchema.optional(),
                plantRoundTime: z.number().optional().describe('Time in milliseconds since the start of the round when the bomb was planted. 0 if not planted'),
                plantPlayerLocations: z.array(playerLocationSchema).nullable(),
                plantLocation: locationSchema,
                plantSite: z.enum(['A', 'B', 'C', '']),
                defuseRoundTime: z.number().optional().describe('Time in milliseconds since the start of the round when the bomb was defused. 0 if not defused'),
                defusePlayerLocations: z.array(playerLocationSchema).nullable(),
                defuseLocation: locationSchema,
                playerStats: z.array(z.object({
                    subject: playerUUIDSchema,
                    kills: z.array(killSchema),
                    damage: z.array(z.object({
                        receiver: playerUUIDSchema,
                        damage: z.number(),
                        legshots: z.number(),
                        bodyshots: z.number(),
                        headshots: z.number()
                    })),
                    score: z.number(),
                    economy: economySchema,
                    ability: z.object({
                        grenadeEffects: z.null(),
                        ability1Effects: z.null(),
                        ability2Effects: z.null(),
                        ultimateEffects: z.null()
                    }),
                    wasAfk: z.boolean(),
                    wasPenalized: z.boolean(),
                    stayedInSpawn: z.boolean()
                })),
                roundResultCode: z.enum(['Elimination', 'Detonate', 'Defuse', 'Surrendered', '']).describe('Empty string if the timer expired'),
                playerEconomies: z.array(z.object({
                    subject: playerUUIDSchema
                }).merge(economySchema)),
                playerScores: z.array(z.object({
                    subject: playerUUIDSchema,
                    score: z.number()
                }))
            })),
            kills: z.array(killSchema),
        })
    }
} satisfies ValorantEndpoint

export type MatchDetailsResponse = z.infer<typeof matchDetailsEndpoint.responses['200']>