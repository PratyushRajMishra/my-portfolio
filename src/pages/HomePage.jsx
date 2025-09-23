import React from "react";
import Navbar from "../components/Common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import WhatIKnow from "../components/Home/WhatIKnow";
import Footer from "../components/Common/Footer";
import EducationList from "../components/Education/EducationList";
import { Import } from "lucide-react";

function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatIKnow />
        <EducationList />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
