import React from 'react'
import "./productList.css"
import Product from "../product/Product"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire</h1>
                <p className="pl-desc">
                    Check out my portfolio for your creative needs and more.
                </p>
            </div>

            <div className="pl-list">
                    <Product/>
            </div>
        </div>
    )
}

export default ProductList
