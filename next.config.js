/** @type {import('next').NextConfig} */

const path = require("path");

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  reactStrictMode: false,
  i18n,
  distDir: "build",
  trailingSlash: true,
  optimizeFonts: false,

  async redirects() {
    return [
      {
        source: "/description",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/post/people-counting",
        destination: "/blog/people-counting",
        permanent: true,
      },
      {
        source: "/blog/post/e-commerce-to-hybrid/",
        destination: "/blog/customer-journey-in-winner-store/",
        permanent: true,
      },
      {
        source: "/blog/post/anchor-tenants",
        destination: "/blog/anchor-tenants",
        permanent: true,
      },
      {
        source: "/blog/post/customer-journey-in-winner-store",
        destination: "/blog/customer-journey-in-winner-store",
        permanent: true,
      },
      {
        source: "/blog/post/redesign-retail-store",
        destination: "/blog/redesign-retail-store",
        permanent: true,
      },
      {
        source: "/blog/post/heatmap-of-my-store",
        destination: "/blog/heatmap-of-my-store",
        permanent: true,
      },
      {
        source: "/praktiker-welcome",
        destination: "/",
        permanent: true,
      },
      {
        source: "/de",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fr",
        destination: "/",
        permanent: true,
      },
      {
        source: "/el",
        destination: "/",
        permanent: true,
      },
      {
        source: "/standard-plan",
        destination: "/letstalk",
        permanent: true,
      },
      {
        source: "/blog/post/loss-prevention",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/captiveportal",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mapic-case-study",
        destination: "/exhibition-case-study",
        permanent: true,
      },
      {
        source: "/mapic",
        destination: "/booth-performance-measurement",
        permanent: true,
      },
      {
        source: "/lessons-from-mapic-2021",
        destination: "/lessons-for-exhibitors",
        permanent: true,
      },
      {
        source: "/mapic-meeting",
        destination: "/exhibition-meeting",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig