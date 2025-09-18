import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import ContactForm from "../components/Contact/ContactForm";

function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
export default Contact;
