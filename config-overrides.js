const rewireCssModules = require('react-app-rewire-css-modules')
const rewirePostcss = require('react-app-rewire-postcss')
const postcssPresetEnv = require('postcss-preset-env')

const variables = require('./src/css/variables.json')
const mediaQueries = require('./src/css/media-queries.json')

module.exports = function override(config, env) {
  // Style overrides
  config = rewirePostcss(config, {
    plugins: () => [
      // postcssPresetEnv(/* allow postcss.config.js to configure */)
      postcssPresetEnv({
        stage: 0,
        features: {
          'custom-media-queries': { extensions: mediaQueries },
          'custom-properties': {
            // TODO: why the preserve flag is necessary?
            // variables override what is placed inline, then do not map to anything
            preserve: false,
            variables: variables
          }
        }
      })
    ]
  })
  // console.log('config', JSON.stringify(config, null, 2))
  // return

  config = rewireCssModules(config, env)

  // console.log('config', JSON.stringify(config, null, 2))

  return config
}
