import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const sessionsEndpoint = {
    name: 'Sessions',
    description: 'Gets info about the running Valorant process including start arguments\n  ' +
        'Can be used to get shard, region, and puuid by parsing launch args.',
    queryName: 'RiotClientSession_FetchSessions',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'product-session/v1/external-sessions',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.record(z.string().describe('Session ID'), z.object({
            exitCode: z.number(),
            exitReason: z.null(),
            isInternal: z.boolean(),
            launchConfiguration: z.object({
                arguments: z.array(z.string()),
                executable: z.string(),
                locale: z.string().nullable(),
                voiceLocale: z.null(),
                workingDirectory: z.string()
            }),
            patchlineFullName: z.enum(['VALORANT', 'riot_client']),
            patchlineId: z.enum(['', 'live', 'pbe']),
            phase: z.string(),
            productId: z.enum(['valorant', 'riot_client']),
            version: z.string()
        }))
    }
} as const satisfies ValorantEndpoint

export type SessionsResponse = z.input<typeof sessionsEndpoint.responses['200']>