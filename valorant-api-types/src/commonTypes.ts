import {z} from 'zod'

export const playerUUIDSchema = z.string().uuid().describe('Player UUID')
export const matchIDSchema = z.string().uuid().describe('Match ID')
export const partyIDSchema = z.string().uuid().describe('Party ID')
export const gameModeSchema = z.string().describe('Game Mode')
export const dateSchema = z.string().datetime().transform(val => new Date(val)).describe('Date in ISO 8601 format')
export const millisSchema = z.number().transform(val => new Date(val)).describe('Milliseconds since epoch')

// IDs that can be derived from game files
export const seasonIDSchema = z.string().uuid().describe('Season ID')
export const queueIDSchema = z.string().describe('Queue ID')
export const mapIDSchema = z.string().describe('Map ID')
export const characterIDSchema = z.string().describe('Character ID')
export const cardIDSchema = z.string().describe('Card ID')
export const titleIDSchema = z.string().describe('Title ID')
export const preferredLevelBorderIDSchema = z.string().describe('Preferred Level Border ID')
export const xpModificationIDSchema = z.string().describe('XP Modification ID')
export const itemIDSchema = z.string().describe('Item ID')
export const armorIDSchema = z.string().describe('Armor ID')