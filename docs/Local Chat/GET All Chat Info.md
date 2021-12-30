# GET All Chat Info

Get information about all active conversations  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/chat/v6/conversations/`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](../common-components.md#lockfile-data)

