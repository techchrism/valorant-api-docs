# GET Restrictions_FetchPlayerRestrictionsV2

Checks for any gameplay penalties on the account  


Method: `GET`  
URL: `https://pd.{region}.a.pvp.net/restrictions/v3/penalties`  
Headers:
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `Authorization`: `Bearer {base64 encoded Riot token}`

Variables:
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)

