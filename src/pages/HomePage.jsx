import React from "react";
import Navbar from "../components/Common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import Footer from "../components/Common/Footer";

function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
