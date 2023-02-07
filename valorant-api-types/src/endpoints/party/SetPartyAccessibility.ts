import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partySchema} from '../../commonTypes'
import {z} from 'zod'

export const setPartyAccessibilityEndpoint = {
    name: 'Set Party Accessibility',
    description: 'Set the accessibility of the party',
    queryName: 'Party_SetAccessibility',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/parties/{party id}/accessibility',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    body: z.object({
        accessibility: z.enum(['OPEN', 'CLOSED'])
    }),
    responses: {
        '200': partySchema
    }
} satisfies ValorantEndpoint

export type SetPartyAccessibilityResponse = z.input<typeof setPartyAccessibilityEndpoint.responses['200']>