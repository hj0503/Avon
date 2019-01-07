const tsImportPluginFactory = require('ts-import-plugin')
const {
  getLoader
} = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = {
  webpack: (config, env) => {
    const tsLoader = getLoader(
      config.module.rules,
      rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
    );
  
    tsLoader.options = {
      getCustomTransformers: () => ({
        before: [tsImportPluginFactory({
          libraryDirectory: 'es',
          libraryName: 'antd',
          style: 'css'
        })]
      })
    };
  
    config = rewireLess(config, env)
  
    return config;
  },

  devServer: (configFunction) => {
    return function(proxy, allowedHost) {
      proxy = {
        "/login": {
          target: "http://holer65193.wdom.net",
          changeOrigin: true
        }
      }
      const config = configFunction(proxy, allowedHost);
      return config;
    }
  }
}