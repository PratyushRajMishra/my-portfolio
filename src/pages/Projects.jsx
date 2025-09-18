import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import ProjectList from "../components/Projects/ProjectList";
import ThreeDScene from "../components/Animation/ThreeDScene";

function Projects() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <main>
        <ThreeDScene />
        <ProjectList />
      </main>
      <Footer />
    </div>
  );
}
export default Projects;
