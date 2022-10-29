module.exports = {
  
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    config.experiments.topLevelAwait = true

    return config;
  },
};