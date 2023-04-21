import React from "react";
import "./product.css";

const Product = ({ link, title, desc, tech }) => {

  console.log(title)
  return (
    <div className="p">
      <div className="p-icons">
        <div className="p-icons--wrapper">
          <a
            rel="noreferrer"
            className="p-icons--link"
            target="_blank"
            href="https://github.com/Frimps101"
          >
            <i class="fa-brands fa-github icon"></i>
          </a>
        </div>
        <div className="p-icons--wrapper">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Frimps101"
          >
            <i class="fa-solid fa-arrow-up-right-from-square icon"></i>
          </a>
        </div>
      </div>

      <div className="p-text">
        <h3 className="p-title">{title}</h3>
        <p className="p-text">{desc}</p>
      </div>

      <div className="p-tech">
        {tech?.map((item) => (
          <small key={item}>{item}</small>
        ))}
      </div>
    </div>
  );
};

export default Product;
