import Card from "components/card";
import Section from "components/section";
import { MyWorkLinks } from "constants/MyWorksConst";
import "./portfolio.scss";
export default function Portfolio() {
  return (
    <Section title="Recent Works" subtitle="My Portfolio" id="portfolio">
      <div className="cards">
        {MyWorkLinks.map((item, key) => (
          <Card
            width="350px"
            height="auto"
            borderRadius="20px"
            padding="1rem"
            key={key}
            className="my-work-card"
          >
            <article className="my-work">
              <h2 className="txt-white jost-600">{item.title}</h2>
              <img src={item.img} alt={item.title} />
              <a
                href={item.link}
                className=" btn btn-outline btn-small"
                target="_blank"
                rel="noreferrer"
              >
                View more
              </a>
            </article>
          </Card>
        ))}
      </div>
    </Section>
  );
}
