import Card from "components/card";
import Section from "components/section";
import "./contact.scss";

import { ContactLinks } from "constants/ContactConst";
export default function Contact() {
  return (
    <Section title="Contact Me" subtitle="Get in touch" id="contact">
      <div className="contact-icons">
        {ContactLinks.map((item, key) => (
          <Card borderRadius="20px" key={key}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <item.icon className="icon-32 icon-primary" />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}
