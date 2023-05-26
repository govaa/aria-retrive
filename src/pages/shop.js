import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import ProductCard from '@/components/Shop/ProductCard';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const Shop = () => {
    return (
        <>
        
            <Head>
                <title>
                Shop | Smart People Counting Software | Ariadne
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/shop' />

            <Navbar />

            <PageBanner pageTitle="Products" /> 

            <ProductCard />
 
            <Footer />
        </>
    )
}

export default Shop;