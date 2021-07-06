# GET RiotClientSession_FetchSessions

Gets info about the running Valorant process including start arguments  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/product-session/v1/external-sessions`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](..\common-components.md#lockfile-data)

