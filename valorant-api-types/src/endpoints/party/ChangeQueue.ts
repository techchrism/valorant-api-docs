import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partySchema, queueIDSchema} from '../../commonTypes'
import {z} from 'zod'

export const changeQueueEndpoint = {
    name: 'Change Queue',
    description: 'Change the queue for the party',
    queryName: 'Party_ChangeQueue',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/parties/{party id}/queue',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    body: z.object({
        queueId: queueIDSchema
    }),
    responses: {
        '200': partySchema
    }
} satisfies ValorantEndpoint

export type ChangeQueueResponse = z.input<typeof changeQueueEndpoint.responses['200']>