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
export const characterIDSchema = z.string().uuid().describe('Character ID')
export const cardIDSchema = z.string().uuid().describe('Card ID')
export const titleIDSchema = z.string().uuid().describe('Title ID')
export const preferredLevelBorderIDSchema = z.string().uuid().describe('Preferred Level Border ID')
export const xpModificationIDSchema = z.string().describe('XP Modification ID')
export const itemIDSchema = z.string().uuid().describe('Item ID')
export const itemTypeIDSchema = z.string().uuid().describe('Item Type ID')
export const armorIDSchema = z.string().uuid().describe('Armor ID')
export const currencyIDSchema = z.string().uuid().describe('Currency ID')