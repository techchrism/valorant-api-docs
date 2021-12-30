# GET Store_GetEntitlements

List what the player owns (agents, skins, buddies, ect.)  
Correlate with the UUIDs in [Content_FetchContent](../PVP%20Endpoints/GET%20Content_FetchContent.md) to know what items are owned.   
Category names and IDs:  

`ItemTypeID` | Name
--- | ---
`01bb38e1-da47-4e6a-9b3d-945fe4655707` | Agents
`f85cb6f7-33e5-4dc8-b609-ec7212301948` | Contracts
`d5f120f8-ff8c-4aac-92ea-f2b5acbe9475` | Sprays
`dd3bf334-87f3-40bd-b043-682a57a8dc3a` | Gun Buddies
`3f296c07-64c3-494c-923b-fe692a4fa1bd` | Cards
`e7c63390-eda7-46e0-bb7a-a6abdacd2433` | Skins
`3ad1b2b2-acdb-4524-852f-954a76ddae0a` | Skin Variants
`de7caa6b-adf7-4588-bbd1-143831e786c6` | Titles  


Method: `GET`  
URL: `https://pd.{region}.a.pvp.net/store/v1/entitlements/{puuid}/{ItemTypeID}`  
Headers:
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `Authorization`: `Bearer {base64 encoded Riot token}`

Variables:
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{puuid}`: Read [Common Components - PUUID](../common-components.md#puuid)
 - `{ItemTypeID}`: Optional url path to only return entitlements belonging to this type ID. If omitted, this endpoint will return entitlements of all types.

