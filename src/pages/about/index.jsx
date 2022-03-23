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
            A computer engineering student and{" "}
            <strong>MERN Stack web developer</strong> with experience of Mongodb
            , Express js , React js , Node js for almost a year. Focused on
            learning new things and dedicated learner who tries to improve his
            coding skills. Flexible with new technologies and looking for a
            professional company for career opportunities.
          </p>
          <a href="#contact" className="btn btn-secondary">
            Contact me
          </a>
        </div>
      </div>
    </Section>
  );
}
