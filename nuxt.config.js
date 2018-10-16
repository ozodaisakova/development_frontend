export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tak-mebel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tak-mebel' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  modules:['@nuxtjs/axios'],
  axios:{    
    baseURL: 'http://localhost:8000/api/v1/',
    // baseURL: 'https://jsonplaceholder.typicode.com/',
    credentials : false,
    proxy: false,
    proxyHeaders: false,
    debug: true,
    retry: {
      retries: 3
    },
    requestInterceptor: (config, {store}) => {
      config.headers.common['Authorization'] = '';
      config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;application/json';
      return config
    }   

  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/main.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    transpile: [/^vuetify/],
    babel: {
      plugins: [
        ['transform-imports', {
          'vuetify': {
            'transform': 'vuetify/es5/components/${member}',
            'preventFullImport': true
          }
        }]
      ]
    },
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, {isDev}) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
