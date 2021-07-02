const fs = require('fs').promises;
const endpointsToInsomnia = require('./lib/endpointsToInsomnia');

(async () =>
{
    const endpoints = JSON.parse(await fs.readFile('../data/endpoints.json', 'utf-8'))['endpoints'];
    
    // Form insomnia import
    await fs.writeFile('../valorant-workspace-insomnia', JSON.stringify(endpointsToInsomnia(endpoints)), 'utf-8');
})();
