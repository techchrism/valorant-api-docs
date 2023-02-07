import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partySchema} from '../../commonTypes'
import {z} from 'zod'

export const enterMatchmakingQueueEndpoint = {
    name: 'Enter Matchmaking Queue',
    description: 'Enter the matchmaking queue for the party',
    queryName: 'Party_EnterMatchmakingQueue',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/parties/{party id}/matchmaking/join',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': partySchema
    }
} satisfies ValorantEndpoint

export type EnterMatchmakingQueueResponse = z.input<typeof enterMatchmakingQueueEndpoint.responses['200']>