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
                if(endpoint.extraHeaders || endpoint.typicalAuth || endpoint.localAuth || endpoint.requiresClientVersion || endpoint.requiresClientPlatform)
                {
                    text += 'Headers:\n';
                    if(endpoint.extraHeaders)
                    {
                        for(const headerName in endpoint.extraHeaders)
                        {
                            text += ` - \`${headerName}\`: \`${endpoint.extraHeaders[headerName]}\`\n`;
                        }
                    }
                    if(endpoint.typicalAuth)
                    {
                        text += ' - `Authorization`: `Bearer {base64 encoded Riot token}`\n';
                        text += ' - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`\n';
                    }
                    if(endpoint.localAuth)
                    {
                        text += ' - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`\n';
                    }
                    if(endpoint.requiresClientVersion)
                    {
                        text += ' - `X-Riot-ClientVersion`: `{client version}`\n';
                    }
                    if(endpoint.requiresClientPlatform)
                    {
                        text += ' - `X-Riot-ClientPlatform`: `{client platform}`\n';
                    }
                }
    
                if(headers.length !== 0)
                {
        
                }
                
                if(endpoint.body)
                {
                    text += `Body:  \n\`\`\`\n${endpoint.body}\n\`\`\`\n`;
                }
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
