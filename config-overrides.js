const rewirePostcss = require('react-app-rewire-postcss')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = function override(config, env) {
  // Style overrides
  config = rewirePostcss(config, {
    plugins: () => [
      // postcssPresetEnv(/* allow postcss.config.js to configure */)
      postcssPresetEnv({
        stage: 0,
        importFrom: './src/css/variables.css'
      })
    ]
  })

  return config
}
