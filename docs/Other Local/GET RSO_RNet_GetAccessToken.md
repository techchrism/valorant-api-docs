# GET RSO_RNet_GetAccessToken

Gets a Riot access token  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/rso-auth/v1/authorization/access-token`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](..\common-components.md#lockfile-data)

