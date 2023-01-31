import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {dateSchema, matchIDSchema, playerUUIDSchema} from '../../commonTypes'

const progressSchema = z.object({
    Level: z.number(),
    XP: z.number()
})

export const accountXPEndpoint = {
    name: 'Account XP',
    description: 'Get the account level, XP, and XP history for the given player',
    queryName: 'AccountXP_GetPlayer',
    category: 'PVP Endpoints',
    type: 'pd',
    suffix: 'account-xp/v1/players/{puuid}',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            Version: z.number(),
            Subject: playerUUIDSchema,
            Progress: progressSchema,
            History: z.array(z.object({
                ID: matchIDSchema,
                MatchStart: dateSchema,
                StartProgress: progressSchema,
                EndProgress: progressSchema,
                XPDelta: z.number(),
                XPSources: z.array(z.object({
                    ID: z.enum(['time-played', 'match-win']),
                    Amount: z.number()
                })),
                XPMultipliers: z.array(z.unknown())
            })),
            LastTimeGrantedFirstWin: dateSchema,
            NextTimeFirstWinAvailable: dateSchema
        })
    }
} satisfies ValorantEndpoint

export type AccountXPResponse = z.input<typeof accountXPEndpoint.responses['200']>