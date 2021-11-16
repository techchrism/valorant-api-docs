# Valorant API Docs

This is a repo dedicated to documenting the Valorant API endpoints the client uses internally.
These endpoints are **not** officially supported.
However, as long as you use common sense and don't do anything a Riot employee would frown at, you won't get banned.

You can join the Discord server here: [https://discord.gg/a9yzrw3KAm](https://discord.gg/a9yzrw3KAm)

![Screenshot](https://i.imgur.com/dFWuYt2.png)

## Getting Started

One of the easiest ways to get started and get a feel for what kinds of data you can get from the apis is to play around
with the requests yourself in a REST client like Insomnia.

 - Download and install Insomnia here: [https://insomnia.rest/download](https://insomnia.rest/download)
 - Go to Application -> Preferences -> Plugins and add the plugin `insomnia-plugin-valorant`
 - From the dashboard, click "Create", then import from url and enter `https://raw.githubusercontent.com/techchrism/valorant-api-docs/trunk/docs/valorant-workspace-insomnia.json`

To learn about how to make the API request yourself, check the "Docs" tab on any request.
You can right-click a request and click "Generate Code" to see how to make the request in the language and library of your choice.

For info on common request components, see [Common Components](common-components.md)

## Connecting to Local APIs

For the https local api, you need the password and port from the lockfile (read [Common Components - Lockfile Data](common-components.md#lockfile-data)).
The local server has a self-signed certificate meaning you'll need to allow invalid certificates in the http library you're using.

The websocket has the uri `wss://riot:{lockfile password}@localhost:{lockfile port}` and it also uses a self-signed certificate.
Websocket events can be found from the [Local Help](Useful%20Local/GET%20Local%20Help.md) endpoint. For info on subscribing to events, see here: [https://hextechdocs.dev/getting-started-with-the-lcu-websocket](https://hextechdocs.dev/getting-started-with-the-lcu-websocket)

## Investigating Endpoints and Websocket Events

Endpoints are commonly found from the ShooterGame log located at `%LocalAppData\VALORANT\Saved\Logs\ShooterGame.log`
You can use [Valorant Log Endpoint Scraper](https://github.com/techchrism/valorant-log-endpoint-scraper) to quickly export a list of endpoints and other urls found in the log.

For websockets, you can use [Valorant Websocket Logger](https://github.com/techchrism/valorant-websocket-logger) which will listen to all events and export them to a file.
Once you have a websocket log, you can use [Valorant WebSocket Log Viewer](https://github.com/techchrism/valorant-websocket-log-viewer) to conveniently go through the data.

## Prior Work

Documenting the endpoints and making them available is a team effort. Here are some notable contributions:
 - RumbleMike's [ValorantClientAPI repo](https://github.com/RumbleMike/ValorantClientAPI)
 - Hidan's [endpoint gist](https://gist.github.com/Kavan72/b6e0bfdf21d610148f64df878b8a2cc5)
 - The assistance of many in the Discord
