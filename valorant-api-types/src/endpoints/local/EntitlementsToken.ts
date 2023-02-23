import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema} from '../../commonTypes'

export const entitlementsTokenEndpoint = {
    name: 'Entitlements Token',
    description: 'Gets both the token and entitlement for API usage\n' +
        '`accessToken` is used as the token and `token` is used as the entitlement.',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'entitlements/v1/token',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            accessToken: z.string().describe('Used as the token in requests'),
            entitlements: z.array(z.unknown()),
            issuer: z.string(),
            subject: playerUUIDSchema,
            token: z.string().describe('Used as the entitlement in requests'),
        })
    }
} as const satisfies ValorantEndpoint

export type EntitlementsTokenResponse = z.input<typeof entitlementsTokenEndpoint.responses['200']>