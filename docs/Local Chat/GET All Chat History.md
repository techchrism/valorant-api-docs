# GET All Chat History

Get chat history for all conversations  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/chat/v6/messages`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](../common-components.md#lockfile-data)

