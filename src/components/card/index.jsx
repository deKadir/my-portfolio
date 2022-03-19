import React from "react";
import "./card.scss";
export default function Card({
  children,
  borderRadius = 0,
  width = "auto",
  height = "auto",
  padding = "24px",
  className = "",
}) {
  return (
    <div
      style={{ borderRadius: borderRadius, width, height, padding }}
      className={`${className} card bg-secondary`}
    >
      {children}
    </div>
  );
}
