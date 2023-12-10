# Valorant API Docs Web

The web frontend for the Valorant API Docs. Built using Astro, TypeScript, and Tailwind CSS.

This module consumes the `valorant-api-types` library and produces a static site that can be deployed to any static hosting provider.

## Development

To run the development server, run `npm install` followed by `npm run dev` in this directory.

If you're testing a custom version of `valorant-api-types`, you can run [npm link](https://docs.npmjs.com/cli/v10/commands/npm-link) the local version of the library to this project.
Because of Vite's module optimizations, you'll need to kill and restart the development server after making changes to the library.

## To do
 - Use Astro v3's preload feature to preload links on hover
 - Add a search bar