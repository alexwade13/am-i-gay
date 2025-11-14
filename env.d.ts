/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-vue-layouts-next/client" />

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}
