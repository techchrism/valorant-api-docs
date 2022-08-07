const fs = require('fs').promises;
const path = require('path');
const endpointsToInsomnia = require('./lib/endpointsToInsomnia');
const generateMarkdownDocs = require('./lib/generateMarkdownDocs');
const DataManager = require('./lib/DataManager');

(async () =>
{
    const dataDir = path.join(__dirname, '..', 'data');
    const docsDir = path.join(__dirname, '..', 'docs');

    const dataManager = new DataManager(dataDir);
    await dataManager.readFiles();

    // Generate markdown docs
    await generateMarkdownDocs(docsDir, dataManager);

    // Form insomnia import
    await fs.writeFile(path.join(docsDir, 'valorant-workspace-insomnia.json'), JSON.stringify(endpointsToInsomnia(dataManager)), 'utf-8');
})();
