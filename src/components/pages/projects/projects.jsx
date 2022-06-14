import React, { useEffect, useState } from "react";
import useAsyncData from "../../../hooks/useAsyncData";
import ContactUs from "../../contact_us/contact_us";
import Snippet from "../../snippet";
import "./projects.css";

const Projects = () => {
  const { data, isLoading, isError } = useAsyncData("ProjectAPI/");
  if (isLoading) return <Snippet />;
  return (
    <section className="projects">
      <div className="container">
        <div>
          {data?.map((project) => (
            <div className="projects_wrapper">
              <img
                src={`https://u1634535.plsk.regruhosting.ru/images/project/${project.image}`}
              />
              <p className="project_title">{project.title}</p>
            </div>
          ))}
        </div>
        <ContactUs />
      </div>
    </section>
  );
};
export default Projects;
