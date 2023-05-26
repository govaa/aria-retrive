import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import Router from 'next/router'


const ExhibitionPages = () => {

    const boothPerformance = () => {
		Router.push({
			pathname: '/booth-performance-measurement/',
		})
	}
	const learningsExpo = () => {
		Router.push({
			pathname: '/prepare-for-exhibitions/',
		})
	}
	const scheduleMeeting = () => {
		Router.push({
			pathname: '/exhibition-meeting',
		})
	}

    return (
        <div className="blog-area pt-4 pb-50">
            <div className="container">
               

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post" role="button" onClick={boothPerformance}>
                            <div className="blog-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog-image/booth performance.png" alt="Measure Booth Performance" height="240vh"/>
                                    </a>
                                </Link>

                            </div>

                            <div className="blog-post-content">
                                <h3>
                                    <Link href="/booth-performance-measurement">
                                        <a>Measure Your Booth Success for FREE at NRF</a>
                                    </Link>
                                </h3>

                                <Link href="/booth-performance-measurement">
                                    <a className="read-more-btn">Read More <Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post" role="button" onClick={learningsExpo}>
                            <div className="blog-image">
                                <Link href="/prepare-for-exhibitions">
                                    <a>
                                        <img src="/images/blog-image/exhibition.jpg" alt="Exhibition" height="240vh"/>
                                    </a>
                                </Link>

                            </div>

                            <div className="blog-post-content">
                                <h3>
                                    <Link href="/prepare-for-exhibitions">
                                        <a>Lessons Learned From 100K+ Visitors (+Webinar)</a>
                                    </Link>
                                </h3>

                                <Link href="/prepare-for-exhibitions">
                                    <a className="read-more-btn">Read More <Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post" role="button" onClick={scheduleMeeting}>
                            <div className="blog-image">
                                <Link href="/exhibition-meeting">
                                    <a>
                                        <img src="/images/blog-image/ariadne-booth.jpg" alt="Ariadne Booth" height="240vh"/>
                                    </a>
                                </Link>

                            </div>

                            <div className="blog-post-content">
                                <h3>
                                    <Link href="/exhibition-meeting">
                                        <a>Meet Ariadne and Live-Demo in NRF2023!</a>
                                    </Link>
                                </h3>

                                <Link href="/exhibition-meeting">
                                    <a className="read-more-btn">Read More <Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default ExhibitionPages;  