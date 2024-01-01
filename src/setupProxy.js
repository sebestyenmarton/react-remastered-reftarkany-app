import urls from "./service/ApplicationHttpClient.ts";

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/refapi",
    createProxyMiddleware({
      target: urls.getRootUrl(),
      changeOrigin: true,
    })
  );
};
