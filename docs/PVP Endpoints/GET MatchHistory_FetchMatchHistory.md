# GET MatchHistory_FetchMatchHistory

Get recent matches for a player  
There are 3 optional query parameters: `startIndex`, `endIndex`, and `queue`. `queue` can be one of `null`, `competitive`, `custom`, `deathmatch`, `ggteam`, `newmap`, `onefa`, `snowball`, `spikerush`, or `unrated`.  


Method: `GET`  
URL: `https://pd.{region}.a.pvp.net/match-history/v1/history/{puuid}`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `X-Riot-ClientVersion`: `{client version}`
 - `X-Riot-ClientPlatform`: `{client platform}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{client version}`: Read [Common Components - Client Version](../common-components.md#client-version)
 - `{client platform}`: Read [Common Components - Client Platform](../common-components.md#client-platform)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{puuid}`: Read [Common Components - PUUID](../common-components.md#puuid)

