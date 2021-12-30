# GET RSO Auth User Info

Gets info about the authenticated Riot account  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/rso-auth/v1/authorization/userinfo`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](../common-components.md#lockfile-data)

