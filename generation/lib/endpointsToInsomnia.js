function insertValorantPluginTemplates(url)
{
    return url.replaceAll('{region}', '{% valorantregion  %}')
               .replaceAll('{puuid}', '{% puuid  %}')
               .replaceAll('{entitlement}', '{% entitlement  %}')
               .replaceAll('{lockfile port}', '{% lockfileport  %}')
               .replaceAll('{lockfile password}', '{% lockfilepassword  %}')
               .replaceAll('{client version}', '{% clientversion  %}')
               .replaceAll('{client platform}', '{% clientplatform  %}')
               .replaceAll('{pre-game match id}', '{% pregamematch  %}')
               .replaceAll('{in-progress match id}', '{% coregamematch  %}')
               .replaceAll('{party id}', '{% partyid  %}');
}

module.exports = function(dataManager)
{
    let insomniaResources = [];
    let folders = {};
    
    let folderID = 1;
    let resourceID = 1;
    let pairID = 1;
    
    let resourceSortKey = 0;
    let folderSortKey = 0;
    
    const now = (new Date()).getTime();
    for(const endpoint of endpoints)
    {
        if(!folders.hasOwnProperty(endpoint.folder))
        {
            folders[endpoint.folder] = `__GROUP_${folderID++}__`;
        }
        
        let resource = {
            '_id': `__REQUEST_${resourceID++}__`,
            parentId: folders[endpoint.folder],
            modified: now,
            created: now,
            url: insertValorantPluginTemplates(endpoint.url),
            name: endpoint.name,
            description: endpoint.description || '',
            method: endpoint.method,
            body: {},
            parameters: [],
            headers: [],
            authentication: {},
            metaSortKey: resourceSortKey++,
            isPrivate: false,
            settingStoreCookies: true,
            settingSendCookies: true,
            settingDisableRenderRequestBody: false,
            settingEncodeUrl: true,
            settingRebuildPath: true,
            settingFollowRedirects: 'global',
            '_type': 'request'
        };
        
        if(endpoint.typicalAuth)
        {
            resource.headers.push({
                id: `__PAIR_${pairID++}__`,
                name: 'X-Riot-Entitlements-JWT',
                value: '{% entitlement  %}',
                description: '',
            });
            resource.authentication = {
                type: 'bearer',
                token: '{% token  %}',
                disabled: false
            };
        }
        else if(endpoint.localAuth)
        {
            resource.authentication = {
                type: 'basic',
                useISO88591: false,
                disabled: false,
                username: 'riot',
                password: '{% lockfilepassword  %}'
            };
        }
        
        if(endpoint.requiresClientPlatform)
        {
            resource.headers.push({
                id: `__PAIR_${pairID++}__`,
                name: 'X-Riot-ClientPlatform',
                value: '{% clientplatform  %}',
                description: '',
            });
        }
        if(endpoint.requiresClientVersion)
        {
            resource.headers.push({
                id: `__PAIR_${pairID++}__`,
                name: 'X-Riot-ClientVersion',
                value: '{% clientversion  %}',
                description: '',
            });
        }
        if(endpoint.body)
        {
            resource.body = {
                mimeType: 'application/json',
                text: endpoint.body
            };
        }
        
        insomniaResources.push(resource);
    }
    
    // Add required folder data
    const workspaceID = '__WORKSPACE_1__';
    insomniaResources.push({
        '_id': workspaceID,
        parentId: null,
        modified: now,
        created: now,
        name: 'Valorant',
        description: '',
        scope: 'collection',
        '_type': 'workspace'
    });
    for(const folderName in folders)
    {
        const parts = folderName.split('/');
        let lastParent = workspaceID;
        for(let i = 0; i < parts.length; i++)
        {
            // Check if the folder already exists
            let existingFolder = insomniaResources.find(r => (r.name === parts[i] && r.parentId === lastParent));
            if(existingFolder)
            {
                lastParent = existingFolder['_id'];
            }
            else
            {
                let nextID = (i === parts.length - 1) ? folders[folderName] : `__GROUP_${folderID++}__`;
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
                });
                lastParent = nextID;
            }
        }
    }
    
    return {
        '_type': 'export',
        '__export_format': 4,
        '__export_date': (new Date()).toISOString(),
        '__export_source': 'insomnia.desktop.app:v2021.4.0',
        resources: insomniaResources
    };
}
