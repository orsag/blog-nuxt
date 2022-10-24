// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "@/bootstrap.min.css"
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
      }
    ]
  },
  css: [
    '@/assets/scss/_variables.scss'
  ],
})
