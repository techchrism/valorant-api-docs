const fs = require('fs').promises;
const path = require('path');
const util = require('util');
const rimraf = util.promisify(require('rimraf'));

async function generateMarkdownDocs(docsDir, dataManager)
{
    // Remove docs dir if it exists and recreate it
    try
    {
        await rimraf(docsDir);
        await fs.mkdir(docsDir);
    } catch(ignored) {}
    
    // Create folders
    await Promise.all(dataManager.folders.map(folder => fs.mkdir(path.join(docsDir, ...folder.split('/')), {recursive: true})));
    
    // Write endpoints
    for(const endpoint of dataManager.endpoints)
    {
        const endpointFile = path.join(docsDir, ...(endpoint.folder || '').split('/'), `${endpoint.method} ${endpoint.name}.md`);
        await fs.writeFile(endpointFile, dataManager.renderFile(endpoint.name, 'github'), 'utf-8');
    }
}

module.exports = generateMarkdownDocs;
