import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const ForgotPassword = () => {
    return (
        <>
        
            <Head>
                <title>
                Forgot Password? | Smart People Counting Software | Ariadne
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/forgot-password' />

            <Navbar />

            <PageBanner pageTitle="Forgot Password" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <a><img src="/images/logo.png" /></a>
                            </Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default ForgotPassword;