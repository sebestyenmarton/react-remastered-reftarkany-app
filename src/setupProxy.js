const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/refapi",
    createProxyMiddleware({
      target: "http://localhost",
      changeOrigin: true,
    })
  );
};
