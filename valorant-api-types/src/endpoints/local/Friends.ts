import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {millisSchema, playerUUIDSchema} from '../../commonTypes'

export const friendsEndpoint = {
    name: 'Friends',
    description: 'Get a list of friends',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'chat/v4/friends',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            friends: z.array(z.object({
                activePlatform: z.string().nullable(),
                displayGroup: z.string(),
                game_name: z.string(),
                game_tag: z.string(),
                group: z.string(),
                last_online_ts: millisSchema.nullable(),
                name: z.string(),
                note: z.string(),
                pid: z.string(),
                puuid: playerUUIDSchema,
                region: z.string()
            }))
        })
    }
} as const satisfies ValorantEndpoint

export type FriendsResponse = z.input<typeof friendsEndpoint.responses['200']>