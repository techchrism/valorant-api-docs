import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {platformSchema, queueIDSchema, stringBooleanSchema} from '../../commonTypes'

export const customGameConfigsEndpoint = {
    name: 'Custom Game Configs',
    description: 'Get information about the available gamemodes, maps, queues, and gamepods',
    queryName: 'Party_FetchCustomGameConfigs',
    category: 'Party Endpoints',
    type: 'glz',
    suffix: 'parties/v1/parties/customgameconfigs',
    riotRequirements: {
        clientPlatform: true,
        clientVersion: true
    },
    responses: {
        '200': z.object({
            Enabled: z.boolean(),
            EnabledMaps: z.array(z.string()),
            EnabledModes: z.array(z.string()),
            Queues: z.array(z.object({
                QueueID: queueIDSchema,
                Enabled: z.boolean(),
                TeamSize: z.number(),
                NumTeams: z.number(),
                MaxPartySize: z.number(),
                MinPartySize: z.number(),
                InvalidPartySizes: z.array(z.number()),
                MaxPartySizeHighSkill: z.number(),
                HighSkillTier: z.number(),
                MaxSkillTier: z.number(),
                AllowFullPartyBypassSkillRestrictions: z.boolean(),
                Mode: z.string(),
                IsRanked: z.boolean(),
                IsTournament: z.boolean(),
                RequireRoster: z.boolean(),
                Priority: z.number(),
                PartyMaxCompetitiveTierRange: z.number(),
                PartyMaxCompetitiveTierRangePlacementBuffer: z.number(),
                FullPartyMaxCompetitiveTierRange: z.number(),
                PartySkillDisparityCompetitiveTiersCeilings: z.record(z.number()),
                UseAccountLevelRequirement: z.boolean(),
                MinimumAccountLevelRequired: z.number(),
                GameRules: z.record(stringBooleanSchema),
                SupportedPlatformTypes: z.array(platformSchema.shape.platformType).length(1),
                DisabledContent: z.array(z.unknown()),
                queueFieldA: z.array(z.unknown()),
                NextScheduleChangeSeconds: z.number(),
                TimeUntilNextScheduleChangeSeconds: z.number(),
                MapWeights: z.array(z.string())
                    .transform(arr => arr.map(el => el.split(':')))
                    .describe('Array of strings in the format of "map:weight"')
            })),
            GamePodPingServiceInfo: z.record(z.string().describe('Game pod ID'), z.object({
                SecurityHash: z.number(),
                ObfuscatedIP: z.number(),
                PingProxyAddress: z.string(),
                PingProxyAddresses: z.array(z.string())
            }))
        })
    }
} satisfies ValorantEndpoint

export type CustomGameConfigsResponse = z.input<typeof customGameConfigsEndpoint.responses['200']>