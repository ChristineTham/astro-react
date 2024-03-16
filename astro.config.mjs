import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-preact.netlify.app',
  integrations: [UnoCSS({
    injectReset: true
  }), sitemap(), react()]
});