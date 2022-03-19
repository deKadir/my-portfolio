import Card from "components/card";
import Section from "components/section";
import { Experiences } from "constants/ExperienceConst";
import "./experience.scss";
export default function Experience() {
  return (
    <div>
      <Section title="My Experience" subtitle="My Abilities" id="experience">
        <div className="cards">
          {Experiences.map((experience, index) => {
            return (
              <div className="skill-card" key={index}>
                <Card borderRadius="20px" width="300px" height="300px">
                  <h4 className="txt-white">{experience.title}</h4>
                  <p className="txt-gray fs-14">{experience.description}</p>
                  {experience.skills.map((skill, key) => (
                    <div className="skill" key={key}>
                      <div className="skill-info">
                        <h1 className="txt-white fs-14">{skill.name}</h1>
                        <p className="txt-gray fs-14">
                          {skill.percentage + "%"}
                        </p>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="fill"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </Card>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
