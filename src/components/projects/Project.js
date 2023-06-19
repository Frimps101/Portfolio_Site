import React from "react";
import { Card } from "antd";
import "./project.css";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  },
];

const Project = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/3 p-4">
        <div className="flex items-center mb-2">
          <h2 className="text-xl font-bold">Card 1</h2>
          <div className="ml-2 flex">
            <a href="#" className="mr-2">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est ac velit consequat aliquet.</p>
        <ul className="flex text-gray-600 mt-2">
          <li className="mr-2">React</li>
          <li className="mr-2">JavaScript</li>
          <li className="mr-2">CSS</li>
          <li className="mr-2">HTML</li>
        </ul>
      </div>
      <div className="w-1/3 p-4">
        <div className="flex items-center mb-2">
          <h2 className="text-xl font-bold">Card 2</h2>
          <div className="ml-2 flex">
            <a href="#" className="mr-2">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est ac velit consequat aliquet.</p>
        <ul className="flex text-gray-600 mt-2">
          <li className="mr-2">Node.js</li>
          <li className="mr-2">Express.js</li>
          <li className="mr-2">MongoDB</li>
          <li className="mr-2">REST API</li>
        </ul>
      </div>
      <div className="w-1/3 p-4">
        <div className="flex items-center mb-2">
          <h2 className="text-xl font-bold">Card 3</h2>
          <div className="ml-2 flex">
            <a href="#" className="mr-2">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est ac velit consequat aliquet.</p>
        <ul className="flex text-gray-600 mt-2">
          <li className="mr-2">Vue.js</li>
          <li className="mr-2">TypeScript</li>
          <li className="mr-2">Sass</li>
          <li className="mr-2">Webpack</li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
