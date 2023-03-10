import {ValorantEndpoint} from '../../ValorantEndpoint'

export const cookieReauthEndpoint = {
    name: 'Cookie Reauth',
    description: 'Get a new token using the cookies from a previous authorization request\n' +
        'Use the saved cookies from [PUT Auth Request] (specifically the `ssid` cookie). The token can be found from the url this request redirects to.\n' +
        'Recommended to use this endpoint instead of storing the password and sending it again.',
    category: 'Authentication Endpoints',
    type: 'other',
    suffix: 'https://auth.riotgames.com/authorize?redirect_uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in&client_id=play-valorant-web-prod&response_type=token%20id_token&nonce=1'
} as const satisfies ValorantEndpoint