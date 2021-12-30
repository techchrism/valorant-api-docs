# GET Local Swagger Docs

Fetches json Swagger docs for local endpoints. Can be imported into Swagger or Insomnia.  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/swagger/v3/openapi.json`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](../common-components.md#lockfile-data)

