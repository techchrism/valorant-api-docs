# Valorant API Docs

This is a repo dedicated to documenting the Valorant API endpoints the client uses internally.
These endpoints are **not** officially supported.
However, as long as you use common sense and don't do anything a Riot employee would frown at, you won't get banned.

You can join the Discord server here: [https://discord.gg/a9yzrw3KAm](https://discord.gg/a9yzrw3KAm)

## Getting Started

One of the easiest ways to get started and get a feel for what kinds of data you can get from the apis is to play around
with the requests yourself in a REST client like Insomnia.

 - Download and install Insomnia here: [https://insomnia.rest/download](https://insomnia.rest/download)
 - Go to Application -> Preferences -> Plugins and add the plugin `insomnia-plugin-valorant`
 - From the dashboard, click "Create", then import from url and enter `https://raw.githubusercontent.com/techchrism/valorant-api-docs/trunk/docs/valorant-workspace-insomnia.json`

To learn about how to make the API request yourself, check the "Docs" tab on any request.
You can right-click a request and click "Generate Code" to see how to make the request in the language and library of your choice.

For info on common request components, see [Common Components](common-components.md)

## Prior Work

Documenting the endpoints and making them available is a team effort. Here are some notable contributions:
 - RumbleMike's [ValorantClientAPI repo](https://github.com/RumbleMike/ValorantClientAPI)
 - Hidan's [endpoint gist](https://gist.github.com/Kavan72/b6e0bfdf21d610148f64df878b8a2cc5)
 - The assistance of many in the Discord
