import React from "react";
import EDUCATION from "../../constants/education";

function EducationList() {
  return (
    <section className="max-w-2xl mx-auto py-10">
      <h2 className="text-xl font-semibold">Education</h2>
      <ul>
        {EDUCATION.map((item, idx) => (
          <li key={idx} className="my-2 rounded px-2 py-1 bg-gray-50 dark:bg-gray-800">
            <span className="font-medium">{item.school}</span> — {item.degree} ({item.year})
          </li>
        ))}
      </ul>
    </section>
  );
}
export default EducationList;
