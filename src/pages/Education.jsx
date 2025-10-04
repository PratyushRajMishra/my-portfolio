import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import EducationList from "../components/Education/EducationList";
import CertificationsList from "../components/Education/certificationList";

function Education() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <main>
        <EducationList />
        <CertificationsList />
      </main>
      <Footer />
    </div>
  );
}
export default Education;
