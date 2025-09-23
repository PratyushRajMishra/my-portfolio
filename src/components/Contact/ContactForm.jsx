import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded">
      <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 mb-2 rounded border dark:bg-gray-900" />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 mb-2 rounded border dark:bg-gray-900" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full p-2 mb-2 rounded border dark:bg-gray-900" />
      <button type="submit" className="w-full bg-indigo-700 dark:bg-orange-400 text-white p-2 rounded">Send Email</button>
    </form>
  );
}
export default ContactForm;
