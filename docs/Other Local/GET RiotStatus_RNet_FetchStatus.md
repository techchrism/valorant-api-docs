# GET RiotStatus_RNet_FetchStatus

Get game status information such as maintenances and incidents  
Response is an escaped JSON string.  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/riot-status/v1/products/valorant/patchlines/live/deployments/{region}`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](..\common-components.md#lockfile-data)
 - `{region}`: Read [Common Components - Region](..\common-components.md#region)

