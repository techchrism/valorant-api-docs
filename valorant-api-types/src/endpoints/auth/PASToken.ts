import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const pasTokenEndpoint = {
    name: 'PAS Token',
    description: 'Get a PAS token using the auth token. The PAS token is a JWT that contains the affinity for the XMPP server.',
    category: 'Authentication Endpoints',
    type: 'other',
    suffix: 'https://riot-geo.pas.si.riotgames.com/pas/v1/service/chat',
    method: 'GET',
    riotRequirements: {
        token: true
    },
    responses: {
        '200': z.string().describe('The PAS token')
    }
} as const satisfies ValorantEndpoint

export type PASTokenResponse = z.infer<typeof pasTokenEndpoint.responses['200']>