import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const localHelpEndpoint = {
    name: 'Local Help',
    description: 'Get help for the local client',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'help',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            events: z.record(z.string().describe('Websocket event name'), z.string().describe('Websocket event description')),
            functions: z.record(z.string().describe('Function name'), z.string().describe('Function description')),
            types: z.record(z.string().describe('Type name'), z.string().describe('Type description'))
        })
    }
} as const satisfies ValorantEndpoint

export type LocalHelpResponse = z.input<typeof localHelpEndpoint.responses['200']>