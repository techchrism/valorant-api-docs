import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema} from '../../commonTypes'

export const nameServiceEndpoint = {
    name: 'Name Service',
    description: 'Get a players name and tagline by the PlayerUUID',
    queryName: 'NameService_GetPlayerInfo',
    category: 'PVP Endpoints',
    type: 'pd',
    method: 'PUT',
    suffix: 'name-service/v2/players',
    responses: {
        '200': z.array(z.object({
            DisplayName: z.string(),
            Subject: playerUUIDSchema,
            GameName: z.string(),
            TagLine: z.string(),
        }))
    },
    body: z.array(playerUUIDSchema).describe("An array of playerUUIDs you want to get the NameService for")
} as const satisfies ValorantEndpoint

export type NameServiceResponse = z.input<typeof nameServiceEndpoint.responses['200']>