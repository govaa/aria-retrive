import Link from 'next/link'
import * as Icon from 'react-feather';

export default function BlogCard({title, author, coverPhoto, datePublished, slug, excerpt}){
    return(
        <div className="col-lg-6 col-md-6">
            <div className="single-blog-post h-100">
                <div className="blog-image">
                    <Link href={"/blog/"+slug}>
                        <a>
                            <img src={coverPhoto.url} height="280vh" alt=""/>
                        </a>
                    </Link>

                    <div className="date">
                        <Icon.Calendar />{datePublished}
                    </div>
                </div>

                <div className="blog-post-content">
                    <h3>
                        <Link href={"/blog/"+slug}>
                            <a>{title}</a>
                        </Link>
                    </h3>

                    <span>By <a href="#">{author.name}</a></span>

                    <p>{excerpt.slice(0, 250)+'...'}</p>

                    <Link href={"/blog/"+slug}>
                        <a className="read-more-btn">
                            Read More <Icon.ArrowRight />
                        </a>
                    </Link>
                </div>

            </div>
        </div>
    )
}
