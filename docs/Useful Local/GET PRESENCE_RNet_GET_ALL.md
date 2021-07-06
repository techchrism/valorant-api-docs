# GET PRESENCE_RNet_GET_ALL

Get a list of online friends and their activity  
`private` is a base64-encoded JSON string that contains useful information such as party and in-progress game score.  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/chat/v4/presences`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](..\common-components.md#lockfile-data)

