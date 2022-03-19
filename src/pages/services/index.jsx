import { VerifyIcon } from "assets/icons";
import Card from "components/card";
import Section from "components/section";
import { ServiceItems } from "constants/ServicesConst";
import React from "react";
import "./services.scss";
export default function Services() {
  return (
    <Section title="What I Offer" subtitle="My Services">
      <div className="cards">
        {ServiceItems.map((item, key) => (
          <div className="service-card" key={key}>
            <Card borderRadius="20px" width="300px" height="300px">
              <div className="card-body">
                <div className="card-title">
                  {" "}
                  <VerifyIcon />{" "}
                  <h1 className="jost-600 fs-16 txt-white">{item.title}</h1>
                </div>
                <p className=" inter-400 txt-gray fs-16">{item.description}</p>
                <a href="#contact" className="btn btn-outline card-button">
                  {" "}
                  Contact Me
                </a>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
