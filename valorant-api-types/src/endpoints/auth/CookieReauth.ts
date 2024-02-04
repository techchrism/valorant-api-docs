import {ValorantEndpoint} from '../../ValorantEndpoint'

export const cookieReauthEndpoint = {
    name: 'Cookie Reauth',
    description: [
        'Get a new token using the cookies from a previous authorization request',
        'Use the saved cookies from [PUT Auth Request] (specifically the `ssid` cookie). The auth token and id token can be found from the url this request redirects to.',
        '',
        'It\'s recommended to use this endpoint instead of storing the password and sending it again.',
        '',
        'There are ongoing tests at documented at <https://github.com/techchrism/riot-auth-test> that test for auth lifespan using different cookie strategies.',
        'Currently, it appears refreshing with just the `ssid` cookie is only stable for one week and refreshing with all auth cookies is stable for three weeks.',
        '',
        'On a successful response, the 301 redirect location header will be of the format:\n> ```https://playvalorant.com/opt_in#access_token={access token}&scope=openid&iss=https%3A%2F%2Fauth.riotgames.com&id_token={id token}&token_type=Bearer&session_state={session state}&expires_in=3600```\n',
        'On an unsuccessful response, the 301 redirect location header will be of the format:\n> ```https://authenticate.riotgames.com/login?client_id=play-valorant-web-prod&nonce=1&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dplay-valorant-web-prod%26nonce%3D1%26redirect_uri%3Dhttps%253A%252F%252Fplayvalorant.com%252Fopt_in%26response_type%3Dtoken%2520id_token&response_type=token%20id_token&method=riot_identity```\n',
    ].join('  \n'),
    category: 'Authentication Endpoints',
    type: 'other',
    suffix: 'https://auth.riotgames.com/authorize?redirect_uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in&client_id=play-valorant-web-prod&response_type=token%20id_token&nonce=1&scope=account%20openid'
} as const satisfies ValorantEndpoint