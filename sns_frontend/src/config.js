const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    hostUrl: 'http://0.0.0.0:8000',
  },
  development: {
    hostUrl: 'http://0.0.0.0:8000',
  },
  production: {
    hostUrl: 'http://13.112.90.224:8000',
  },
}

module.exports = merge(config.all, config[config.all.env])
