import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://valapidocs.techchrism.me',
    integrations: [tailwind()],
    build: {
        format: 'file'
    },
    vite: {
        resolve: {
            preserveSymlinks: true
        }
    }
});