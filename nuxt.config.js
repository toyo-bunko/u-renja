const fs = require('fs')

// const webpack = require('webpack')
require('dotenv').config()
const {
  API_BASE_URL,
  // BASE_URL,
  // CDN_URL,
  projectNameJa,
  projectNameEn,

  projectFooterJa,
  projectFooterEn,

  projectDescriptionJa,
  projectDescriptionEn,
  projectKeywords,
  ELASTIC_SEARCH_HOST,
  ELASTIC_SEARCH_MAIN_INDEX,
  IIIF_VIEWER_SHOW_FLAG,
  CURATION_VIEW_SHOW_FLAG,
  FACETS_FLAGS,
  FACETS_LABELS,
  SORT_LABELS,
  SEARCH_LABELS,
  GOOGLE_ANALYTICS_ID,
  SHORT_NAME,
  SIMILAR_IMAGES_FLAG,
} = process.env

const env = {
  API_BASE_URL,
  // BASE_URL,
  // CDN_URL,
  projectNameJa,
  projectNameEn,

  projectFooterJa,
  projectFooterEn,

  projectDescriptionJa,
  projectDescriptionEn,
  projectKeywords,
  ELASTIC_SEARCH_HOST,
  ELASTIC_SEARCH_MAIN_INDEX,
  IIIF_VIEWER_SHOW_FLAG,
  CURATION_VIEW_SHOW_FLAG,
  FACETS_FLAGS,
  FACETS_LABELS,
  SORT_LABELS,
  SEARCH_LABELS,
  GOOGLE_ANALYTICS_ID,
  SHORT_NAME,
  SIMILAR_IMAGES_FLAG,
}

const environment = process.env.NODE_ENV || 'development'
const envSettings = require(`./env/${environment}.js`)
for (const key in envSettings) {
  env[key] = envSettings[key]
}

/* nuxt.config.js */
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/u-renja/',
        },
      }
    : {}

// path
const baseUrl = process.env.BASE_URL
const baseDir = process.env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

// meta
const lang = 'ja'
const siteName = process.env.projectNameJa
const siteDesc = process.env.projectDescriptionJa
const siteKeywords = process.env.projectKeywords

// images
const iconImages = basePath + 'img/icons/'
const ogpImages = basePath + 'img/ogp/' // cdnPath + 'img/ogp/'

// pwa
const shortName = process.env.SHORT_NAME
const manifestIcon = 'img/icons/icon-512.png'
// const splashscreens = cdnPath + 'img/splashscreens/'

env.db = 'https://static.toyobunko-lab.jp/taishozo'

///

env.bc = true

env.config = {
  default: {
    label: '書名目録',
    index: 'api/default/index.json',
    to: {
      name: 'search-slug',
    },
    aggs: {
      '分類(1)': {
        // sort: 'name:asc',
        label: '分類(1)',
        value: {},
        key: '分類(1)',
        more: false,
        open: false, // true,
      },
      '分類(2)': {
        // sort: 'name:asc',
        label: '分類(2)',
        value: {},
        key: '分類(2)',
        more: false,
      },
      '分類(3)': {
        // sort: 'name:asc',
        label: '分類(3)',
        value: {},
        key: '分類(3)',
        more: false,
      },
      函册: {
        // sort: 'name:asc',
        label: '函册次',
        value: {},
        key: '函册',
        more: false,
      },
      經番: {
        // sort: 'name:asc',
        label: '經番',
        value: {},
        key: '經番',
        more: false,
      },
      譯著者_facet: {
        // sort: 'name:asc',
        label: '譯著者',
        value: {},
        key: '譯著者_facet',
        more: false,
      },
      版式: {
        // sort: 'name:asc',
        label: '版式',
        value: {},
        key: '版式',
        more: false,
      },
      大正藏採録種別: {
        // sort: 'name:asc',
        label: '大正藏採録種別',
        value: {},
        key: '大正藏採録種別',
        more: false,
      },
      画像有無: {
        // sort: 'name:asc',
        label: '画像有無',
        value: {},
        key: '画像有無',
        more: false,
        open: true,
      },
      通番: {
        // sort: 'name:asc',
        label: '通番',
        value: {},
        key: '通番',
        more: false,
        hide: true,
        type: 'number',
      },
    },
    // sort: [{ label: '適合度', value: '_score' }],
    sort: [{ label: '通番', value: '通番' }],
    defaultSort: '通番:asc',
    layout: [
      {
        label: 'table',
        value: 'table',
        icon: 'mdi-table',
        component: 'custom-search-layout-table',
      },
      {
        label: 'graph',
        value: 'graph',
        icon: 'mdi-chart-bar',
        component: 'search-layout-graph',
      },
    ],
    defaultLayout: 'table',
    advanced: [],
    itemPerPages: [20, 50, 100, 500],
    defaultItemPerPage: 20,
  },
  advanced: {
    label: '詳細目録',
    index: 'api/advanced/index.json',
    to: {
      name: 'search-slug',
      params: { slug: 'advanced' },
    },
    aggs: {
      連: {
        // sort: 'name:asc',
        label: '所在一覧-連',
        value: {},
        key: '連',
        more: false,
      },
      箱: {
        // sort: 'name:asc',
        label: '所在一覧-箱',
        value: {},
        key: '箱',
        more: false,
      },
      '函(通番)': {
        // sort: 'name:asc',
        label: '所在一覧-函',
        value: {},
        key: '函(通番)',
        more: false,
      },
      函册次: {
        // sort: 'name:asc',
        label: '函册次',
        value: {},
        key: '函册次',
        more: false,
      },
      '分類(1)': {
        // sort: 'name:asc',
        label: '分類(1)',
        value: {},
        key: '分類(1)',
        more: false,
      },
      '分類(2)': {
        // sort: 'name:asc',
        label: '分類(2)',
        value: {},
        key: '分類(2)',
        more: false,
      },
      '分類(3)': {
        // sort: 'name:asc',
        label: '分類(3)',
        value: {},
        key: '分類(3)',
        more: false,
      },

      經番: {
        // sort: 'name:asc',
        label: '經番',
        value: {},
        key: '經番',
        more: false,
      },
      通番: {
        // sort: 'name:asc',
        label: '通番',
        value: {},
        key: '通番',
        more: false,
        type: 'number',
      },
      '刊記(西暦年)': {
        // sort: 'name:asc',
        label: '刊記(西暦年)',
        value: {},
        key: '刊記(西暦年)',
        more: false,
      },
      圖像: {
        // sort: 'name:asc',
        label: '圖像',
        value: {},
        key: '圖像',
        more: false,
      },
      画像: {
        // sort: 'name:asc',
        label: '画像',
        value: {},
        key: '画像',
        more: false,
        open: true,
      },
    },
    sort: [{ label: '通番', value: '通番' }],
    defaultSort: '通番:asc',
    layout: [
      {
        label: 'table',
        value: 'table',
        icon: 'mdi-table',
        component: 'custom-search-layout-advanced',
      },
      {
        label: 'graph',
        value: 'graph',
        icon: 'mdi-chart-bar',
        component: 'search-layout-graph',
      },
    ],
    defaultLayout: 'table',
    advanced: [],
    itemPerPages: [20, 50, 100, 500, 1000],
    defaultItemPerPage: 20,
  },
}

env.hide = []

env.list = []

env.advanced = []

const norm = JSON.parse(fs.readFileSync('static/data/norm.json'))
env.itaiji = norm

const both = {}
for (const key in norm) {
  const value = norm[key]
  both[key] = [key, value]
  both[value] = [key, value]
}
env.both = both

/// //////////////

env.menu = [
  {
    label: 'はじめに・凡例',
    href: env.BASE_URL + '/はじめに・凡例.pdf',

    type: 'about_',
    weight: 0,
  },
  {
    label: '現在の酉蓮社における収蔵状況',
    href: env.BASE_URL + '/現在の酉蓮社における収蔵状況.pdf',

    type: 'about_',
    weight: 1,
  },
  /*
  {
    label: 'update',
    to: {
      name: 'page-slug',
      params: {
        slug: 'update',
      },
    },
    icon: 'mdi-information',
    top: true,
    type: 'about_',
    weight: 1,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  {
    label: 'inquiry',
    href:
      'https://docs.google.com/forms/d/e/1FAIpQLSd1gYA3qgLN2qQKn4o5vuzbma3Dgtoj_u555SVNuIgM4CSc-g/viewform?usp=sf_link',

    icon: 'mdi-information',
    top: true,
    type: 'about_',
    weight: 2,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  */
  {
    label: 'news',
    to: {
      name: 'news',
    },
    icon: 'mdi-information',
    top: true,
    type: 'about_',
    weight: 2,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  {
    label: '所在',
    to: {
      name: 'tree',
    },
    icon: 'mdi-information',
    top: true,
    type: 'tools',
    weight: 0,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  {
    label: '書名目録',
    to: {
      name: 'search-slug',
    },
    icon: 'mdi-information',
    top: true,
    type: 'tools',
    weight: 1,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  {
    label: '詳細目録',
    to: {
      name: 'search-slug',
      params: {
        slug: 'advanced',
      },
    },
    icon: 'mdi-information',
    top: true,
    type: 'tools',
    weight: 2,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  {
    label: 'category',
    to: {
      name: 'category',
    },
    icon: 'mdi-information',
    top: true,
    type: 'tools',
    weight: 3,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  {
    label: 'dataset',
    to: {
      name: 'page-slug',
      params: {
        slug: 'dataset',
      },
    },
    icon: 'mdi-information',
    top: true,
    type: 'tools',
    weight: 4,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  {
    label: '東洋文庫',
    href: 'http://www.toyo-bunko.or.jp/',
    target: '_blank',
    type: 'links',
    weight: 0,
  },
  {
    label: '『大正新脩大蔵経』底本・校本DB',
    href: 'https://static.toyobunko-lab.jp/taishozo/',
    target: '_blank',
    type: 'links',
    weight: 1,
  },
]

///

module.exports = {
  server: {
    port: 8008, // デフォルト: 3000
    // host: '0.0.0.0', // デフォルト: localhost
  },
  ...routerBase,
  env,
  // serverMiddleware: ['~~/api/'],
  workbox: {
    runtimeCaching: [
      {
        urlPattern: baseDir + '.*',
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'my-cache',
          cacheExpiration: {
            maxAgeSeconds: 24 * 60 * 60 * 30,
          },
        },
      },
    ],
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  // mode: 'universal',
  ssr: false,
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang,
    },
    titleTemplate: `%s - ${siteName}`,
    // title: 'Cultural Japan',
    meta: [
      { chatset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      // ogp関連
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:title', property: 'og:title', content: siteName },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${ogpImages}home.png`,
      },
      /*
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'ja_JP'
      }
      */
      { name: 'twitter:card', content: 'summary_large_image' },
      // pwa iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: iconImages + 'favicon-16.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: iconImages + 'favicon-32.png',
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: iconImages + 'favicon-48.png',
      },
      {
        rel: 'icon',
        sizes: '72x72',
        type: 'image/png',
        href: iconImages + 'favicon-72.png',
      },
      // apple touch icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: iconImages + 'apple-touch-icon.png',
      },
    ],
  },
  manifest: {
    lang,
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
  },
  icon: {
    iconFileName: manifestIcon,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#E64A19', height: '5px' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/utils.ts',
    '@/plugins/searchUtils.ts',
    '@/plugins/indexUtils.ts',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    'nuxt-leaflet',
    // ['@nuxtjs/moment', ['ja', 'en']],
    '@nuxtjs/moment',
    '@nuxtjs/google-gtag',
  ],
  'google-gtag': {
    id: 'G-Y59NLBLGYC',
    debug: true, // Enable to track in dev mode.
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en_US', file: 'en.json' },
      { code: 'ja', iso: 'ja_JP', file: 'ja.json' },
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    // strategy: 'no_prefix'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
    // generate: true,
    exclude: ['/admin', '/test*', '/en/test*'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line
    extend(config, ctx) {}
  },
}
