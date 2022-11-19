// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: [
    '~/assets/reset.scss',
  ],
  components: {
    dirs: [
      {
        path: '~/components/blocks/',
        global: true,
      },
      '~/components',
    ],
    loader: true,
  },
});
