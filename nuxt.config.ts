// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  // page title
  app: {
    head: {
      title: 'Frontend.mu Nuxt & Tailwind Workshop',
      
    },
  },
  /// tailwind typography
  tailwindcss: {
    config: {
      plugins: [require('@tailwindcss/typography')],
    },
  },
})