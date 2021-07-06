# GET CoreGame_FetchMatchLoadouts

Get player skins and sprays for an ongoing game  


Method: `GET`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/core-game/v1/matches/{in-progress match id}/loadouts`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](..\common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](..\common-components.md#riot-entitlement)
 - `{region}`: Read [Common Components - Region](..\common-components.md#region)
 - `{in-progress match id}`: Read [Common Components - Coregame Match ID](..\common-components.md#coregame-match-id)

