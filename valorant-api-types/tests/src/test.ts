import {endpoints, ValorantEndpoint} from '../../dist'
import * as path from 'node:path'
import {promises as fs} from 'node:fs'
import {deepStrict} from './deepStrict'

(async () => {
    const responsesDir = path.join(__dirname, '..', 'endpoint-responses')
    const responsesDirectories = await fs.readdir(responsesDir)

    const endpointArray = Object.values(endpoints) as ValorantEndpoint[]
    for(const endpoint of endpointArray) {
        if(endpoint.responses?.['200'] === undefined) continue

        const slugName = endpoint.name.toLowerCase().replace(/ /g, '-')
        if(!responsesDirectories.includes(slugName)) continue

        const responseDir = path.join(responsesDir, slugName)
        const responseFiles = await fs.readdir(responseDir)
        const schema = deepStrict(endpoint.responses['200'])

        for(const responseFile of responseFiles.filter(f => f.endsWith('.json'))) {
            const data = JSON.parse(await fs.readFile(path.join(responseDir, responseFile), 'utf-8'))
            const result = schema.safeParse(data)
            if(result.success) {
                console.log(`✅ Parsed ${slugName}/${responseFile}`)
            } else {
                console.log(`❌ Failed to parse ${slugName}/${responseFile}`)
                console.error(JSON.stringify(result.error.issues, null, 4))
                process.exit(1)
            }
        }
    }

    console.log('🎉 All responses parsed successfully')
})()