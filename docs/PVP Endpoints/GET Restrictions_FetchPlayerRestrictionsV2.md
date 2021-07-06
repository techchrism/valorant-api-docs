# GET Restrictions_FetchPlayerRestrictionsV2

Checks for any gameplay penalties on the account  


Method: `GET`  
URL: `https://pd.{region}.a.pvp.net/restrictions/v2/penalties`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](..\common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](..\common-components.md#riot-entitlement)
 - `{region}`: Read [Common Components - Region](..\common-components.md#region)

