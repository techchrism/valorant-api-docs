import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {millisSchema, playerUUIDSchema} from '../../commonTypes'

export const playerInfoEndpoint = {
    name: 'Player Info',
    description: 'Get the PUUID and other info from a token',
    category: 'Authentication Endpoints',
    type: 'other',
    suffix: 'https://auth.riotgames.com/userinfo',
    riotRequirements: {
        token: true
    },
    responses: {
        '200': z.object({
            country: z.string(),
            sub: playerUUIDSchema,
            email_verified: z.boolean(),
            player_plocale: z.unknown().nullable(),
            country_at: millisSchema,
            pw: z.object({
                cng_at: millisSchema,
                reset: z.boolean(),
                must_reset: z.boolean()
            }),
            phone_number_verified: z.boolean(),
            account_verified: z.boolean(),
            ppid: z.unknown().nullable(),
            federated_identity_providers: z.array(z.string()),
            player_locale: z.string(),
            acct: z.object({
                type: z.number(),
                state: z.string(),
                adm: z.boolean(),
                game_name: z.string(),
                tag_line: z.string(),
                created_at: millisSchema
            }),
            age: z.number(),
            jti: z.string(),
            affinity: z.record(z.string())
        })
    }
} satisfies ValorantEndpoint

export type PlayerInfoResponse = z.input<typeof playerInfoEndpoint.responses['200']>