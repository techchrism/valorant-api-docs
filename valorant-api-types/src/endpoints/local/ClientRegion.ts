import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const clientRegionEndpoint = {
    name: 'Client Region',
    description: 'Gets info about the region and locale from the Riot client',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'riotclient/region-locale',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            locale: z.string(),
            region: z.string(),
            webLanguage: z.string(),
            webRegion: z.string()
        })
    }
} satisfies ValorantEndpoint

export type ClientRegionResponse = z.input<typeof clientRegionEndpoint.responses['200']>