# GET Party_FetchVoiceToken

Get a token for party voice  


Method: `GET`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/parties/v1/parties/{party id}/voicetoken`  
Headers:
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `Authorization`: `Bearer {base64 encoded Riot token}`

Variables:
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{party id}`: Read [Common Components - Party ID](../common-components.md#party-id)
