import { NavbarItems } from "constants/NavbarConst";
import "./footer.scss";
import Card from "components/card";
import { ContactLinks } from "constants/ContactConst";
export default function Footer() {
  return (
    <div className="footer bg-primary">
      <h1 className="txt-secondary">Abdulkadir Develioğlu</h1>
      <ul>
        {NavbarItems.map((item, key) => (
          <li key={key}>
            <a href={item.href} className="jost-600 txt-secondary fs-20">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="footer-icons">
        {ContactLinks.map((item, key) => (
          <Card borderRadius="15px" key={key} padding="12px">
            <a href={item.link} target="_blank" rel="noreferrer">
              {<item.icon className="icon-24 icon-primary" />}
            </a>
          </Card>
        ))}
      </div>
      <h4 className="txt-secondary">Coded By Abdulkadir Develioğlu </h4>
      <small className="txt-secondary">© JacksCo. All right reserved </small>
    </div>
  );
}
