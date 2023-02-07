import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const partyRemovePlayerEndpoint = {
    name: 'Party Remove Player',
    description: 'Remove a player from the current party',
    queryName: 'Party_RemovePlayer',
    category: 'Party Endpoints',
    type: 'glz',
    suffix: 'parties/v1/players/{puuid}',
    method: 'DELETE',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '204': z.undefined()
    }
} satisfies ValorantEndpoint