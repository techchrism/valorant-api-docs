import {endpoints, ValorantEndpoint} from 'valorant-api-types'
import packageJson from '../../package.json'

function insertValorantPluginTemplates(url: string) {
    return url.replaceAll('{region}', '{% valorant_region  %}')
        .replaceAll('{shard}', '{% valorant_shard  %}')
        .replaceAll('{puuid}', '{% puuid  %}')
        .replaceAll('{entitlement}', '{% valorant_entitlement  %}')
        .replaceAll('{port}', '{% lockfile_port  %}')
        .replaceAll('{lockfile password}', '{% lockfile_password  %}')
        .replaceAll('{client version}', '{% client_version  %}')
        .replaceAll('{client platform}', '{% client_platform  %}')
        .replaceAll('{pre-game match id}', '{% pregame_match_id  %}')
        .replaceAll('{current game match id}', '{% current_game_match_id  %}')
        .replaceAll('{party id}', '{% party_id  %}')
}

function endpointToURL(endpoint: ValorantEndpoint): string {
    switch(endpoint.type) {
        case 'pd': return `https://pd.{shard}.a.pvp.net/${endpoint.suffix}`
        case 'glz': return `https://glz-{region}-1.{shard}.a.pvp.net/${endpoint.suffix}`
        case 'shared': return `https://shared.{shard}.a.pvp.net/${endpoint.suffix}`
        case 'local': return `https://127.0.0.1:{port}/${endpoint.suffix}`
        case 'other': return endpoint.suffix
        default: throw new Error('Invalid endpoint type: ' + endpoint.type)
    }
}

const version = packageJson.dependencies['valorant-api-types'].replace(/[^\d.]/g, '')

export async function get() {
    let insomniaResources = []
    let folders = new Map<string, string>()

    let folderID = 1
    let resourceID = 1
    let pairID = 1
    let payloadID = 1

    let resourceSortKey = 0
    let folderSortKey = 0

    const now = Date.now()

    // XMPP Endpoints
    const xmppTypes: {type: string, name: string, desc: string}[] = [
        {
            type: 'raw',
            name: 'Raw',
            desc: 'Proxies raw XMPP messages. XML may be split across multiple messages.'
        },
        {
            type: 'raw-buffered',
            name: 'Raw Buffered',
            desc: 'Proxies buffered XMPP messages. XML is buffered until a full message is received.'
        },
        {
            type: 'json',
            name: 'JSON',
            desc: 'Proxies JSON XMPP messages. XML is buffered, parsed, and converted to JSON.'
        }
    ]
    for(const isMITM of [false, true]) {
        for(const xmppType of xmppTypes) {
            const category = `XMPP/${isMITM ? 'MITM' : 'Connection'}`
            if(!folders.has(category)) {
                folders.set(category, `__GROUP_${folderID++}__`)
            }

            let resource = {
                '_id': `__REQUEST_${resourceID++}__`,
                parentId: folders.get(category),
                modified: now,
                created: now,
                url: `${isMITM ? '{% xmpp_mitm_websocket_url  %}' : '{% xmpp_websocket_url  %}'}/${xmppType.type}`,
                name: `XMPP ${xmppType.name} ${isMITM ? 'MITM' : 'Connection'}`,
                description: xmppType.desc,
                parameters: [] as any[],
                headers: [] as any[],
                authentication: {},
                metaSortKey: resourceSortKey++,
                isPrivate: false,
                settingStoreCookies: false,
                settingSendCookies: false,
                settingDisableRenderRequestBody: false,
                settingEncodeUrl: true,
                settingRebuildPath: true,
                settingFollowRedirects: 'off',
                '_type': 'websocket_request'
            }
            if(!isMITM) {
                resource.headers.push(...[
                    {
                        id: `__PAIR_${pairID++}__`,
                        name: 'X-Riot-Entitlements-JWT',
                        value: '{% valorant_entitlement  %}',
                        description: ''
                    },
                    {
                        id: `__PAIR_${pairID++}__`,
                        name: 'X-Riot-PAS-JWT',
                        value: '{% valorant_pas_token  %}',
                        description: ''
                    }
                ])
                resource.authentication = {
                    type: 'bearer',
                    token: '{% valorant_token  %}',
                    disabled: false
                }
            }
            insomniaResources.push(resource)
        }
    }
    const xmppFolderID = `__GROUP_${folderID++}__`
    folders.set('XMPP', xmppFolderID)

    // Other Endpoints
    for(const endpoint of Object.values(endpoints) as ValorantEndpoint[]) {
        const category = (typeof endpoint.category === 'string') ? endpoint.category : (endpoint.category ?? []).join('/')

        if(!folders.has(category)) {
            folders.set(category, `__GROUP_${folderID++}__`)
        }

        let resource = {
            '_id': `__REQUEST_${resourceID++}__`,
            parentId: folders.get(category),
            modified: now,
            created: now,
            url: insertValorantPluginTemplates(endpointToURL(endpoint)),
            name: endpoint.name,
            description: endpoint.description + `\n\nMore info at <https://valapidocs.techchrism.me/endpoint/${endpoint.name.toLowerCase().replace(/ /g, '-')}>`,
            method: endpoint.method ?? 'GET',
            body: {},
            parameters: [] as any[],
            headers: [] as any[],
            authentication: {},
            metaSortKey: resourceSortKey++,
            isPrivate: false,
            settingStoreCookies: false,
            settingSendCookies: false,
            settingDisableRenderRequestBody: false,
            settingEncodeUrl: true,
            settingRebuildPath: true,
            settingFollowRedirects: 'off',
            '_type': 'request'
        }

        if(endpoint.riotRequirements?.entitlement) {
            resource.headers.push({
                id: `__PAIR_${pairID++}__`,
                name: 'X-Riot-Entitlements-JWT',
                value: '{% valorant_entitlement  %}',
                description: ''
            })
        }
        if(endpoint.riotRequirements?.token) {
            resource.authentication = {
                type: 'bearer',
                token: '{% valorant_token  %}',
                disabled: false
            }
        }
        if(endpoint.riotRequirements?.localAuth) {
            resource.authentication = {
                type: 'basic',
                useISO88591: false,
                disabled: false,
                username: 'riot',
                password: '{% lockfile_password  %}'
            }
        }
        if(endpoint.riotRequirements?.clientPlatform) {
            resource.headers.push({
                id: `__PAIR_${pairID++}__`,
                name: 'X-Riot-ClientPlatform',
                value: '{% client_platform  %}',
                description: '',
            })
        }
        if(endpoint.riotRequirements?.clientVersion) {
            resource.headers.push({
                id: `__PAIR_${pairID++}__`,
                name: 'X-Riot-ClientVersion',
                value: '{% client_version  %}',
                description: '',
            })
        }

        if(endpoint.headers !== undefined) {
            for(const [name, value] of endpoint.headers.entries()) {
                resource.headers.push({
                    id: `__PAIR_${pairID++}__`,
                    name,
                    value: insertValorantPluginTemplates(value),
                    description: '',
                })
            }
        }

        insomniaResources.push(resource)
    }

    // Add local websocket
    const websocketID = `__REQUEST_${resourceID++}__`
    insomniaResources.push({
        '_id': websocketID,
        parentId: folders.get('Local Endpoints'),
        modified: now,
        created: now,
        url: `wss://127.0.0.1:{% lockfile_port  %}`,
        name: 'Local WebSocket',
        parameters: [] as any[],
        headers: [] as any[],
        authentication: {
            type: 'basic',
            useISO88591: false,
            disabled: false,
            username: 'riot',
            password: '{% lockfile_password  %}'
        },
        metaSortKey: resourceSortKey++,
        isPrivate: false,
        settingStoreCookies: false,
        settingSendCookies: false,
        settingDisableRenderRequestBody: false,
        settingEncodeUrl: true,
        settingRebuildPath: true,
        settingFollowRedirects: 'off',
        '_type': 'websocket_request'
    })
    insomniaResources.push({
        '_id': `ws-payload_${payloadID++}`,
        parentId: websocketID,
        modified: now,
        created: now,
        name: 'Payload',
        value: JSON.stringify([5, 'OnJsonApiEvent']),
        mode: 'application/json',
        '_type': 'websocket_payload'
    })

    // Add required folder data
    const workspaceID = '__WORKSPACE_1__'
    insomniaResources.push({
        '_id': workspaceID,
        parentId: null,
        modified: now,
        created: now,
        name: 'Valorant API v' + version,
        description: 'Valorant Insomnia workspace automatically generated by [https://github.com/techchrism/valorant-api-docs/](https://github.com/techchrism/valorant-api-docs/)  \nBuild date: ' +
            (new Date()).toString() + '  \nBuild version: ' + version,
        scope: 'collection',
        '_type': 'workspace'
    })
    for(const folderName of folders.keys()) {
        const parts = folderName.split('/')
        let lastParent = workspaceID
        for(let i = 0; i < parts.length; i++) {
            // Check if the folder already exists
            let existingFolder = insomniaResources.find(r => (r.name === parts[i] && r.parentId === lastParent))
            if(existingFolder) {
                lastParent = existingFolder['_id']
            } else {
                let nextID = (i === parts.length - 1) ? folders.get(folderName)! : `__GROUP_${folderID++}__`
                insomniaResources.push({
                    '_id': nextID,
                    parentId: lastParent,
                    modified: now,
                    created: now,
                    name: parts[i],
                    description: '',
                    environment: {},
                    environmentPropertyOrder: null,
                    metaSortKey: folderSortKey++,
                    '_type': 'request_group'
                })
                lastParent = nextID
            }
        }
    }

    const root = {
        '_type': 'export',
        '__export_format': 4,
        '__export_date': (new Date()).toISOString(),
        '__export_source': 'insomnia.desktop.app:v2021.4.0',
        resources: insomniaResources
    }

    return {
        body: JSON.stringify(root)
    }
}