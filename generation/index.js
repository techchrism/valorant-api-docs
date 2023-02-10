import {promises as fs} from 'node:fs'
import path from 'node:path'
import {DataManager} from './lib/DataManager.js'
import {generateMarkdownDocs} from './lib/generateMarkdownDocs.js'
import {endpointsToInsomnia} from './lib/endpointsToInsomnia.js'

(async () =>
{
    const __dirname = '.'
    const dataDir = path.join(__dirname, '..', 'data');
    const docsDir = path.join(__dirname, '..', 'docs');

    const dataManager = new DataManager(dataDir);
    await dataManager.readFiles();

    // Generate markdown docs
    await generateMarkdownDocs(docsDir, dataManager);

    // Form insomnia import
    await fs.writeFile(path.join(docsDir, 'valorant-workspace-insomnia.json'), JSON.stringify(endpointsToInsomnia(dataManager)), 'utf-8');
})();
