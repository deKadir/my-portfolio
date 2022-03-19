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
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and ui . Ux design, delivering quality
            work
          </p>
          <a href="#contact" className="btn btn-secondary">
            Contact me
          </a>
        </div>
      </div>
    </Section>
  );
}
