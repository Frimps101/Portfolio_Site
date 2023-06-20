import React from "react";
import { Card } from "antd";
import "./project.css";
import { products } from "../../data";


const Project = () => {
  return (
    <>
      <div className="mt-[10rem] text-center">
        <h1 className="pl-title">Create & Inspire & Discover</h1>
        <p className="pl-desc">
          Check out my portfolio for your creative needs and more.
        </p>
      </div>
      
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {products.map(({ id, link, github, title, desc, tech, img }) => (
              <article key={id} className="drop-shadow-2xl bg-white py-[2rem] px-4 max-w-xl flex-col items-start justify-between rounded">
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={link}
                         target="_blank"
                      >
                        <span className="" />
                        {title}
                      </a>
                    </h3>
                  </div>

                  <div className="flex items-center text-xs">
                    <a
                      href={github}
                      target="_blank"
                      className=" z-10 py-1.5 font-medium"
                    >
                      <i class="fa-brands fa-github icon"></i>
                    </a>
                    <a
                      href={link}
                      target="_blank"
                      className="relative z-10 py-1.5 font-medium"
                    >
                      <i class="fa-solid fa-arrow-up-right-from-square icon"></i>
                    </a>
                  </div>

                </div>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{desc}</p>

                <div className="mt-3 p-tech">
                  {tech?.map((item) => (
                    <small key={item}>{item}</small>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      
    </>
  );
};

export default Project;
