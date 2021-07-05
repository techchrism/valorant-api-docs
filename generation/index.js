const fs = require('fs').promises;
const endpointsToInsomnia = require('./lib/endpointsToInsomnia');
const generateMarkdownDocs = require('./lib/generateMarkdownDocs');
const DataManager = require('./lib/dataManager');

(async () =>
{
    const dataManager = new DataManager('../data/');
    await dataManager.readFiles();
    
    // Form insomnia import
    await fs.writeFile('../valorant-workspace-insomnia.json', JSON.stringify(endpointsToInsomnia(dataManager)), 'utf-8');
    
    // Generate markdown docs
    await generateMarkdownDocs('../docs', dataManager);
})();
