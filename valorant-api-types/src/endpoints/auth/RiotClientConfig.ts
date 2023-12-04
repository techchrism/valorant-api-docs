import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const riotClientConfigEndpoint = {
    name: 'Riot Client Config',
    description: 'Gets the config file used by the Riot Client. This includes a ton of info, most of it undocumented.',
    category: 'Authentication Endpoints',
    type: 'other',
    suffix: 'https://clientconfig.rpg.riotgames.com/api/v1/config/player?app=Riot%20Client',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.intersection(z.object({
            'chat.affinities': z.record(
                z.string().describe('Affinity ID'),
                z.string().describe('Chat Server Host')
            ).describe('Mapping of affinity ID to chat server host'),
            'chat.affinity_domains': z.record(
                z.string().describe('Affinity ID'),
                z.string().describe('Affinity Domain')
            ).describe('Mapping of affinity ID to affinity domain'),
            'chat.port': z.number().describe('Chat server port')
        }), z.record(z.string(), z.unknown()))
    }
} as const satisfies ValorantEndpoint

export type RiotClientConfigResponse = z.input<typeof riotClientConfigEndpoint.responses['200']>