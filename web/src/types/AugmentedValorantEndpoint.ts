import type { ValorantEndpoint } from "valorant-api-types";
import { endpoints as existingEndpoints } from "valorant-api-types";
import { z } from "zod";

export type AugmentedValorantEndpoint = Omit<ValorantEndpoint, 'method'> & {
    method: ValorantEndpoint['method'] | 'WSS' | 'TCP'
}

export const endpoints: {[key: string]: AugmentedValorantEndpoint} = {
    xmppEndpoint: {
        name: 'XMPP Connection',
        description: [
            'The XMPP connection is a TLS-encrypted TCP socket connection to a Riot chat server.',
            'XMPP is used for the social system of Valorant which includes sending / receiving presence info, messages, and friend requests.',
            'Messages are sent back and forth in XML and sometimes the server will split up messages into fragments of incomplete XML. You may need to buffer incoming messages until a valid XML string is formed.',
            '',
            'For docs on how to connect to the XMPP server, see <https://github.com/giorgi-o/CrossPlatformPlaying/wiki/Riot-Games>',
            '',
            [
                'Some open-source tools for interacting with Valorant XMPP:',
                ' - [Valorant XMPP Logger](https://github.com/techchrism/valorant-xmpp-logger)',
                '   - An XMPP MITM ("man in the middle") that logs all the messages between the Riot Client and the XMPP server while Valorant is running',
                ' - [Valorant XMPP Watcher](https://github.com/techchrism/valorant-xmpp-watcher)',
                '   - Directly connects to the XMPP server and logs incoming messages',
                ' - [Valorant XMPP Log Viewer](https://github.com/techchrism/valorant-xmpp-log-viewer)',
                '   - Webapp UI for viewing the XMPP logs from Valorant XMPP Logger and Valorant XMPP Watcher',
                ' - [insomnia-plugin-valorant](https://github.com/techchrism/insomnia-plugin-valorant)',
                '   - Adds template tags to Insomnia for an interactive XMPP UI proxied over a WebSocket'
            ].join('\n')
        ].join('  \n'),
        category: 'XMPP',
        type: 'other',
        suffix: '{affinity host}:{chat server port}',
        method: 'TCP',
        variables: new Map([
            ['affinity host', z.string().describe('The chat server host from the [GET Riot Client Config] specific to the player\'s affinity. The affinity can be found from the [GET PAS Token] endpoint')],
            ['chat server port', z.string().describe('The chat server port from the [GET Riot Client Config]. Only observed as `5223`')]
        ])
    },
    ...(existingEndpoints as unknown as {[key: string]: AugmentedValorantEndpoint}),
    localWebSocketEndpoint: {
        name: 'Local WebSocket',
        description: [

        ].join('\n\n'),
        category: 'Local Endpoints',
        type: 'other',
        suffix: 'wss://127.0.0.1:{port}',
        method: 'WSS',
        riotRequirements: {
            localAuth: true
        }
    }
}