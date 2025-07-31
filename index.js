const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = process.env.PORT || 8080;

// Proxy to Brave Search
app.use("/", createProxyMiddleware({
  target: "https://search.brave.com",
  changeOrigin: true,
  pathRewrite: {
    "^/": "/"
  }
}));

app.listen(port, () => {
  console.log(`Proxy running on port ${port}`);
});
