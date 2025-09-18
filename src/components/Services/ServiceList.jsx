import React from "react";
import SERVICES from "../../constants/services";
import ServiceCard from "./ServiceCard";

function ServiceList() {
  return (
    <section className="max-w-2xl mx-auto py-10">
      <h2 className="text-xl font-semibold">Services</h2>
      <div className="grid grid-cols-1 gap-6">
        {SERVICES.map((service, idx) => (
          <ServiceCard service={service} key={idx} />
        ))}
      </div>
    </section>
  );
}
export default ServiceList;
