const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@components": path.resolve((__dirname, 'components/')),
          "@containers": path.resolve((__dirname, 'containers/')),
          "@utils": path.resolve((__dirname, 'utils/'))
        }
      }
    }
  }
}
