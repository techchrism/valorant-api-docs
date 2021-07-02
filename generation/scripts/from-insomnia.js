/*
    Script designed to take an insomnia export and turn it into a rudimentary endpoints.json file
 */
const fs = require('fs').promises;

function getFullPath(groupResource, name, resources)
{
    if(groupResource.parentId === null)
    {
        return name;
    }
    else
    {
        for(const resource of resources)
        {
            if(resource['_id'] === groupResource.parentId)
            {
                if(resource.parentId === null) return name;
                
                name = resource.name + '/' + name;
                return getFullPath(resource, name, resources);
            }
        }
    }
}

function replaceValorantPluginTemplates(url)
{
    return url.replaceAll('{% valorantregion  %}', '{region}')
                .replaceAll('{% puuid  %}', '{puuid}')
                .replaceAll('{% entitlement  %}', '{entitlement}')
                .replaceAll('{% lockfileport  %}', '{lockfile port}')
                .replaceAll('{% lockfilepassword  %}', '{lockfile password}')
                .replaceAll('{% clientversion  %}', '{client version}')
                .replaceAll('{% clientplatform  %}', '{client platform}')
                .replaceAll('{% pregamematch  %}', '{pre-game match id}')
                .replaceAll('{% coregamematch  %}', '{in-progress match id}')
                .replaceAll('{% partyid  %}', '{party id}');
}

(async () =>
{
    const exportData = JSON.parse(await fs.readFile('insomnia.json', 'utf-8'));
    
    let folders = {};
    for(const group of exportData['resources'].filter(r => r['_type'] === 'request_group'))
    {
        folders[group['_id']] = getFullPath(group, group.name, exportData['resources']);
    }
    
    let endpoints = [];
    for(const request of exportData['resources'].filter(r => r['_type'] === 'request'))
    {
        let endpoint = {
            name: request.name,
            description: '',
            url: replaceValorantPluginTemplates(request.url),
            method: request.method,
            folder: folders[request.parentId]
        };
        
        if(request.headers.some(h => h.name === 'X-Riot-Entitlements-JWT') && request.authentication.token === '{% token  %}')
        {
            endpoint.typicalAuth = true;
        }
        else if(request.authentication.password === '{% lockfilepassword  %}')
        {
            endpoint.localAuth = true;
        }
        
        if(request.headers.some(h => h.name === 'X-Riot-ClientVersion'))
        {
            endpoint.requiresClientVersion = true;
        }
        if(request.headers.some(h => h.name === 'X-Riot-ClientPlatform'))
        {
            endpoint.requiresClientPlatform = true;
        }
        
        if(request.body.text)
        {
            endpoint.body = request.body.text;
        }
        
        endpoints.push(endpoint);
    }
    
    await fs.writeFile('endpoints.json', JSON.stringify({endpoints}, null, 4), 'utf-8');
    console.log(`Saved ${endpoints.length} endpoints`);
})();
