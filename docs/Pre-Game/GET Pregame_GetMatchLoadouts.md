# GET Pregame_GetMatchLoadouts

Get player skins and sprays for a game in the pre-game stage  


Method: `GET`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/pregame/v1/matches/{pre-game match id}/loadouts`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](..\common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](..\common-components.md#riot-entitlement)
 - `{region}`: Read [Common Components - Region](..\common-components.md#region)
 - `{pre-game match id}`: Read [Common Components - Pregame Match ID](..\common-components.md#pregame-match-id)

