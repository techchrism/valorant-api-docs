# Valorant API Docs Generation

This script generates the markdown and Insomnia workspace data used for the Valorant API endpoint documentation.

Files from [../data/docs](../data/docs) are included in the output.
The data from [../data/endpoints.json](../data/endpoints.json) is used to generate additional markdown pages and the Insomnia workspace.

File contents and endpoint descriptions are passed through a templating engine used for linking to other requests.
For example: `[RiotClientSession_FetchSessions]({{#linkto}}RiotClientSession_FetchSessions{{/linkto}})`

The resulting link depends on the target rendering platform (web / insomnia).

To generate the docs, use `npm run generate`
