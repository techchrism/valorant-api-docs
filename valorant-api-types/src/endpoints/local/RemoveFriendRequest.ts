import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema} from '../../commonTypes'

export const removeFriendRequestEndpoint = {
    name: 'Remove Friend Request',
    description: 'Removes an outgoing friend request',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'chat/v4/friendrequests',
    method: 'DELETE',
    riotRequirements: {
        localAuth: true
    },
    body: z.object({
        puuid: playerUUIDSchema
    }),
    responses: {
        '204': z.undefined()
    }
} as const satisfies ValorantEndpoint

export type RemoveFriendRequestResponse = z.input<typeof removeFriendRequestEndpoint.responses['204']>