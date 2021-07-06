# POST Party_InviteToPartyByDisplayName

Invites a player to the party with their display name  


Method: `POST`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/parties/v1/parties/{party id}/invites/name/{name}/tag/{tag}`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `X-Riot-ClientVersion`: `{client version}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](..\common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](..\common-components.md#riot-entitlement)
 - `{client version}`: Read [Common Components - Client Version](..\common-components.md#client-version)
 - `{region}`: Read [Common Components - Region](..\common-components.md#region)
 - `{party id}`: Read [Common Components - Party ID](..\common-components.md#party-id)
 - `{name}`: The username of the player
 - `{tag}`: The tag of the player

