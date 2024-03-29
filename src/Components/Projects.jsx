import React, { useEffect, useState } from "react";
import client from "../client";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await client
        .fetch(
          `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
       }`
        )
        .then((data) => {
          console.log(data);
          setProjectData(data);
        })
        .catch(console.error);
    };
    fetchData();
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center font-amatic">
          My Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          welcome to my project page
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                key={index}
                className="relative rounded-lg shadow-xl bg-white p-16"
              >
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-gray-700 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-500 text-xl font-bold hover:underline hover:text-red-400"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Projects;
