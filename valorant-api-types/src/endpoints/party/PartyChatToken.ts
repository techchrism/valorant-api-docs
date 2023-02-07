import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const partyChatTokenEndpoint = {
    name: 'Party Chat Token',
    description: 'Get the party chat token',
    queryName: 'Party_FetchMUCToken',
    category: 'Party Endpoints',
    type: 'glz',
    suffix: '/parties/v1/parties/{party id}/muctoken',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            Token: z.string(),
            Room: z.string()
        })
    }
} satisfies ValorantEndpoint

export type PartyChatTokenResponse = z.input<typeof partyChatTokenEndpoint.responses['200']>