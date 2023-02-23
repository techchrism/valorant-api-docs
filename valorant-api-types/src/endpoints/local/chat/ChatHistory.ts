import {ValorantEndpoint} from '../../../ValorantEndpoint'
import {z} from 'zod'
import {chatMessagesSchema} from '../../../commonTypes'

export const chatHistoryEndpoint = {
    name: 'Chat History',
    description: 'Get chat history for all conversations or a specific conversation if the cid is provided',
    category: 'Local Endpoints/Chat',
    type: 'local',
    suffix: 'chat/v6/messages',
    query: new Map([
        ['cid', z.string().optional()]
    ]),
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': chatMessagesSchema
    }
} as const satisfies ValorantEndpoint

export type ChatHistoryResponse = z.input<typeof chatHistoryEndpoint.responses['200']>