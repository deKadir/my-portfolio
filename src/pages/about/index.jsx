import "./about.scss";
import programmerAvatar from "assets/images/avatar_programmer.png";
import Section from "components/section";
export default function About() {
  return (
    <Section title="About Me" subtitle="My intro" id="about">
      <div className="about">
        <img
          src={programmerAvatar}
          alt="programmer-avatar"
          className="about-img"
        />
        <div className="about-content">
          <p className="txt-gray inter-500">
            Enthusiastic, open-minded <strong>MERN stack web developer</strong>{" "}
            , with knowledge of react, html, css, sass and node js.
          </p>
          <a href="#contact" className="btn btn-secondary">
            Contact me
          </a>
        </div>
      </div>
    </Section>
  );
}
