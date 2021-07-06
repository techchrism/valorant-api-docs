# POST Party_DeclineRequest

Declines a party request  


Method: `POST`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/parties/v1/parties/{party id}/request/{request id}/decline`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](..\common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](..\common-components.md#riot-entitlement)
 - `{region}`: Read [Common Components - Region](..\common-components.md#region)
 - `{party id}`: Read [Common Components - Party ID](..\common-components.md#party-id)
 - `{request id}`: The ID of the party request. Can be found from the `Requests` array on the [Party_FetchParty](GET%20Party_FetchParty.md) endpoint.

