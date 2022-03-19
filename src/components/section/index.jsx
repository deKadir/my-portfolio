import React from "react";
import "./section.scss";
export default function Section({ children, title, subtitle, id = "" }) {
  return (
    <section className="container section" id={id}>
      <div className="section-head">
        <h1 className="txt-primary inter-800">{title}</h1>
        <h4 className=" txt-gray fs-16">{subtitle}</h4>
      </div>
      {children}
    </section>
  );
}
