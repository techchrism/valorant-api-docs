# GET RSO_GetPlayerInfo

Get the PUUID from a token  


Method: `GET`  
URL: `https://auth.riotgames.com/userinfo`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](..\common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](..\common-components.md#riot-entitlement)

