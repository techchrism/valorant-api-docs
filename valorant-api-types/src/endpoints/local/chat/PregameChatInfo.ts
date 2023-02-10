import {ValorantEndpoint} from '../../../ValorantEndpoint'
import {z} from 'zod'
import {conversationsSchema} from '../../../commonTypes'

export const pregameChatInfoEndpoint = {
    name: 'Pre-Game Chat Info',
    description: 'Get information about the pre-game chat',
    category: 'Local Endpoints/Chat',
    type: 'local',
    suffix: 'chat/v6/conversations/ares-pregame',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': conversationsSchema
    }
} satisfies ValorantEndpoint

export type PregameChatInfoResponse = z.input<typeof pregameChatInfoEndpoint.responses['200']>