# Valorant API Docs

**To read documentation and get started, see [Docs](docs)**

This is a project designed to automatically document Valorant endpoints based on a JSON file containing endpoint data.
Documentation comes in the form of markdown files and importable Insomnia workspaces.

Development for this documentation is currently split between existing endpoint documentation and the new [valorant-api-types](./valorant-api-types)
module. New endpoint documentation should be added to the `valorant-api-types` module, and existing documentation is correlated with this through the `data/correlations.json` file.

To contribute to the code generating the documentation, see the `generation` directory.
Modifications to the `docs` directory will be removed automatically.
