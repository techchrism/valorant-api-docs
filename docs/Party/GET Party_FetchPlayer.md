# GET Party_FetchPlayer

Get the Party ID that a given player belongs to  


Method: `GET`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/parties/v1/players/{puuid}`  
Headers:
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-ClientVersion`: `{client version}`

Variables:
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{client version}`: Read [Common Components - Client Version](../common-components.md#client-version)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{puuid}`: Read [Common Components - PUUID](../common-components.md#puuid)

