# GET CoreGame_FetchMatch

Get information about an ongoing game  


Method: `GET`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/core-game/v1/matches/{in-progress match id}`  
Headers:
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `Authorization`: `Bearer {base64 encoded Riot token}`

Variables:
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{in-progress match id}`: Read [Common Components - Coregame Match ID](../common-components.md#coregame-match-id)

