import {ValorantEndpoint} from '../../ValorantEndpoint'

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
    body: '{"client_id":"play-valorant-web-prod","nonce":"1","redirect_uri":"https://playvalorant.com/opt_in","response_type":"token id_token","scope":"account openid"}'
} as const satisfies ValorantEndpoint