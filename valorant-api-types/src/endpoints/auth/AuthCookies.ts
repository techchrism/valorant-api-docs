import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from "zod"

export const authCookiesEndpoint = {
    name: 'Auth Cookies',
    description: 'Prepare cookies for auth request',
    category: 'Authentication Endpoints',
    type: 'other',
    suffix: 'https://auth.riotgames.com/api/v1/authorization',
    method: 'POST',
    headers: new Map([
        ['Content-Type', 'application/json'],
    ]),
    body: z.object({
        client_id: z.literal("play-valorant-web-prod"),
        nonce: z.literal("1"),
        redirect_uri: z.literal("https://playvalorant.com/opt_in"),
        response_type: z.literal("token id_token"),
        scope: z.literal("account openid")
    })
} as const satisfies ValorantEndpoint
