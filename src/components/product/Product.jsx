import React from "react";
import "./product.css";
import { products } from "../../data";

const Product = () => {
  return (
    <>
      {/* {products.map(({ id, link, github,title, desc, tech, img }) => (
        <div key={id} className="p">
          <div className="p-icons">
            <div className="p-icons--wrapper">
              <a
                rel="noreferrer"
                className="p-icons--link"
                target="_blank"
                href={github}
              >
                <i class="fa-brands fa-github icon"></i>
              </a>
            </div>
            <div className="p-icons--wrapper">
              <a
                rel="noreferrer"
                target="_blank"
                href={link}
              >
                <i class="fa-solid fa-arrow-up-right-from-square icon"></i>
              </a>
            </div>
          </div>

          <div className="p-text">
            <h3 className="p-title">{title}</h3>
            <p className="p-text__content">{desc}</p>
          </div>

          <div className="p-tech">
            { tech?.map((item)=>(
              <small key={item}>{item}</small>
            ))}
          </div>
        </div>
      ))} */}
    </>
  );
};

export default Product;
