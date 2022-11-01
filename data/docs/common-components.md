# Common Components
These variables show up in requests often. Here's how to get them.

### Base URLs
```
base_endpoint_local = "http://127.0.0.1:{port}"
base_endpoint = "https://pd.{shard}.a.pvp.net"
base_endpoint_glz = "https://glz-{region}-1.{shard}.a.pvp.net"
base_endpoint_shared = "https://shared.{shard}.a.pvp.net"
```

### PUUID
To get the player's UUID, you can use the local [TEXT_CHAT_RNet_FetchSession]({{#linkto}}TEXT_CHAT_RNet_FetchSession{{/linkto}}) endpoint or the remote
[RSO_GetPlayerInfo]({{#linkto}}RSO_GetPlayerInfo{{/linkto}}) endpoint with a token.

### Riot Token
Riot tokens can be obtained through the auth flow or through the local API.
Currently, they expire one hour after generation.

Locally, use the endpoint [RSO_RNet_GetEntitlementsToken]({{#linkto}}RSO_RNet_GetEntitlementsToken{{/linkto}}).
This also gives you the entitlement.

Remotely, use [Auth Cookies]({{#linkto}}Auth Cookies{{/linkto}}) followed by [Auth Request]({{#linkto}}Auth Request{{/linkto}}) to get a token.
You must save the cookies from the Auth Cookies request and use them on the Auth Request.
If you save the cookies from the Auth Request, you can use them with [Cookie Reauth]({{#linkto}}Cookie Reauth{{/linkto}}) to get a new token without saving and re-sending the password.

### Riot Entitlement
After you have a token, use the [Entitlement]({{#linkto}}Entitlement{{/linkto}}) endpoint to get the entitlement.

### Lockfile Data
When the game is running, the lockfile is located at `%LocalAppData%\Riot Games\Riot Client\Config\lockfile` and contains the info needed to connect to the local api.
It's a text file with a single line where the data is seperated by colons. The format is `name:pid:port:password:protocol`

### Region
The region is important for remote APIs and it can be found a couple ways locally.
One method is using the [RiotClientSession_FetchSessions]({{#linkto}}RiotClientSession_FetchSessions{{/linkto}}) endpoint then getting the value of the `-ares-deployment=` argument.
Another way is to scrape the ShooterGame log for requests that contain the region in the url.

Alternatively, you can ask the user what their region is. It can take the following values:

| Region ID | Region Name      |
|-----------| ---------------- |
| na        | North America    |
| latam     | Latin America    |
| br        | Brazil           |
| eu        | Europe           |
| ap        | Asia Pacific     |
| kr        | Korea            |

#### A note on regions and shards
Generally, each region has its own shard (i.e. `eu` region is on the `eu` shard, which is relevant when accessing a *glz* endpoint). However, some regions share the same shard, and similarly, some regions have multiple shards.

| Region ID | Shard(s) |
|-----------|-------|
| latam | na |
| br | na |
| na | na OR pbe |
| eu | eu |
| ap | ap |
| kr | kr |

> NA has two compatible shards, `na` and `pbe` (public beta environment).

### Client Version
This is the version the client is running.
It can be obtained locally through parsing the ShooterGame log or remotely either with the [Session_Get]({{#linkto}}Session_Get{{/linkto}}) endpoint or with the third-party [Version]({{#linkto}}Version{{/linkto}}) API. 

### Client Platform
A string representing the platform of the client. Base-64 encoded JSON with the following fields:
```json
{
    "platformType": "PC",
    "platformOS": "Windows",
    "platformOSVersion": "10.0.19042.1.256.64bit",
    "platformChipset": "Unknown"
}
```
`ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9` is a value that currently works.

### Pregame Match ID
The ID of the match while it's in the pre-game phase.
This can be obtained live with the `OnJsonApiEvent_riot-messaging-service_v1_message` local websocket event
(when the URI starts with `/riot-messaging-service/v1/message/ares-pregame/pregame/v1/matches/`)
or on request with the [Pregame_GetPlayer]({{#linkto}}Pregame_GetPlayer{{/linkto}}) endpoint.

### Coregame Match ID
The ID of the match after it's passed the pre-game phase.
This can be obtained live with the `OnJsonApiEvent_riot-messaging-service_v1_message` local websocket event
(when the URI starts with `/riot-messaging-service/v1/message/ares-core-game/core-game/v1/matches/`)
or on request with the [CoreGame_FetchPlayer]({{#linkto}}CoreGame_FetchPlayer{{/linkto}}) endpoint.

### Party ID
The ID of the party the player is in. To get this live, the `OnJsonApiEvent_chat_v4_presences` websocket event can be used.
On request, the remote [Party_FetchPlayer]({{#linkto}}Party_FetchPlayer{{/linkto}}) or the local
[PRESENCE_RNet_GET_ALL]({{#linkto}}PRESENCE_RNet_GET_ALL{{/linkto}}) endpoint can be used.

### Chat ID
The ID of a chat. For game chat this can be obtained from [Pregame Chat Info]({{#linkto}}Pregame Chat Info{{/linkto}})
before the match starts (team chat only) and [Game Chat Info]({{#linkto}}Game Chat Info{{/linkto}})
once the match has started (team and all chat). For parties, [Party Chat Info]({{#linkto}}Party Chat Info{{/linkto}})
can be used to get the CID. When whispering, a friend's PID can be used as a CID.
Friends and their PIDs can be found from [CHATFRIENDS_RNet_GET_ALL]({{#linkto}}CHATFRIENDS_RNet_GET_ALL{{/linkto}}).
