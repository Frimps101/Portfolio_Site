import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire</h1>
                <p className="pl-desc">
                    I create awesome portfolio that your work has been waiting for and a whole lot more inside.
                </p>
            </div>

            <div className="pl-list">
                {products.map((item)=>(
                    <Product key={item.id} link={item.link} title={item.title} desc={item.desc} tech={item.tech}/>
                ))}
                
                
            </div>
        </div>
    )
}

export default ProductList
