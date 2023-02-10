import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema} from '../../commonTypes'

export const chatSessionEndpoint = {
    name: 'Chat Session',
    description: 'Get the current session including player name and PUUID',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'chat/v1/session',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            federated: z.boolean(),
            game_name: z.string(),
            game_tag: z.string(),
            loaded: z.boolean(),
            name: z.string(),
            pid: z.string(),
            puuid: playerUUIDSchema,
            region: z.string(),
            resource: z.string(),
            state: z.string()
        })
    }
} satisfies ValorantEndpoint

export type ChatSessionResponse = z.input<typeof chatSessionEndpoint.responses['200']>