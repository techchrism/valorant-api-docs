import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const multiFactorAuthenticationEndpoint = {
    name: 'Multi-Factor Authentication',
    description: 'Submits a multi-factor authentication code for login',
    category: 'Authentication Endpoints',
    type: 'other',
    suffix: 'https://auth.riotgames.com/api/v1/authorization',
    method: 'PUT',
    headers: new Map([
        ['Content-Type', 'application/json'],
    ]),
    body: z.object({
        type: z.literal('multifactor'),
        code: z.string().describe('The multi-factor authentication code'),
        rememberDevice: z.boolean()
    })
} as const satisfies ValorantEndpoint