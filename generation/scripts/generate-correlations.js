/*
    Script to generate correlations between existing "endpoints.json" docs and new valorant-api-types endpoints
 */

import {endpoints} from 'valorant-api-types'
import {promises as fs} from 'node:fs'

(async () => {
    const endpointsData = JSON.parse(await fs.readFile('../data/endpoints.json', 'utf-8'))
    const oldEndpoints = endpointsData.endpoints.filter(old => old.folder !== 'Third-Party API by Officer')

    const mappings = []
    for(const oldEndpoint of oldEndpoints) {
        let found = null
        for(const endpoint of Object.values(endpoints)) {
            if(oldEndpoint.url.endsWith(endpoint.suffix)) {
                if(found !== null) {
                    found = null
                    console.log(`Found multiple matches for ${endpoint.name}`)
                    break
                }

                found = {
                    old: oldEndpoint.name,
                    'new': endpoint.name
                }
            }
        }

        if(found !== null) {
            mappings.push(found)
        }
    }
    const missing = oldEndpoints.filter(old => !mappings.find(m => m.old === old.name))

    console.log(`Mapped ${mappings.length} endpoints and found ${missing.length} missing endpoints:`)
    for(const missingEndpoint of missing) {
        console.log(`    ${missingEndpoint.name} (${missingEndpoint.folder})`)
    }

    await fs.writeFile('../data/correlations.json', JSON.stringify(mappings, null, 4), 'utf-8')
})()