import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/Common/MainBanner";
import Features from "@/components/Common/Features";
import IndustriesHomepage from "@/components/Common/IndustriesHomepage";
import ServicesArea from "@/components/Common/ServicesArea";
import Feedback from "@/components/Common/Feedback";
import Partner from "@/components/Common/Partner";
import BlogPost from "@/components/Common/BlogPost";
import Footer from "@/components/_App/Footer";
import ContactForm from "@/components/Contact/ContactForm";
import VideoCarousel from "@/components/Common/VideoCarousel";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/index"])),
      },
    };
  }

const Index = () => {

  const { t } = useTranslation("pages/index");

  return (
    <>
      <Head>
        <title>
        {t("seo-title")}
        </title>
        <meta name='description' content='Ariadne' />
      </Head>
      <NextSeo canonical='https://www.ariadne.inc' />

      <Navbar />

      <MainBanner />

      <Features />

      <VideoCarousel />

      {/* <Newsletter /> */}

      <ServicesArea />

      <IndustriesHomepage />

      {/* <Team /> */}

      {/* <FunFactsArea /> */}

      {/* <RecentWorks /> */}

      <Feedback />

      <Partner />

      <BlogPost />

      {/* <PricingStyleOne /> */}

      <ContactForm />

      <Footer />
    </>
  );
};

export default Index;
