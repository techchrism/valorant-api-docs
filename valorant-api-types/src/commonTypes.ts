import {z} from 'zod'

export const playerUUIDSchema = z.string().uuid().describe("Player UUID")
export const matchIDSchema = z.string().uuid().describe("Match ID")
export const dateSchema = z.string().datetime().transform(val => new Date(val))