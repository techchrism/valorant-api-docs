<!--

This file is automatically generated!
Do not edit it directly!
See https://github.com/techchrism/valorant-api-docs/blob/trunk/contributing.md for more information.

-->

# These markdown docs are deprecated and will no longer be updated. They remain here to prevent broken links.
## Visit <https://valapidocs.techchrism.me/endpoint/client-region> for the latest documentation (and update your links if possible)
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
# GET Riot Client Region

Gets info about the region and locale from the Riot client  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/riotclient/region-locale`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](../common-components.md#lockfile-data)


### Response Format:
```ts
type ClientRegionResponse = {
    locale: string;
    region: string;
    webLanguage: string;
    webRegion: string;
};
```
