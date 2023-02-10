import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const localSwaggerDocsEndpoint = {
    name: 'Local Swagger Docs',
    description: 'Fetches json Swagger docs for local endpoints. Can be imported into Swagger or Insomnia.',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'swagger/v3/openapi.json',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.unknown().describe('Swagger doc schema')
    }
} satisfies ValorantEndpoint