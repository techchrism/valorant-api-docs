import {ValorantEndpoint} from '../../../ValorantEndpoint'
import {z} from 'zod'
import {participantsSchema} from '../../../commonTypes'

export const chatParticipantsEndpoint = {
    name: 'Chat Participants',
    description: 'Get information about the participants of all active conversations or a specific conversation if a cid is provided',
    category: 'Local Endpoints/Chat',
    type: 'local',
    suffix: 'chat/v5/participants',
    query: new Map([
        ['cid', z.string().optional()]
    ]),
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': participantsSchema
    }
} satisfies ValorantEndpoint

export type ChatParticipantsResponse = z.input<typeof chatParticipantsEndpoint.responses['200']>