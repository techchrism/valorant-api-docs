# GET Contracts_Fetch

Get a list of contracts and completion status including match history  


Method: `GET`  
URL: `https://pd.{region}.a.pvp.net/contracts/v1/contracts/{puuid}`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `X-Riot-ClientVersion`: `{client version}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](..\common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](..\common-components.md#riot-entitlement)
 - `{client version}`: Read [Common Components - Client Version](..\common-components.md#client-version)
 - `{region}`: Read [Common Components - Region](..\common-components.md#region)
 - `{puuid}`: Read [Common Components - PUUID](..\common-components.md#puuid)

