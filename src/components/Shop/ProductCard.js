import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import { useSelector } from 'react-redux'
import AddToCartBtn from './AddToCartBtn'

const ProductCard = () => {
    const products = useSelector((state) => state.products)

    // console.log(products)

    return (
        <div className="shop-area ptb-80">
            <div className="container">
                <div className="row justify-content-md-center">

                    {products.map(product => (
                        <div className="col-lg-3 col-md-6 col-sm-6" key={product.id}>
                            <div className="single-products">
                                <div className="products-image">
                                    <img src={product.image} alt={product.name} />
                                    <ul>
                                        <li>
                                            <Link href="/products/[id]" as={`/products/${product.id}`}>
                                                <a>
                                                    <Icon.Link />
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="products-content">
                                    <h3>
                                        <Link href="/products/[id]" as={`/products/${product.id}`}>
                                            <a>{product.name}</a>
                                        </Link>
                                    </h3>
                                    <span>${product.price}</span>

                                    <AddToCartBtn {...product} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;  