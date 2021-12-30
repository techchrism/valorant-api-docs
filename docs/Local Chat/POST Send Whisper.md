# POST Send Whisper

Send a whisper to the specified player  


Method: `POST`  
URL: `https://127.0.0.1:{lockfile port}/chat/v6/messages/`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`
 - `Content-Type`: `application/json`

Body:  
```
{
    "cid": "{cid}",
    "message": "{message}",
    "type": "chat"
}
```
Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](../common-components.md#lockfile-data)
 - `{cid}`: Read [Common Components - Chat ID](../common-components.md#chat-id)

