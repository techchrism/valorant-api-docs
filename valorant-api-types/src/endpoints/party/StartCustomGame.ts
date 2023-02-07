import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partySchema} from '../../commonTypes'
import {z} from 'zod'

export const startCustomGameEndpoint = {
    name: 'Start Custom Game',
    description: 'Start a custom game',
    queryName: 'Party_StartCustomGame',
    category: 'Party Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'parties/v1/parties/{party id}/startcustomgame',
    riotRequirements: {
        token: true,
        entitlement: true,
        clientVersion: true
    },
    responses: {
        '200': partySchema
    }
} satisfies ValorantEndpoint

export type StartCustomGameResponse = z.input<typeof startCustomGameEndpoint.responses['200']>