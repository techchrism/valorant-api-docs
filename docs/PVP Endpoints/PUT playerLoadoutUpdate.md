# PUT playerLoadoutUpdate

Set the player's loadout  
Use the values from [GET playerLoadoutUpdate](GET%20playerLoadoutUpdate.md) excluding properties like `subject` and `version`. Loadout changes take effect when starting a new game.  


Method: `PUT`  
URL: `https://pd.{region}.a.pvp.net/personalization/v2/players/{puuid}/playerloadout`  
Headers:
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `Authorization`: `Bearer {base64 encoded Riot token}`

Variables:
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{puuid}`: Read [Common Components - PUUID](../common-components.md#puuid)

