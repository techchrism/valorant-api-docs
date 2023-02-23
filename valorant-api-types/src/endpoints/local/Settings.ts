import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const settingsEndpoint = {
    name: 'Settings',
    description: 'Get a list of client settings',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'player-preferences/v1/data-json/Ares.PlayerSettings',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            data: z.object({
                actionMappings: z.array(z.object({
                    alt: z.boolean(),
                    bindIndex: z.number(),
                    characterName: z.string(),
                    cmd: z.boolean(),
                    ctrl: z.boolean(),
                    key: z.string(),
                    name: z.string(),
                    shift: z.boolean()
                })),
                axisMappings: z.array(z.unknown()),
                boolSettings: z.array(z.object({
                    settingEnum: z.string(),
                    value: z.boolean()
                })),
                floatSettings: z.array(z.object({
                    settingEnum: z.string(),
                    value: z.number()
                })),
                intSettings: z.array(z.object({
                    settingEnum: z.string(),
                    value: z.number()
                })),
                roamingSetttingsVersion: z.number(),
                settingsProfiles: z.array(z.unknown()),
                stringSettings: z.array(z.object({
                    settingEnum: z.string(),
                    value: z.string()
                })),
            }),
            modified: z.number(),
            type: z.literal('Ares.PlayerSettings')
        })
    }
} as const satisfies ValorantEndpoint

export type SettingsResponse = z.input<typeof settingsEndpoint.responses['200']>