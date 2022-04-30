const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  env: {
    baseURL: 'https://bootcamp.akbolat.net'
  },
  publicRuntimeConfig: {
    baseURL: 'https://bootcamp.akbolat.net'
  },
  images: {
    domains: ['bootcamp.akbolat.net'],
  }
}

module.exports = nextConfig
