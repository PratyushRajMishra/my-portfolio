import React from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      className="p-4 rounded bg-gray-100 dark:bg-gray-800 shadow"
    >
      <h3 className="font-bold">{service.name}</h3>
      <p>{service.description}</p>
    </motion.div>
  );
}
export default ServiceCard;
