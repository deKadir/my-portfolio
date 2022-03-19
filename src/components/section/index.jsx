import React from "react";
import "./section.scss";
import { motion } from "framer-motion";
export default function Section({ children, title, subtitle, id = "" }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
      variants={{
        visible: { x: 0 },
        hidden: { x: -200 },
      }}
      className="container section"
      id={id}
    >
      <div className="section-head">
        <h1 className="txt-primary inter-800">{title}</h1>
        <h4 className=" txt-gray fs-16">{subtitle}</h4>
      </div>
      {children}
    </motion.section>
  );
}
