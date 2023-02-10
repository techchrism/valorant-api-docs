import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema} from '../../commonTypes'

export const friendRequestsEndpoint = {
    name: 'Friend Requests',
    description: 'Get a list of friend requests',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'chat/v4/friendrequests',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            requests: z.array(z.object({
                game_name: z.string(),
                game_tag: z.string(),
                name: z.string(),
                note: z.string(),
                pid: z.string(),
                puuid: playerUUIDSchema,
                region: z.string(),
                subscription: z.enum(['pending_out', 'pending_in'])
            }))
        })
    }
} satisfies ValorantEndpoint

export type FriendRequestsResponse = z.input<typeof friendRequestsEndpoint.responses['200']>