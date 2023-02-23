import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {
    cardIDSchema,
    mapIDSchema,
    millisSchema,
    partyIDSchema,
    playerUUIDSchema, preferredLevelBorderIDSchema,
    queueIDSchema, titleIDSchema, weakUUIDSchema
} from '../../commonTypes'
import {atob} from 'iso-base64'

const leagueOfLegendsPresenceSchema = z.object({
    bannerIdSelected: z.string(),
    challengeCrystalSelected: z.string(),
    challengeTitleSelected: weakUUIDSchema,
    challengeTokensSelected: z.string().transform(val => val.split(',').map(v => parseInt(v))),
    championId: z.string(),
    companionId: z.string(),
    damageSkinId: z.string(),
    gameId: z.string(),
    gameMode: z.string(),
    gameQueueType: z.string(),
    gameStatus: z.string(),
    iconOverride: z.string(),
    isObservable: z.string(),
    level: z.string(),
    mapId: z.string(),
    mapSkinId: z.string(),
    masteryScore: z.string(),
    profileIcon: z.string(),
    pty: z.string(),
    puuid: z.string(),
    queueId: z.string(),
    rankedLeagueDivision: z.string(),
    rankedLeagueQueue: z.string(),
    rankedLeagueTier: z.string(),
    rankedLosses: z.string(),
    rankedPrevSeasonDivision: z.string(),
    rankedPrevSeasonTier: z.string(),
    rankedSplitRewardLevel: z.string(),
    rankedWins: z.string(),
    regalia: z.string(),
    skinVariant: z.string(),
    skinname: z.string(),
    timeStamp: z.string()
})

const valorantPresenceSchema = z.object({
    isValid: z.boolean(),
    sessionLoopState: z.string(),
    partyOwnerSessionLoopState: z.string(),
    customGameName: z.string(),
    customGameTeam: z.string(),
    partyOwnerMatchMap: mapIDSchema,
    partyOwnerMatchCurrentTeam: z.string(),
    partyOwnerMatchScoreAllyTeam: z.number(),
    partyOwnerMatchScoreEnemyTeam: z.number(),
    partyOwnerProvisioningFlow: z.string(),
    matchMap: mapIDSchema,
    partyId: partyIDSchema,
    isPartyOwner: z.boolean(),
    partyState: z.string(),
    partyAccessibility: z.enum(['OPEN', 'CLOSED']),
    maxPartySize: z.number(),
    queueId: queueIDSchema,
    partyLFM: z.boolean(),
    partyClientVersion: z.string(),
    partySize: z.number(),
    tournamentId: z.string(),
    rosterId: z.string(),
    partyVersion: millisSchema,
    queueEntryTime: z.string(),
    playerCardId: cardIDSchema,
    playerTitleId: titleIDSchema,
    preferredLevelBorderId: preferredLevelBorderIDSchema,
    accountLevel: z.number(),
    competitiveTier: z.number(),
    leaderboardPosition: z.number(),
    isIdle: z.boolean()
})

export const presenceEndpoint = {
    name: 'Presence',
    description: 'Get a list of online friends and their activity\n  ' +
        'If the player is playing Valorant, `private` is a base64-encoded JSON string that contains useful information such as party and in-progress game score.',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'chat/v4/presences',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            presences: z.array(z.object({
                actor: z.unknown().nullable(),
                basic: z.string(),
                details: z.unknown().nullable(),
                game_name: z.string(),
                game_tag: z.string(),
                location: z.unknown().nullable(),
                msg: z.unknown().nullable(),
                name: z.string(),
                patchline: z.unknown().nullable(),
                pid: z.string(),
                platform: z.unknown().nullable(),
                private: z.string().nullable().transform((val) => {
                    if(val === null) return null
                    try {
                        return leagueOfLegendsPresenceSchema.parse(JSON.parse(val))
                    } catch(ignored) {}

                    return valorantPresenceSchema.parse(JSON.parse(atob(val)))
                }),
                privateJwt: z.unknown().nullable(),
                product: z.enum(['valorant', 'league_of_legends']),
                puuid: playerUUIDSchema,
                region: z.string(),
                resource: z.string(),
                state: z.enum(['mobile', 'dnd', 'away']),
                summary: z.string(),
                time: millisSchema
            }))
        })
    }
} as const satisfies ValorantEndpoint

export type PresenceResponse = z.input<typeof presenceEndpoint.responses['200']>
