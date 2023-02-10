import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partySchema} from '../../commonTypes'
import {z} from 'zod'

export const leaveMatchmakingQueueEndpoint = {
    name: 'Leave Matchmaking Queue',
    description: 'Leave the matchmaking queue for the party',
    queryName: 'Party_LeaveMatchmakingQueue',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/parties/{party id}/matchmaking/leave',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': partySchema
    }
} satisfies ValorantEndpoint

export type LeaveMatchmakingQueueResponse = z.input<typeof leaveMatchmakingQueueEndpoint.responses['200']>