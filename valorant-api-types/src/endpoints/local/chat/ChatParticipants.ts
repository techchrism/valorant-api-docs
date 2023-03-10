import {ValorantEndpoint} from '../../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema} from '../../../commonTypes'

export const chatParticipantsEndpoint = {
    name: 'Chat Participants',
    description: 'Get information about the participants of all active conversations or a specific conversation if a cid is provided',
    category: ['Local Endpoints', 'Chat'] as string[],
    type: 'local',
    suffix: 'chat/v5/participants',
    query: new Map([
        ['cid', z.string().optional()]
    ]),
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            participants: z.array(z.object({
                activePlatform: z.null(),
                cid: z.string(),
                game_name: z.string(),
                game_tag: z.string(),
                muted: z.boolean(),
                name: z.string(),
                pid: z.string(),
                puuid: playerUUIDSchema,
                region: z.string()
            }))
        })
    }
} as const satisfies ValorantEndpoint

export type ChatParticipantsResponse = z.input<typeof chatParticipantsEndpoint.responses['200']>