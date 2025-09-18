import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import ServiceList from "../components/Services/ServiceList";

function Services() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <main>
        <ServiceList />
      </main>
      <Footer />
    </div>
  );
}
export default Services;
