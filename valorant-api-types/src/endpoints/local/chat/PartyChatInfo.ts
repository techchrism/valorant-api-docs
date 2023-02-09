import {ValorantEndpoint} from '../../../ValorantEndpoint'
import {z} from 'zod'

export const partyChatInfoEndpoint = {
    name: 'Party Chat Info',
    description: 'Get information about the party chat',
    category: 'Local Endpoints/Chat',
    type: 'local',
    suffix: 'chat/v6/conversations/ares-parties',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            conversations: z.array(z.object({
                cid: z.string(),
                direct_messages: z.boolean(),
                global_readership: z.boolean(),
                message_history: z.boolean(),
                mid: z.string(),
                muted: z.boolean(),
                mutedRestriction: z.boolean(),
                type: z.enum(['groupchat', 'chat']),
                uiState: z.object({
                    changedSinceHidden: z.boolean(),
                    hidden: z.boolean()
                }),
                unread_count: z.number()
            }))
        })
    }
} satisfies ValorantEndpoint

export type PartyChatInfoResponse = z.input<typeof partyChatInfoEndpoint.responses['200']>