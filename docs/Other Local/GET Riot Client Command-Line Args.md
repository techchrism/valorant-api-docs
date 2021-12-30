# GET Riot Client Command-Line Args

Gets the command-line args provided to the Riot client  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/riotclient/command-line-args`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](../common-components.md#lockfile-data)

