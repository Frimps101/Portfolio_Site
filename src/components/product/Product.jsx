import React from "react";
import "./product.css";

const Product = ({ link, desc, tech }) => {
  return (
    <div className="p">
      <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by pictogramer - Flaticon</a>
      <a href="https://www.flaticon.com/free-icons/kick-off" title="kick off icons">Kick off icons created by Us and Up - Flaticon</a>
      <a href={link} target="_blank" rel="noreferrer" className="p-link">
        <i class="fa-light fa-rocket-launch"></i>
      </a>
      <p className="p-text">{desc}</p>
      {tech?.map((item)=>(
        <li key={item}>{item}</li>
      ))}
    </div>
  );
};

export default Product;
