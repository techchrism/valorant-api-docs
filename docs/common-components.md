# Common Components
These variables show up in requests often. Here's how to get them.

### PUUID
To get the player's UUID, you can use the local [TEXT_CHAT_RNet_FetchSession](Useful%20Local/GET%20TEXT_CHAT_RNet_FetchSession.md) endpoint or the remote
[RSO_GetPlayerInfo](Riot%20Auth/GET%20RSO_GetPlayerInfo.md) endpoint with a token.

### Riot Token
Riot tokens can be obtained through the auth flow or thorough the local API.
Currently, they expire one hour after generation.

Locally, use the endpoint [RSO_RNet_GetEntitlementsToken](Useful%20Local/GET%20RSO_RNet_GetEntitlementsToken.md).
This also gives you the entitlement.

Remotely, use [Auth Cookies](Riot%20Auth/POST%20Auth%20Cookies.md) followed by [Auth Request](Riot%20Auth/PUT%20Auth%20Request.md) to get a token.
You must save the cookies from the Auth Cookies request and use them on the Auth Request.
If you save the cookies from the Auth Request, you can use them with [Cookie Reauth](Riot%20Auth/GET%20Cookie%20Reauth.md) to get a new token without saving and re-sending the password.

### Riot Entitlement
After you have a token, use the [Entitlement](Riot%20Auth/POST%20Entitlement.md) endpoint to get the entitlement.

### Lockfile Data
When the game is running, the lockfile is located at `%LocalAppData%\Riot Games\Riot Client\Config\lockfile` and contains the info needed to connect to the local api.
It's a text file with a single line where the data is seperated by colons. The format is `name:pid:port:password:protocol`

### Region
The region is important for remote APIs and it can be found a couple ways locally.
One method is using the [RiotClientSession_FetchSessions](Useful%20Local/GET%20RiotClientSession_FetchSessions.md) endpoint then getting the value of the `-ares-deployment=` argument.
Another way is to scrape the ShooterGame log for requests that contain the region in the url.

Alternatively, you can ask the user what their region is. It can take the following values:

| Region ID | Region Name   |
| --------- | -----------   |
| na        | North America |
| eu        | Europe        |
| ap        | Asia Pacific  |
| ko        | Korea         |

### Client Version
This is the version the client is running.
It can be obtained locally through parsing the ShooterGame log or remotely either with the [Session_Get](Session/GET%20Session_Get.md) endpoint or with the third-party [Version](Third-Party%20API%20by%20Officer/GET%20Version.md) API. 

### Client Platform
A string representing the platform of the client.
`ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9` is a value that currently works.

### Pregame Match ID
The ID of the match while it's in the pre-game phase.
This can be obtained live with the `OnJsonApiEvent_riot-messaging-service_v1_message` local websocket event
(when the URI starts with `/riot-messaging-service/v1/message/ares-pregame/pregame/v1/matches/`)
or on request with the [Pregame_GetPlayer](Pre-Game/GET%20Pregame_GetPlayer.md) endpoint.

### Coregame Match ID
The ID of the match after it's passed the pre-game phase.
This can be obtained live with the `OnJsonApiEvent_riot-messaging-service_v1_message` local websocket event
(when the URI starts with `/riot-messaging-service/v1/message/ares-core-game/core-game/v1/matches/`)
or on request with the [CoreGame_FetchPlayer](Current%20Game/GET%20CoreGame_FetchPlayer.md) endpoint.

### Party ID
The ID of the party the player is in. To get this live, the `OnJsonApiEvent_chat_v4_presences` websocket event can be used.
On request, the remote [Party_FetchPlayer](Party/GET%20Party_FetchPlayer.md) or the local
[PRESENCE_RNet_GET_ALL](Useful%20Local/GET%20PRESENCE_RNet_GET_ALL.md) endpoint can be used.

### Chat ID
The ID of a chat. For game chat this can be obtained from [Pregame Chat Info](Local%20Chat/GET%20Pregame%20Chat%20Info.md)
before the match starts (team chat only) and [Game Chat Info](Local%20Chat/GET%20Game%20Chat%20Info.md)
once the match has started (team and all chat). For parties, [Party Chat Info](Local%20Chat/GET%20Party%20Chat%20Info.md)
can be used to get the CID. When whispering, a friend's PID can be used as a CID.
Friends and their PIDs can be found from [CHATFRIENDS_RNet_GET_ALL](Useful%20Local/GET%20CHATFRIENDS_RNet_GET_ALL.md).
