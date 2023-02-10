import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {millisSchema} from '../../commonTypes'

export const accountAliasEndpoint = {
    name: 'Account Alias',
    description: 'Gets the player username and tagline',
    category: 'Local Endpoints',
    type: 'local',
    suffix: 'player-account/aliases/v1/active',
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': z.object({
            active: z.boolean(),
            created_datetime: millisSchema,
            game_name: z.string(),
            summoner: z.boolean(),
            tag_line: z.string()
        })
    }
} satisfies ValorantEndpoint

export type AccountAliasResponse = z.input<typeof accountAliasEndpoint.responses['200']>