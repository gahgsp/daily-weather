const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/forecast',
    createProxyMiddleware({
      target: 'https://samples.openweathermap.org/data/2.5/',
      changeOrigin: true,
    })
  );
};
