import {ValorantEndpoint} from '../../ValorantEndpoint'
import {gameModeSchema, mapIDSchema, partySchema} from '../../commonTypes'
import {z} from 'zod'

export const setCustomGameSettingsEndpoint = {
    name: 'Set Custom Game Settings',
    description: 'Changes the settings for a custom game',
    queryName: 'Party_SetCustomGameSettings',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/parties/{party id}/customgamesettings',
    riotRequirements: {
        token: true,
        entitlement: true,
        clientVersion: true
    },
    body: z.object({
        Map: mapIDSchema,
        Mode: gameModeSchema,
        UseBots: z.boolean(),
        GamePod: z.string(),
        GameRules: z.object({
            AllowGameModifiers: z.enum(['true', 'false']),
            PlayOutAllRounds: z.enum(['true', 'false']),
            SkipMatchHistory: z.enum(['true', 'false']),
            TournamentMode: z.enum(['true', 'false']),
            IsOvertimeWinByTwo: z.enum(['true', 'false'])
        })
    }),
    responses: {
        '200': partySchema
    }
} satisfies ValorantEndpoint

export type SetCustomGameSettingsResponse = z.input<typeof setCustomGameSettingsEndpoint.responses['200']>