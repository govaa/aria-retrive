import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Head from "next/head";
import Navbar from "@/components/_App/Navbar";

import Box from "@mui/material/Box";

export async function getServerSideProps(context) {
  const proto =
    context.req.headers["x-forwarded-proto"] || context.req.connection.encrypted
      ? "https"
      : "http";
  try {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );

    if (!session) {
      return {
        redirect: {
          destination: proto + "://" + context.req.headers.host + "/cms-login",
          permanent: false,
        },
      };
    }
  } catch (error) {
    console.log(error.message);
  }
  return {
    props: {},
  };
}
const CmsDashboardPage = () => {
  return (
    <>
      <Head>
        <title>CMS Dashboard</title>
        <meta name='description' content='Ariadne' />
      </Head>
      <Navbar />
      <main>
        <Box mt={10}>CmsDashboardPage</Box>
      </main>
    </>
  );
};

export default CmsDashboardPage;
