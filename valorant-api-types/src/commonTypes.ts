import {z} from 'zod'

export const playerUUIDSchema = z.string().uuid().describe('Player UUID')
export const matchIDSchema = z.string().uuid().describe('Match ID')
export const seasonIDSchema = z.string().uuid().describe('Season ID')
export const queueIDSchema = z.string().describe('Queue ID')
export const mapIDSchema = z.string().describe('Map ID')
export const dateSchema = z.string().datetime().transform(val => new Date(val)).describe('Date in ISO 8601 format')
export const millisSchema = z.number().transform(val => new Date(val)).describe('Milliseconds since epoch')