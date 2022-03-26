const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  // 外部画像
  images: {
    domains: ["pbs.twimg.com", "lh3.googleusercontent.com", "cdn.qiita.com"],
  },
});
