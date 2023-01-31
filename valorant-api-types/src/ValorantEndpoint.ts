import {ZodType} from 'zod'

type EndpointType = {
    type: 'pd',
    shard: string
}  | {
    type: 'shared'
    shard: string
} | {
    type: 'glz'
    region: string
    shard: string
} | {
    type: 'local'
    port: number
} | {
    type: 'other'
}
type EndpointTypeName = EndpointType['type']

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

function typeToPrefix(options: EndpointType): string {
    switch(options.type) {
        case 'pd':
            return `https://pd.${options.shard}.a.pvp.net/`
        case 'shared':
            return `https://shared.${options.shard}.a.pvp.net/`
        case 'glz':
            return `https://glz-${options.region}-1.${options.shard}.a.pvp.net/`
        case 'local':
            return `https://127.0.0.1:${options.port}/`
        case 'other':
            return ''
    }
}

export interface ValorantEndpoint {
    // The documented name of the endpoint
    name: string

    // The description of the endpoint
    description: string

    // The internal name of the endpoint
    queryName?: string

    // The category to put the endpoint documentation in
    category?: string | string[]

    // The type of the endpoint url prefix. Used with {@link typeToPrefix} to generate the prefix
    type: EndpointTypeName

    // The suffix of the endpoint url
    suffix: string

    // The http method of the endpoint. Defaults to 'GET' if not specified
    method?: HttpMethod

    // The Riot-specific requirements for the endpoint. All options default to false if not specified
    riotRequirements?: {
        // If the request requires the 'X-Riot-Entitlements-JWT' header
        entitlement?: boolean

        // If the request requires the bearer 'Authorization' header
        token?: boolean

        // If the request requires the 'X-Riot-ClientVersion' header
        clientVersion?: boolean

        // If the request requires the 'X-Riot-ClientPlatform' header
        clientPlatform?: boolean

        // If the request requires the basic 'Authorization' header
        localAuth?: boolean
    }

    // Additional headers to include with the request
    headers?: Map<string, string>

    // The body of the request
    body?: string

    // Type info for the variables in the url, headers, and body
    variables?: Map<string, ZodType>

    // Type info for the response
    // Note: This is an object instead of a map to enable type lookup at compile-time instead of a runtime Map.get()
    responses?: {
        [code: string]: ZodType
    }
}