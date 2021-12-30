# GET All Chat Participants

Get information about all the participants of every active conversation  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/chat/v5/participants/`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](../common-components.md#lockfile-data)

