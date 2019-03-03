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
        "/authentication": {
          target: "http://holer65255.wdom.net",
          changeOrigin: true
        },
        "/personnel": {
          target: "http://holer65255.wdom.net",
          changeOrigin: true
        },
        "/trans/commission": {
          target: "http://holer65255.wdom.net",
          changeOrigin: true
        },
        "/trans/performance": {
          target: "http://holer65255.wdom.net",
          changeOrigin: true
        },
        "/sysmenu": {
          target: "http://holer65255.wdom.net",
          changeOrigin: true
        }
      }
      const config = configFunction(proxy, allowedHost);
      return config;
    }
  }
}