import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const partyVoiceTokenEndpoint = {
    name: 'Party Voice Token',
    description: 'Get the party voice token',
    queryName: 'Party_FetchVoiceToken',
    category: 'Party Endpoints',
    type: 'glz',
    suffix: '/parties/v1/parties/{party id}/voicetoken',
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

export type PartyVoiceTokenResponse = z.input<typeof partyVoiceTokenEndpoint.responses['200']>