import {ValorantEndpoint} from '../../../ValorantEndpoint'
import {z} from 'zod'
import {conversationsSchema} from '../../../commonTypes'

export const currentGameChatInfoEndpoint = {
    name: 'Current Game Chat Info',
    description: 'Get information about the current game chat',
    category: 'Local Endpoints/Chat',
    type: 'local',
    suffix: 'chat/v6/conversations/ares-coregame',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': conversationsSchema
    }
} satisfies ValorantEndpoint

export type CurrentGameChatInfoResponse = z.input<typeof currentGameChatInfoEndpoint.responses['200']>