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
                    '@api': path.resolve((__dirname, 'api/')),
                    '@components': path.resolve((__dirname, 'components/')),
                    '@containers': path.resolve((__dirname, 'containers/')),
                    '@context': path.resolve((__dirname, 'context/')),
                    '@enum': path.resolve((__dirname, 'enum/')),
                    '@hooks': path.resolve((__dirname, 'hooks/')),
                    '@utils': path.resolve((__dirname, 'utils/')),
                },
            },
        }
    },
}
