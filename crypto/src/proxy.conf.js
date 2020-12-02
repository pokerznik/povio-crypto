const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    secure: false,
    pathRewrite: {"^/api" : ""},
    changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;
