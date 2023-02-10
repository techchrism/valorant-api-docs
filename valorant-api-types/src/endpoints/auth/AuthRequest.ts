import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const authRequestEndpoint = {
    name: 'Auth Request',
    description: 'Perform authorization request to get token  \n' +
        'Requires cookies from the [Auth Cookies]({{#linkto}}Auth Cookies{{/linkto}}) stage. The token can be found in the `uri` property.',
    category: 'Authentication Endpoints',
    type: 'other',
    suffix: 'https://auth.riotgames.com/api/v1/authorization',
    method: 'PUT',
    headers: new Map([
        ['Content-Type', 'application/json'],
    ]),
    body: z.object({
        type: z.literal('auth'),
        username: z.string(),
        password: z.string(),
        remember: z.boolean(),
        language: z.literal('en_US')
    })
} satisfies ValorantEndpoint