# GET MMR_FetchCompetitiveUpdates

Get recent games and how they changed ranking  
There are 3 optional query parameters: `startIndex`, `endIndex`, and `queue`. `queue` can be one of `null`, `competitive`, `custom`, `deathmatch`, `ggteam`, `newmap`, `onefa`, `snowball`, `spikerush`, or `unrated`.  


Method: `GET`  
URL: `https://pd.{region}.a.pvp.net/mmr/v1/players/{puuid}/competitiveupdates`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `X-Riot-ClientPlatform`: `{client platform}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{client platform}`: Read [Common Components - Client Platform](../common-components.md#client-platform)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{puuid}`: Read [Common Components - PUUID](../common-components.md#puuid)

