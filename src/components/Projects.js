import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-900 bg-indigo-100 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I have really grown a passion for working with React, Express.js, and Django! I can not wait to learn more frameworks and also expand my knowledge about these current frameworks as well.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={ project.link }
              target="_blank"
              key={ project.image }
              className="sm:w-1/2 w-100 p-4">
                <div className="px-8 py-10 relative w-full border-4 border-black bg-indigo-100 hover:bg-light-blue-500 hover:border-pink-600 hover:shadow-lg">
                  <h1 className="title-font text-lg font-medium text-black">
                    { project.title }
                  </h1>
                  <h2 className="mb-3">
                      Built with: <span className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1"> {project.subtitle}</span>
                  </h2>
                  <div className="flex-1 flex-row divide-black">
                    <div className="mb-3 flex-auto leading-relaxed text-justify">
                      <p>{ project.description }</p>
                    </div>
                    <hr />
                    <div className="mt-2 flex-1">
                      <h1 className="title-font text-base font-semibold italic text-black mb-2">
                        { project.exp_title }
                      </h1>
                      <p className="mb-3 flex-auto leading-relaxed text-justify">{ project.exp }</p>
                    </div>
                  </div>
                </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}