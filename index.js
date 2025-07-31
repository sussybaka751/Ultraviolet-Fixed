const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = process.env.PORT || 8080;

// Example proxy to Google
app.use("/", createProxyMiddleware({
  target: "https://www.google.com",
  changeOrigin: true,
  pathRewrite: {
    "^/": "/"
  }
}));

app.listen(port, () => {
  console.log(`Proxy running on port ${port}`);
});
