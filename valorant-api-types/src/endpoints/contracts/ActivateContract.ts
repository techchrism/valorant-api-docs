import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {contractsResponse} from '../../commonTypes'

export const activateContractEndpoint = {
    name: 'Activate Contract',
    description: 'Activate a specific contract by ID',
    queryName: 'Contracts_Activate',
    category: 'Contract Endpoints',
    type: 'pd',
    suffix: 'contracts/v1/contracts/{puuid}/special/{contract id}',
    variables: new Map([
        ['contract id', z.string().uuid().describe('The contract ID to activate')]
    ]),
    riotRequirements: {
        token: true,
        entitlement: true,
        clientVersion: true
    },
    responses: {
        '200': contractsResponse
    }
} satisfies ValorantEndpoint

export type ActivateContractResponse = z.input<typeof activateContractEndpoint.responses['200']>