const fs = require('fs').promises;
const path = require('path');
const Mustache = require('mustache');

const githubURL = 'https://github.com/techchrism/valorant-api-docs';

class DataManager
{
    constructor(dataDir)
    {
        this.dataDir = dataDir;
        this.snippets = {};
        this.docs = {};
        this.endpoints = null;
        this.folders = [];
    }
    
    async readFiles()
    {
        // Read snippets
        const snippetsDir = path.join(this.dataDir, 'snippets');
        for(const snippetName of await fs.readdir(snippetsDir))
        {
            this.snippets[path.parse(snippetName).name] = await fs.readFile(path.join(snippetsDir, snippetName), 'utf-8');
        }
        
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
        // First see if it matches a known doc name
        let loc;
        if(this.docs.hasOwnProperty(to))
        {
            loc = to + '.md';
        }
        else
        {
            const endpoint = this.endpoints.find(endpoint => endpoint.name === to);
            if(endpoint === null)
            {
                throw new Error('Unknown "to" id');
            }
            loc = `${endpoint.folder}/${endpoint.method} ${endpoint.name}.md`;
        }
        
        if(platform === 'insomnia')
        {
            return githubURL + '/docs/' + loc;
        }
        else
        {
            return path.relative(from, loc);
        }
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
                if(endpoint.extraHeaders)
                {
                    headers.push(...endpoint.extraHeaders);
                }
                if(endpoint.typicalAuth)
                {
                    headers.push({name: 'Authorization', value: 'Bearer {base64 encoded Riot token}'});
                    headers.push({name: 'X-Riot-Entitlements-JWT', value: '{Riot entitlement}'});
                }
                if(endpoint.localAuth)
                {
                    headers.push({name: 'Authorization', value: 'Basic {base64 encoded "riot:{lockfile password}"}'});
                }
                if(endpoint.requiresClientVersion)
                {
                    headers.push({name: 'X-Riot-ClientVersion', value: '{client version}'});
                }
                if(endpoint.requiresClientPlatform)
                {
                    headers.push({name: 'X-Riot-ClientPlatform', value: '{client platform}'});
                }
    
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
            
            const components = [];
            if(endpoint.typicalAuth)
            {
                components.push({name: '{base64 encoded Riot token}', value: 'Read [Common Components - Riot Token]({{#linkto}}common-components{{/linkto}})'});
            }
            
            if(components.length !== 0)
            {
                text += 'Variables:\n';
                text += components.map(({name, value}) => ` - \`${name}\`: ${value}\n`).join('') + '\n';
            }
            
            if(endpoint.localAuth)
            {
                text += '\n' + this.snippets['lockfile'];
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
