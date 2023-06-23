import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const sendFriendRequestEndpoint = {
    name: 'Send Friend Request',
    description: 'Sends a friend request to a player. Can be used in conjunction with [GET Friend Requests] and [DELETE Remove Friend Request] to determine a player\'s PUUID from their game name.',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'chat/v4/friendrequests',
    method: 'POST',
    riotRequirements: {
        localAuth: true
    },
    body: z.object({
        game_name: z.string(),
        game_tag: z.string()
    }),
    responses: {
        '200': z.object({
            requests: z.array(z.any()).length(0).describe('Empty array')
        })
    }
} as const satisfies ValorantEndpoint

export type SendFriendRequestResponse = z.input<typeof sendFriendRequestEndpoint.responses['200']>