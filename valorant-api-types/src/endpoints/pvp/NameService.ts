import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema} from '../../commonTypes'

export const nameServiceEndpoint = {
    name: 'Name Service',
    description: 'Get a player\'s name and tagline by their PUUID. Supports retrieving multiple players in one request.',
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
    body: z.array(playerUUIDSchema).describe("PUUID(s) to retrieve the name data for")
} as const satisfies ValorantEndpoint

export type NameServiceResponse = z.input<typeof nameServiceEndpoint.responses['200']>
