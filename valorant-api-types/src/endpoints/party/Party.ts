import {ValorantEndpoint} from '../../ValorantEndpoint'
import {partySchema} from '../../commonTypes'
import {z} from 'zod'

export const partyEndpoint = {
    name: 'Party',
    description: 'Get the party information for the given party ID',
    queryName: 'Party_FetchParty',
    category: 'Party Endpoints',
    type: 'glz',
    suffix: 'parties/v1/parties/{party id}',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': partySchema
    }
} satisfies ValorantEndpoint

export type PartyResponse = z.input<typeof partyEndpoint.responses['200']>