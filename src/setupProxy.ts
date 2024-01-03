import { createProxyMiddleware } from "http-proxy-middleware";
import urls from "./service/ApplicationHttpClient";

module.exports = function (app: any) {
  app.use(
    "/refapi",
    createProxyMiddleware({
      target: urls.getRootUrl(),
      changeOrigin: true,
    })
  );
};
