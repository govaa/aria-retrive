import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";

const CareerPage = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name='description' content='Ariadne' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <NextSeo canonical='https://www.ariadne.inc/careers' />

      <main>
        <Script
          src='https://www.workable.com/assets/embed.js'
          type='text/javascript'
          onLoad={() => {
            setLoaded(true);
          }}
        ></Script>
        <Navbar />

        <PageBanner pageTitle='Careers' />

        {!loaded ? null : (
          <Script
            id='show-jobs-listing'
            strategy='lazyOnload'
            type='text/javascript'
            charSet='utf-8'
          >
            {`  whr(document).ready(function()
          {whr_embed(585970, {
            detail: "titles",
            base: "jobs",
            zoom: "country",
            grouping: "none",
          })}
          )    `}
          </Script>
        )}

        <Box
          sx={{ marginTop: "50px" }}
          className='features-details-area ptb-80'
        >
          <Grid container>
            <Grid item>
              <div id='whr_embed_hook'></div>
            </Grid>
          </Grid>
        </Box>

        <Footer />
      </main>
    </>
  );
};

export default CareerPage;
