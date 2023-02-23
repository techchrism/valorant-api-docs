import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {dateSchema, weakUUIDSchema} from '../../commonTypes'

export const fetchContentEndpoint = {
    name: 'Fetch Content',
    description: 'Get a list of seasons, acts, and events',
    queryName: 'Content_FetchContent',
    category: 'PVP Endpoints',
    type: 'shared',
    suffix: 'content-service/v3/content',
    riotRequirements: {
        clientVersion: true,
        clientPlatform: true
    },
    responses: {
        '200': z.object({
            DisabledIDs: z.array(z.unknown()),
            Seasons: z.array(z.object({
                ID: weakUUIDSchema,
                Name: z.string(),
                Type: z.enum(['episode', 'act']),
                StartTime: dateSchema,
                EndTime: dateSchema,
                IsActive: z.boolean()
            })),
            Events: z.array(z.object({
                ID: weakUUIDSchema,
                Name: z.string(),
                StartTime: dateSchema,
                EndTime: dateSchema,
                IsActive: z.boolean()
            }))
        })
    }
} as const satisfies ValorantEndpoint

export type FetchContentResponse = z.input<typeof fetchContentEndpoint.responses['200']>