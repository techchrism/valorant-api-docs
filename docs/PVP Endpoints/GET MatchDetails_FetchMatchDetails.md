# GET MatchDetails_FetchMatchDetails

Get the full info for a previous match  
Includes everything that the in-game match details screen shows including damage and kill positions.  


Method: `GET`  
URL: `https://pd.{region}.a.pvp.net/match-details/v1/matches/{match id}`  
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
 - `{match id}`: The ID of a previous match. Can be obtained from [MatchHistory_FetchMatchHistory](GET%20MatchHistory_FetchMatchHistory.md)

