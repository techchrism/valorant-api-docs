# GET Store_GetWallet

Get amount of Valorant points and Radianite the player has  
Valorant points have the id `85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741` and Radianite points have the id `e59aa87c-4cbf-517a-5983-6e81511be9b7`  


Method: `GET`  
URL: `https://pd.{region}.a.pvp.net/store/v1/wallet/{puuid}`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{puuid}`: Read [Common Components - PUUID](../common-components.md#puuid)

