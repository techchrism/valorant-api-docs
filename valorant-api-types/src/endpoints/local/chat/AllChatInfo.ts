import {ValorantEndpoint} from '../../../ValorantEndpoint'
import {z} from 'zod'
import {conversationsSchema} from '../../../commonTypes'

export const allChatInfoEndpoint = {
    name: 'All Chat Info',
    description: 'Get information about all active conversations',
    category: 'Local Endpoints/Chat',
    type: 'local',
    suffix: 'chat/v6/conversations',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': conversationsSchema
    }
} as const satisfies ValorantEndpoint

export type AllChatInfoResponse = z.input<typeof allChatInfoEndpoint.responses['200']>