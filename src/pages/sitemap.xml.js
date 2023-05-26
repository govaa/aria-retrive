// import React from "react";
// import fs from "fs";

const Sitemap = () => {};

// const locales = ['en','de','fr']

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://www.ariadne.inc",
  }[process.env.NODE_ENV];



  // const staticPages = fs
  //   .readdirSync({
  //     development: 'pages',
  //     production: '.output/server/pages',
  //   }[process.env.NODE_ENV])
  //   .filter((staticPage) => {
  //     return ![
  //       "api",
  //       "careers",
  //       "blog",
  //       "_app.js",
  //       "company",
  //       "industries",
  //       "solutions",
  //       "_document.js",
  //       "_error.js",
  //       "eurocis-meeting.js",
  //       "letstalk.js",
  //       "test.js",

  //       "sitemap.xml.js",
  //     ].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {
  //     if(staticPagePath==='industries'){

  //     }
  //     return `${baseUrl}/${staticPagePath}`;
  //   });

  //   console.log(staticPages)

  //   const industries = fs
  //   .readdirSync({
  //     development: 'pages/industries',
  //     production: '.output/server/pages/industries',
  //   }[process.env.NODE_ENV])
  //   .filter((staticPage) => {
  //     return ![
  //       "index.js",

  //     ].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {

  //       return `${baseUrl}/industries/${staticPagePath}`;

  //   });

  //   const solutions = fs
  //   .readdirSync({
  //     development: 'pages/solutions',
  //     production: '.output/server/pages/solutions',
  //   }[process.env.NODE_ENV])
  //   .filter((staticPage) => {
  //     return ![
  //       "index.js",

  //     ].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {

  //       return `${baseUrl}/solutions/${staticPagePath}`;

  //   });

  //   const company =fs
  //   .readdirSync({
  //     development: 'pages/company',
  //     production: '.output/server/pages/company',
  //   }[process.env.NODE_ENV])
  //   .filter((staticPage) => {
  //     return ![
  //       "index.js",

  //     ].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {

  //       return `${baseUrl}/company/${staticPagePath}`;

  //   });

  const allPages = [
    `${baseUrl}/`,
    `${baseUrl}/technology/why-ariadne`,
    `${baseUrl}/technology/ariadne-analytics`,
    `${baseUrl}/technology/ariadne-engagement`,
    `${baseUrl}/technology/ariadne-navigation`,
    `${baseUrl}/data-lifecycle`,
    `${baseUrl}/industries/airports`,
    `${baseUrl}/solutions/people-counting`,
    `${baseUrl}/solutions/queue-management`,
    `${baseUrl}/solutions/asset-tracking`,
    `${baseUrl}/solutions/virtual-queuing`,
    `${baseUrl}/industries/cities`,
    `${baseUrl}/industries/hospitality`,
    `${baseUrl}/industries/retail-stores`,
    `${baseUrl}/industries/shopping-centers`,
    `${baseUrl}/industries/transportation`,
    `${baseUrl}/industries/exhibitions`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/imprint`,
    `${baseUrl}/privacy-policy`,
    `${baseUrl}/letstalk`,
    `${baseUrl}/blog`,
    `${baseUrl}/faq`,
    `${baseUrl}/get-started`,
    `${baseUrl}/faq`,
    `${baseUrl}/careers/business-development-representative`,
    `${baseUrl}/careers/data-scientist`,
    `${baseUrl}/careers/social-media`,
    `${baseUrl}/careers/junior-key-account-manager`,
    `${baseUrl}/careers/software-engineer`,
    `${baseUrl}/careers/wireless-network-engineer`,
    `${baseUrl}/careers`,
    `${baseUrl}/solutions`,
    `${baseUrl}/industries`,
    `${baseUrl}/technology`,
    `${baseUrl}/blog/anchor-tenants`,
    `${baseUrl}/blog/customer-journey-in-winner-store`,
    `${baseUrl}/blog/redesign-retail-store`,
    `${baseUrl}/blog/people-counting`,
    `${baseUrl}/blog/indoor-localization-challenges`,
    `${baseUrl}/blog/airport-heatmap`,
    `${baseUrl}/blog/lessons-for-exhibitors`,
    `${baseUrl}/blog/exhibition-case-study`,
    `${baseUrl}/blog/exhibition-meeting`,
    `${baseUrl}/booth-performance-measurement`,
    `${baseUrl}/prepare-for-exhibitions`,
    `${baseUrl}/blog/nrf-retails-big-show-2023`,
    `${baseUrl}/blog/shopper-flow`,
    `${baseUrl}/blog/empower-store-employees`,
    `${baseUrl}/shopper-flow-analytics`,
    `${baseUrl}/passenger-terminal-expo-2023`,


    // //de
    // `${baseUrl}/de`,
    // `${baseUrl}/de/why-ariadne`,
    // `${baseUrl}/de/solutions/ariadne-analytics`,
    // `${baseUrl}/de/solutions/ariadne-engagement`,
    // `${baseUrl}/de/solutions/ariadne-navigation`,
    // `${baseUrl}/de/solutions/data-lifecycle`,
    // `${baseUrl}/de/industries/airports`,
    // `${baseUrl}/de/industries/cities`,
    // `${baseUrl}/de/industries/hospitality`,
    // `${baseUrl}/de/industries/retail-stores`,
    // `${baseUrl}/de/industries/shopping-centers`,
    // `${baseUrl}/de/industries/transportation`,
    // `${baseUrl}/de/company/about-us`,
    // `${baseUrl}/de/company/contact`,
    // `${baseUrl}/de/company/disclaimer`,
    // `${baseUrl}/de/company/privacy`,
    // `${baseUrl}/de/company/careers/business-development-jobs`,
    // `${baseUrl}/de/company/careers/data-science-jobs`,
    // `${baseUrl}/de/company/careers/social-media-jobs`,
    // `${baseUrl}/de/letstalk`,

    // //fr
    // `${baseUrl}/fr`,
    // `${baseUrl}/fr/why-ariadne`,
    // `${baseUrl}/fr/solutions/ariadne-analytics`,
    // `${baseUrl}/fr/solutions/ariadne-engagement`,
    // `${baseUrl}/fr/solutions/ariadne-navigation`,
    // `${baseUrl}/fr/solutions/data-lifecycle`,
    // `${baseUrl}/fr/industries/airports`,
    // `${baseUrl}/fr/industries/cities`,
    // `${baseUrl}/fr/industries/hospitality`,
    // `${baseUrl}/fr/industries/retail-stores`,
    // `${baseUrl}/fr/industries/shopping-centers`,
    // `${baseUrl}/fr/industries/transportation`,
    // `${baseUrl}/fr/company/about-us`,
    // `${baseUrl}/fr/company/contact`,
    // `${baseUrl}/fr/company/disclaimer`,
    // `${baseUrl}/fr/company/privacy`,
    // `${baseUrl}/fr/company/careers/business-development-jobs`,
    // `${baseUrl}/fr/company/careers/data-science-jobs`,
    // `${baseUrl}/fr/company/careers/social-media-jobs`,
    // `${baseUrl}/fr/letstalk`,

    // ,
    // `${baseUrl}/blog`,
    // `${baseUrl}/company/careers`,
    // `${baseUrl}/de/blog`,
    // `${baseUrl}/de/company/careers`,
    // `${baseUrl}/fr/blog`,
    // `${baseUrl}/fr/company/careers`,

    // ...dynamic,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
