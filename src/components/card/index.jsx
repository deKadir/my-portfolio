import React from "react";
import "./card.scss";
import { motion } from "framer-motion";
export default function Card({
  children,
  borderRadius = 0,
  width = "auto",
  height = "auto",
  padding = "24px",
  className = "",
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      style={{ borderRadius: borderRadius, width, height, padding }}
      className={`${className} card bg-secondary`}
    >
      {children}
    </motion.div>
  );
}
