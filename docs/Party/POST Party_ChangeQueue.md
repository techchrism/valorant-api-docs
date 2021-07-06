# POST Party_ChangeQueue

Sets the matchmaking queue for the party  


Method: `POST`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/parties/v1/parties/{party id}/queue`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`

Body:  
```
{
	"queueID": "{queue id}"
}
```
Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](..\common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](..\common-components.md#riot-entitlement)
 - `{region}`: Read [Common Components - Region](..\common-components.md#region)
 - `{party id}`: Read [Common Components - Party ID](..\common-components.md#party-id)
 - `{queue id}`: The ID of the queue. Possible values can be found from the [Party_FetchParty](GET%20Party_FetchParty.md) endpoint under the property `EligibleQueues`.

