# GET TEXT_CHAT_RNet_FetchParticipants

Get information about chat with a particular player  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/chat/v5/participants/?cid={player cid}`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](../common-components.md#lockfile-data)
 - `{player cid}`: The CID of the player

