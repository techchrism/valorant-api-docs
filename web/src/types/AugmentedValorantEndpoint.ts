import type { ValorantEndpoint } from "valorant-api-types";
import { endpoints as existingEndpoints } from "valorant-api-types";
import { z } from "zod";

export type AugmentedValorantEndpoint = Omit<ValorantEndpoint, 'method'> & {
    method: ValorantEndpoint['method'] | 'WSS' | 'TCP'
}

export const endpoints: {[key: string]: AugmentedValorantEndpoint} = {
    xmppEndpoint: {
        name: 'XMPP Connection',
        description: '',
        category: 'XMPP',
        type: 'other',
        suffix: '{affinity host}:{chat server port}',
        method: 'TCP',
        variables: new Map([
            ['affinity host', z.string().describe('The chat server host from the [GET Riot Client Config] specific to the player\'s affinity')],
            ['chat server port', z.string().describe('The chat server port from the [GET Riot Client Config]. Only observed as `5223`')]
        ])
    },
    ...(existingEndpoints as unknown as {[key: string]: AugmentedValorantEndpoint}),
    localWebSocketEndpoint: {
        name: 'Local WebSocket',
        description: '',
        category: 'Local Endpoints',
        type: 'other',
        suffix: 'wss://127.0.0.1:{port}',
        method: 'WSS',
        riotRequirements: {
            localAuth: true
        }
    }
}