import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
