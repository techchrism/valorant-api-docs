import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {millisSchema, playerUUIDSchema} from '../../commonTypes'

const userInfoSchema = z.object({
    acct: z.object({
        adm: z.boolean(),
        createdAt: millisSchema,
        game_name: z.string(),
        state: z.string(),
        tag_line: z.string(),
        type: z.number()
    }),
    ban: z.object({
        code: z.unknown().nullable(),
        desc: z.string(),
        exp: z.unknown().nullable(),
        restrictions: z.array(z.unknown())
    }),
    country: z.string(),
    country_at: millisSchema,
    email_verified: z.boolean(),
    jti: z.string(),
    lol: z.unknown().nullable(),
    lol_region: z.array(z.unknown()),
    original_account_id: z.unknown().nullable(),
    original_platform_id: z.unknown().nullable(),
    phone_number_verified: z.boolean(),
    player_locale: z.string(),
    player_plocale: z.unknown().nullable(),
    ppid: z.unknown().nullable(),
    preferred_username: z.string(),
    pvpnet_account_id: z.unknown().nullable(),
    pw: z.object({
        cng_at: millisSchema,
        must_reset: z.boolean(),
        reset: z.boolean()
    }).describe('Password info'),
    sub: playerUUIDSchema,
    username: z.string()
})

export const rsoUserInfoEndpoint = {
    name: 'RSO User Info',
    description: 'Get RSO user info',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'rso-auth/v1/authorization/userinfo',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            userInfo: z.string().transform((str) => userInfoSchema.parse(JSON.parse(str)))
        })
    }
} satisfies ValorantEndpoint

export type RSOUserInfoResponse = z.input<typeof rsoUserInfoEndpoint.responses['200']>