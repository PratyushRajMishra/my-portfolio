import React from "react";
import PROJECTS from "../../constants/projects";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  return (
    <section className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
    </section>
  );
}
export default ProjectList;
