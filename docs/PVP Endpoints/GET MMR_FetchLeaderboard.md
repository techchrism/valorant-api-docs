# GET MMR_FetchLeaderboard

Get the competitive leaderboard for a given season  
The query parameter `query` can be added to search for a username.  


Method: `GET`  
URL: `https://pd.{region}.a.pvp.net/mmr/v1/leaderboards/affinity/na/queue/competitive/season/{season id}?startIndex={start index}&size={size}`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `X-Riot-ClientVersion`: `{client version}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](..\common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](..\common-components.md#riot-entitlement)
 - `{client version}`: Read [Common Components - Client Version](..\common-components.md#client-version)
 - `{region}`: Read [Common Components - Region](..\common-components.md#region)
 - `{season id}`: The ID for the season. Can be found using the `Seasons` property from the [Content_FetchContent](GET%20Content_FetchContent.md) endpoint.
 - `{start index}`: The index to start the leaderboard from. Typically `0`
 - `{size}`: The number of results to get from the leaderboard. Typically `510`

