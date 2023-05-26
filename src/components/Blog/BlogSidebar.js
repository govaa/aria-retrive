import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const BlogSidebar = () => {
    return (
        <div className="widget-area" id="secondary">
            <div className="widget widget_search">
                <form className="search-form">
                    <label>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit">
                        <Icon.Search />
                    </button>
                </form>
            </div>

            <div className="widget widget_ariadne_posts_thumb">
                <h3 className="widget-title">Recent Posts</h3>

                <article className="item">
                    <Link href="/blog/people-counting">
                        <a className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </a>
                    </Link>

                    <div className="info">
                        <time>September 20, 2022</time>
                        <h4 className="title usmall">
                            <Link href="/blog/people-counting">
                                <a>How to Get the Most Out of People Counting</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link href="/blog/customer-journey-in-winner-store">
                        <a className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <time>September 13, 2022</time>
                        <h4 className="title usmall">
                            <Link href="/blog/customer-journey-in-winner-store">
                                <a>How Can Physical Stores Win Back on The Competition?</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link href="/blog/redesign-retail-store">
                        <a className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <time>September 07, 2022</time>
                        <h4 className="title usmall">
                            <Link href="/blog/redesign-retail-store">
                                <a>8 Data-Driven Steps to Re-Design Your Store</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>
            </div>

            {/* <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>

                <ul>
                    <li>
                        <Link href="/blog-1">
                            <a>Business</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>Privacy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>Technology</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>Tips</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>Uncategorized</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Tags</h3>

                <div className="tagcloud">
                    <Link href="/blog-1">
                        <a>IT <span className="tag-link-count">(3)</span></a>
                    </Link>

                    <Link href="/blog-1">
                        <a>Spacle <span className="tag-link-count">(3)</span></a>
                    </Link>

                    <Link href="/blog-1">
                        <a>Games <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link href="/blog-1">
                        <a>Fashion <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link href="/blog-1">
                        <a>Travel <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link href="/blog-1">
                        <a>Smart <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link href="/blog-1">
                        <a>Marketing <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link href="/blog-1">
                        <a>Tips <span className="tag-link-count">(2)</span></a>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default BlogSidebar;  