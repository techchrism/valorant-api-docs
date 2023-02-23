import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {
    cardIDSchema,
    characterIDSchema,
    currentGameIDSchema,
    gameModeSchema,
    mapIDSchema,
    playerUUIDSchema, preferredLevelBorderIDSchema,
    seasonIDSchema, titleIDSchema
} from '../../commonTypes'

export const currentGameMatchEndpoint = {
    name: 'Current Game Match',
    description: 'Get the current game match info',
    queryName: 'CoreGame_FetchMatch',
    category: 'Current Game Endpoints',
    type: 'glz',
    suffix: 'core-game/v1/matches/{current game match id}',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            MatchID: currentGameIDSchema,
            Version: z.number(),
            State: z.enum(['IN_PROGRESS']), //TODO verify
            MapID: mapIDSchema,
            ModeID: gameModeSchema,
            ProvisioningFlow: z.enum(['Matchmaking', 'CustomGame']),
            GamePodID: z.string(),
            AllMUCName: z.string().describe('Chat room ID for "all" chat'),
            TeamMUCName: z.string().describe('Chat room ID for "team" chat'),
            TeamVoiceID: z.string(),
            IsReconnectable: z.boolean(),
            ConnectionDetails: z.object({
                GameServerHosts: z.array(z.string()),
                GameServerHost: z.string(),
                GameServerPort: z.number(),
                GameServerObfuscatedIP: z.number(),
                GameClientHash: z.number(),
                PlayerKey: z.string()
            }),
            PostGameDetails: z.null(),
            Players: z.array(z.object({
                Subject: playerUUIDSchema,
                TeamID: z.enum(['Blue', 'Red']).or(playerUUIDSchema),
                CharacterID: characterIDSchema,
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
                IsCoach: z.boolean(),
                IsAssociated: z.boolean()
            })),
            MatchmakingData: z.null()
        })
    }
} as const satisfies ValorantEndpoint

export type CurrentGameMatchResponse = z.input<typeof currentGameMatchEndpoint.responses['200']>