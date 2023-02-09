import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {pregameMatchSchema, weakUUIDSchema} from '../../commonTypes'

export const lockCharacterEndpoint = {
    name: 'Lock Character',
    description: 'Lock in an agent  \n' +
        '**DO NOT USE THIS FOR INSTALOCKING**  \n' +
        'Riot doesn\'t like this. You may get banned or get the API restricted for the rest of us.  ',
    queryName: 'Pregame_LockCharacter',
    category: 'Pre-Game Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'pregame/v1/matches/{pre-game match id}/lock/{agent id}',
    variables: new Map([
        ['{agent id}', weakUUIDSchema.describe('The agent ID to lock in')]
    ]),
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': pregameMatchSchema
    }
} satisfies ValorantEndpoint

export type LockCharacterResponse = z.infer<typeof lockCharacterEndpoint.responses['200']>