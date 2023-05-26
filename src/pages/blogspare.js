import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '@/components/Blog/BlogCardSpare';

const graphcms = new GraphQLClient("https://api-eu-central-1.hygraph.com/v2/ckyv0utzw04ly01z9fse31mp5/master");

const QUERY = gql `
    {
        posts {
            datePublished
            excerpt
            id
            slug
            title
            content {
              html
            }
            author {
              name
              photo {
                url
              }
            }
            coverPhoto {
              url
            }
            categories {
                name
                slug
            }
        }
    }
`

export async function getStaticProps(){
    const {posts} = await graphcms.request(QUERY);
    return{
        props: {
            posts,
        }
    }
}
 
const Blog2 = ({posts}) => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Ariadne Blog" />
 
            <div className="blog-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row justify-content-center">

                            {posts.map((post) => (
                                <BlogCard 
                                title = {post.title}
                                author = {post.author}
                                coverPhoto = {post.coverPhoto}
                                key = {post.id}
                                datePublished = {post.datePublished}
                                slug = {post.slug}
                                excerpt = {post.excerpt}
                                />
                            ))}
                                <div className="col-lg-12 col-md-12">
                                    <div className="pagination-area">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                                
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                
                                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
		    </div>

            <Footer />
        </>
    )
}

export default Blog2;