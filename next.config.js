const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  // for mixins
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  env: {
    baseURL: 'https://bootcamp.akbolat.net',
    currency: 'TL'
  },
  publicRuntimeConfig: {
    baseURL: 'https://bootcamp.akbolat.net'
  },
  images: {
    domains: ['bootcamp.akbolat.net'],
  }
}

module.exports = nextConfig
