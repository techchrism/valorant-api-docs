import {ValorantEndpoint} from '../../../ValorantEndpoint'
import {z} from 'zod'
import {chatMessagesSchema} from '../../../commonTypes'

export const sendChatEndpoint = {
    name: 'Send Chat',
    description: 'Send a message to the specified group',
    category: 'Local Endpoints/Chat',
    type: 'local',
    suffix: 'chat/v6/messages',
    method: 'POST',
    body: z.object({
        cid: z.string().describe('The conversation ID of the group to send the message to'),
        message: z.string(),
        type: z.enum(['groupchat', 'chat']).describe('Use chat for whispers and groupchat for group messages')
    }),
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': chatMessagesSchema
    }
} satisfies ValorantEndpoint

export type SendChatResponse = z.input<typeof sendChatEndpoint.responses['200']>