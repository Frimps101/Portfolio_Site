import React from "react";
import "./product.css";
import { products } from "../../data";

const Product = () => {
  return (
    <>
      {products.map(({ id, link, github, title, desc, tech, img }) => (
        <div className="flex my-[10rem] justify-between section">
          <div className="w-1/3 p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">{title}</h2>
              <div className="ml-2 flex">
                <a href={github} className="mr-2">
                  <i className="fab fa-github"></i>
                </a>
                <a href={link}>
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-600">{desc}</p>
            <ul className="flex text-gray-600 mt-2">
            { tech?.map((item)=>(
              <li>
                <small key={item}>{item}</small>
              </li>
            ))}
            </ul>
          </div>
          
        </div>
      ))}
    </>
  );
};

export default Product;
