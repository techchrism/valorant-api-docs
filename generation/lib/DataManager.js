const fs = require('fs').promises;
const path = require('path');
const Mustache = require('mustache');

const githubURL = 'https://github.com/techchrism/valorant-api-docs';

class DataManager
{
    constructor(dataDir)
    {
        this.dataDir = dataDir;
        this.docs = {};
        this.endpoints = null;
        this.folders = [];
    }
    
    async readFiles()
    {
        // Read docs
        const docsDir = path.join(this.dataDir, 'docs');
        for(const docName of await fs.readdir(docsDir))
        {
            this.docs[path.parse(docName).name] = await fs.readFile(path.join(docsDir, docName), 'utf-8');
        }
        
        // Read endpoints
        this.endpoints = JSON.parse(await fs.readFile(path.join(this.dataDir, 'endpoints.json'), 'utf-8'))['endpoints'];
    
        // Prepare folders
        for(const endpoint of this.endpoints)
        {
            if(!this.folders.includes(endpoint.folder))
            {
                this.folders.push(endpoint.folder);
            }
        }
    }
    
    linkTo(to, from, platform)
    {
        const parts = to.split('#');
        const hash = parts.length === 2 ? `#${parts[1]}` : '';
        // First see if it matches a known doc name
        let loc;
        if(this.docs.hasOwnProperty(parts[0]))
        {
            loc = parts[0] + '.md' + hash;
        }
        else
        {
            const endpoint = this.endpoints.find(endpoint => endpoint.name === parts[0]);
            if(!endpoint)
            {
                throw new Error('Unknown "to" id: "' + to + '"');
            }
            loc = `${endpoint.folder}/${endpoint.method} ${endpoint.name}.md${hash}`;
        }
        
        let url;
        if(platform === 'insomnia')
        {
            url = githubURL + '/docs/' + loc;
        }
        else
        {
            url = path.relative(from, loc);
        }
        return url.replaceAll(' ', '%20');
    }
    
    renderFile(name, platform)
    {
        let loc, text;
        if(this.docs.hasOwnProperty(name))
        {
            loc = '';
            text = this.docs[name];
        }
        else
        {
            const endpoint = this.endpoints.find(endpoint => endpoint.name === name);
            if(endpoint === null)
            {
                throw new Error('Unknown "to" id');
            }
            loc = endpoint.folder;
            text = (platform === 'insomnia') ? '' : `# ${endpoint.name}\n`;
            text += endpoint.description;
            
            if(platform !== 'insomnia')
            {
                text += `\nMethod: \`${endpoint.method}\`  \nURL: \`${endpoint.url}\`  \n`;
                
                const headers = [];
                
                if(endpoint.typicalAuth)
                {
                    headers.push({name: 'Authorization', value: 'Bearer {base64 encoded Riot token}'});
                    headers.push({name: 'X-Riot-Entitlements-JWT', value: '{Riot entitlement}'});
                }
                if(endpoint.localAuth) headers.push({name: 'Authorization', value: 'Basic {base64 encoded "riot:{lockfile password}"}'});
                if(endpoint.requiresClientVersion) headers.push({name: 'X-Riot-ClientVersion', value: '{client version}'});
                if(endpoint.requiresClientPlatform) headers.push({name: 'X-Riot-ClientPlatform', value: '{client platform}'});
                if(endpoint.extraHeaders) headers.push(...endpoint.extraHeaders);
    
                if(headers.length !== 0)
                {
                    text += 'Headers:\n';
                    text += headers.map(({name, value}) => ` - \`${name}\`: \`${value}\`\n`).join('') + '\n';
                }
                
                if(endpoint.body)
                {
                    text += `Body:  \n\`\`\`\n${endpoint.body}\n\`\`\`\n`;
                }
            }
            
            function readCommon(name, id)
            {
                return `Read [Common Components - ${name}]({{#linkto}}common-components#${id}{{/linkto}})`;
            }
            const components = [];
            if(endpoint.typicalAuth)
            {
                components.push({name: '{base64 encoded Riot token}', value: readCommon('Riot Token', 'riot-token')});
                components.push({name: '{Riot entitlement}', value: readCommon('Riot Entitlement', 'riot-entitlement')});
            }
            if(endpoint.localAuth) components.push({name: '{lockfile password} and {lockfile port}', value: readCommon('Lockfile Data', 'lockfile-data')});
            if(endpoint.requiresClientVersion) components.push({name: '{client version}', value: readCommon('Client Version', 'client-version')});
            if(endpoint.requiresClientPlatform) components.push({name: '{client platform}', value: readCommon('Client Platform', 'client-platform')});
            
            const componentInsertions = [
                ['{region}', 'Region', 'region'],
                ['{puuid}', 'PUUID', 'puuid'],
                ['{in-progress match id}', 'Coregame Match ID', 'coregame-match-id'],
                ['{pre-game match id}', 'Pregame Match ID', 'pregame-match-id'],
                ['{party id}', 'Party ID', 'party-id']
            ];
            
            for(const [tag, name, id] of componentInsertions)
            {
                if(endpoint.url.includes(tag) || endpoint.body?.includes(tag))
                {
                    components.push({name: tag, value: readCommon(name, id)});
                }
            }
            
            if(endpoint.uniqueVariableDescription)
            {
                components.push(...endpoint.uniqueVariableDescription);
            }
            
            if(components.length !== 0)
            {
                text += 'Variables:\n';
                text += components.map(({name, value}) => ` - \`${name}\`: ${value}\n`).join('') + '\n';
            }
        }
        
        const view = {
            linkto: () =>
            {
                return (text, render) =>
                {
                    return this.linkTo(text, loc, platform);
                }
            }
        };
        return Mustache.render(text, view);
    }
}

module.exports = DataManager;
