import React from "react";
import "./project.css"

const Project = () => {
  return (
    <div className="card bg-gray-100 rounded-lg p-4">
      <div className="flex justify-end">
        <i className="fas fa-heart mr-2"></i>
        <i className="fas fa-share"></i>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Card Title</h3>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <ul className="flex mt-4">
          <li className="bg-gray-200 px-3 py-1 rounded-full mr-2 text-xs">
            HTML
          </li>
          <li className="bg-gray-200 px-3 py-1 rounded-full mr-2 text-xs">
            CSS
          </li>
          <li className="bg-gray-200 px-3 py-1 rounded-full mr-2 text-xs">
            JavaScript
          </li>
          <li className="bg-gray-200 px-3 py-1 rounded-full mr-2 text-xs">
            Python
          </li>
          <li className="bg-gray-200 px-3 py-1 rounded-full mr-2 text-xs">
            Java
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
