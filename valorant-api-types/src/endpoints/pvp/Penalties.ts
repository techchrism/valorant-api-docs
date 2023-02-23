import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema} from '../../commonTypes'

export const penaltiesEndpoint = {
    name: 'Penalties',
    description: 'Get the matchmaking penalties for the given player',
    queryName: 'Restrictions_FetchPlayerRestrictionsV3',
    category: 'PVP Endpoints',
    type: 'pd',
    suffix: 'restrictions/v3/penalties',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            Subject: playerUUIDSchema,
            Penalties: z.array(z.unknown()), //TODO find structure for this
            Version: z.number()
        })
    }
} as const satisfies ValorantEndpoint

export type PenaltiesResponse = z.input<typeof penaltiesEndpoint.responses['200']>