import React from "react";
import "./project.css";

const ProjectGrid = ({ projects }) => {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {projects.map(({ id, link, github, title, desc, tech }) => (
        <article
          key={id}
          className="drop-shadow-2xl bg-white py-[2rem] px-4 max-w-xl flex-col items-start justify-between rounded"
        >
          <div className="flex justify-between">
            <div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={link} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </h3>
            </div>

            <div className="flex items-center text-xs">
              {github ? (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="z-10 py-1.5 font-medium"
                >
                  <i className="fa-brands fa-github icon"></i>
                </a>
              ) : null}
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 py-1.5 font-medium"
              >
                <i className="fa-solid fa-arrow-up-right-from-square icon"></i>
              </a>
            </div>
          </div>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {desc}
          </p>

          <div className="mt-3 p-tech">
            {tech?.map((item) => (
              <small key={`${id}-${item}`}>{item}</small>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectGrid;
