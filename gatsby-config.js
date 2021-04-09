const themeOptions = require('gatsby-theme-guide/theme-options')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const tableOfContents = {
  null: ['preface', 'README'],
  Background: [
    'background/index',
    'background/javascript',
    'background/json',
    'background/git',
    'background/node-npm-and-nvm',
    'background/http',
    'background/server',
    'background/databases',
    'background/spa',
    'background/ssr',
    'background/react',
    'background/vue',
    'background/mobile-apps',
    'background/latency',
    'background/cdn',
    'background/webhooks',
    'background/testing',
    'background/continuous-integration',
    'background/authentication',
    'background/browser-performance',
  ],
  '1. Understanding GraphQL Through REST': [
    'understanding-graphql/index',
    'understanding-graphql/introduction',
    'understanding-graphql/graphql-as-an-alternative-to-a-rest-api',
    'understanding-graphql/a-simple-rest-api-server',
    'understanding-graphql/a-simple-graphql-server',
    'understanding-graphql/querying-a-set-of-data',
    'understanding-graphql/filtering-the-data',
    'understanding-graphql/async-data-loading',
    'understanding-graphql/multiple-types-of-data',
    'understanding-graphql/security-and-error-handling',
    'understanding-graphql/tying-this-all-together',
  ],
  'Part I · The Spec': [],
  '2. Query Language': [
    'query-language/index',
    'query-language/operations',
    'query-language/document',
    'query-language/selection-sets',
    'query-language/fields',
    'query-language/arguments',
    'query-language/variables',
    'query-language/field-aliases',
    'query-language/fragments',
    'query-language/named-fragments',
    'query-language/type-conditions',
    'query-language/inline-fragments',
    'query-language/directives',
    'query-language/mutations',
    'query-language/subscriptions',
    'query-language/summary',
  ],
  '3. Type System': [
    'type-system/index',
    'type-system/schema',
    'type-system/types',
    'type-system/descriptions',
    'type-system/scalars',
    'type-system/enums',
    'type-system/objects',
    'type-system/interfaces',
    'type-system/unions',
    'type-system/lists',
    'type-system/non-null',
    'type-system/field-arguments',
    'type-system/directives',
    'type-system/extending',
    'type-system/introspection',
    'type-system/summary',
  ],
  '4. Validation & Execution': [
    'validation-and-execution/index',
    'validation-and-execution/validation',
    'validation-and-execution/execution',
  ],
  'Part II · The Client': [],
  '5. Client Dev': [
    'client/index',
    'client/anywhere-http',
    'client/client-libraries',
  ],
  '6. React': [
    'react/index',
    'react/setting-up',
    'react/querying',
    'react/authentication',
    'react/mutating',
    'react/advanced/index',
    'react/advanced/paginating',
    'react/advanced/client-side-ordering-and-filtering',
    'react/advanced/local-state',
    'react/advanced/rest',
    'react/advanced/review-subscriptions',
    'react/advanced/prefetching',
    'react/advanced/batching',
    'react/advanced/persisting',
    'react/advanced/multiple-endpoints',
    'react/extended-topics/index',
    'react/extended-topics/linting',
    'react/extended-topics/uploading-files',
    'react/extended-topics/testing',
    'react/extended-topics/server-side-rendering',
  ],
  '7: Vue': [
    'vue/index',
    'vue/setting-up-apollo',
    'vue/querying',
    'vue/querying-with-variables',
    'vue/further-topics',
  ],
  '8: React Native': [
    'react-native/index',
    'react-native/app-structure',
    'react-native/adding-apollo',
    'react-native/adding-a-screen',
    'react-native/persisting',
    'react-native/deploying',
  ],
  '9: iOS': ['ios/index'],
  '10: Android': [
    'android/index',
    'android/setting-up-apollo-android',
    'android/first-query',
    'android/querying-with-variables',
    'android/caching',
    'android/viewmodel',
    'android/flow',
  ],
  'Part III · The Server': [],
  '11: Server Dev': [
    'server/index',
    'server/introduction',
    'server/building/index',
    'server/building/project-setup',
    'server/building/types-and-resolvers',
    'server/building/authentication',
    'server/building/data-sources',
    'server/building/custom-scalars',
    'server/building/creating-users',
    'server/building/authorization',
    'server/building/errors',
    'server/building/subscriptions',
    'server/testing/index',
    'server/testing/static-tests',
    'server/testing/review-integration-tests',
    'server/testing/code-coverage',
    'server/testing/user-integration-tests',
    'server/testing/unit-tests',
    'server/testing/end-to-end-tests',
    'server/production/index',
    'server/production/deployment',
    'server/production/database-hosting',
    'server/production/querying-in-production',
    'server/production/analytics',
    'server/production/error-reporting',
    'server/more-data-sources/index',
    'server/more-data-sources/sql',
    'server/more-data-sources/rest',
    'server/more-data-sources/graphql',
    'server/more-data-sources/custom-data-source',
    'server/extended-topics/index',
    'server/extended-topics/mocking',
    'server/extended-topics/pagination',
    'server/extended-topics/file-uploads',
    'server/extended-topics/schema-validation',
    'server/extended-topics/apollo-federation',
    'server/extended-topics/hasura',
    'server/extended-topics/schema-design',
    'server/extended-topics/custom-schema-directives',
    'server/extended-topics/subscriptions-in-depth',
    'server/extended-topics/security',
    'server/extended-topics/performance',
    'server/future',
  ],
  'Part IV · Extras': [],
  'Server-Side Rendering': [
    'ssr/index',
    'ssr/setting-up-the-server',
    'ssr/adding-react',
    'ssr/adding-apollo',
  ],
  'Apollo Federation': [
    'federation/index',
    'federation/federated-service',
    'federation/federated-gateway',
    'federation/extending-entities',
    'federation/managed-federation',
    'federation/deploying-federation',
  ],
  // Linting: [
  //   'linting/index',
  //   'linting/setting-up-linting',
  //   'linting/fixing-linting-errors',
  //   'linting/using-linting',
  // ],
  'Server Analytics': ['server-analytics/index'],
  'Stripe and Service Integrations': [
    'service-integrations/index',
    'service-integrations/making-a-query',
    'service-integrations/writing-server-side-code',
    'service-integrations/creating-persisted-queries',
  ],
  'Preventing DoS Attacks': ['preventing-dos-attacks/index'],
}

const titleFont = encodeURIComponent('Source Sans Pro')
// https://github.com/jlengstorf/get-share-image
const shareImageConfig = {
  titleFont,
  titleFontSize: 80,
  titleExtraConfig: '_bold',
  taglineFont: titleFont,
  textColor: 'FFFFFF',
  textLeftOffset: 50,
  textAreaWidth: 750,
  cloudName: 'graphql',
  imagePublicID: 'social',
}

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-guide',
      options: {
        ...themeOptions,
        root: __dirname,
        baseDir: '',
        contentDir: 'text',
        siteName: 'The GraphQL Guide',
        pageTitle: 'The GraphQL Guide',
        description: 'The complete reference for GraphQL and Apollo',
        githubRepo: 'GraphQLGuide/book',
        defaultVersion: '1.0',
        ffWidgetId: '80119a3c-6bb7-469f-9ee9-fa3f719c2805',
        gaTrackingId: ['UA-96115966-1'],
        algoliaApiKey: '15e200d18fe3e48dbec05442a10c4ff1',
        algoliaIndexName: 'guide',
        baseUrl: 'https://graphql.guide',
        twitterHandle: 'graphqlguide',
        spectrumHandle: null,
        youtubeUrl: null,
        logoLink: 'https://graphql.guide/introduction',
        footerNavConfig: {},
        shareImageConfig,
        sidebarCategories: tableOfContents,
      },
    },
    'gatsby-plugin-use-query-params',
    'gatsby-theme-apollo',
    {
      resolve: 'gatsby-plugin-heap',
      options: {
        appId: '3557733793',
        enableOnDevMode: true,
      },
    },
    'gatsby-redirect-from',
    'gatsby-plugin-meta-redirect', // make sure this is always the last one
  ],
}
