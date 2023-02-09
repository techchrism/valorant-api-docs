# Valorant API Types

This is a collection of documented endpoints and return types for the unofficial Valorant API.

## Installation

Install with `npm install valorant-api-types` if using the endpoint data or `npm install valorant-api-types --save-dev` if just using the types.

## Usage

Using just the raw return types:
```ts
import {PresenceResponse} from 'valorant-api-types'

async function getPresenceRaw(): Promise<PresenceResponse> {
    return (await fetch('...')).json()
}
```

Internally, valorant-api-types uses [zod](https://github.com/colinhacks/zod) to document and transform return data.
If you install zod as a dev dependency, the following code is equivalent to the above code and adds no runtime overhead:
```ts
import {presenceEndpoint} from 'valorant-api-types'
import {z} from 'zod'

async function getPresenceRaw(): Promise<z.input<typeof presenceEndpoint.responses['200']>> {
    return (await fetch('...')).json()
}
```

The zod types can be used to parse  and transform the raw data into a more usable format:
```ts
import {presenceEndpoint} from 'valorant-api-types'
import {z} from 'zod'

// presences[0].private -> base64-encoded json string
type PresenceResponseRaw = z.input<typeof presenceEndpoint.responses['200']>

// presences[0].private -> {sessionLoopState: string, customGameName: string, ...}
type PresenceResponseProcessed = z.output<typeof presenceEndpoint.responses['200']>

async function getPresence(): Promise<PresenceResponseProcessed > {
    const returnData = await (await fetch('...')).json()
    return presenceEndpoint.responses['200'].parse(returnData)
}
```

The list of endpoints is exported and can be used to make your own docs or tools:
```ts
import {endpoints} from 'valorant-api-types'

for(const endpoint of Object.values(endpoints)) {
    console.log(`${endpoint.name} - ${endpoint.description}`)
}
```