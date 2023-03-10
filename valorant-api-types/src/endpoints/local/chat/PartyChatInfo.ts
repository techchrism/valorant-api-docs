import {ValorantEndpoint} from '../../../ValorantEndpoint'
import {z} from 'zod'
import {conversationsSchema} from '../../../commonTypes'

export const partyChatInfoEndpoint = {
    name: 'Party Chat Info',
    description: 'Get information about the party chat',
    category: ['Local Endpoints', 'Chat'] as string[],
    type: 'local',
    suffix: 'chat/v6/conversations/ares-parties',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': conversationsSchema
    }
} as const satisfies ValorantEndpoint

export type PartyChatInfoResponse = z.input<typeof partyChatInfoEndpoint.responses['200']>