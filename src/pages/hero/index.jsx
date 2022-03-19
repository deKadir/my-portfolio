import hero_avatar from "assets/images/avatar_hello.png";
import "./hero.scss";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.div
      animate={
        {
          // x: 100,
        }
      }
      className="container hero-container"
    >
      <p className="jost-600 fs-16 txt-white">Hello I'm</p>
      <h1 className="txt-white ">Abdulkadir Develioğlu</h1>
      <span className="fs-16 txt-primary jost-600 txt-primary">
        Frontend Developer
      </span>
      <div className="hero-buttons">
        <button className="btn btn-outline">Download CV</button>
        <a href="#about" className="btn btn-secondary">
          About Me
        </a>
      </div>
      <img src={hero_avatar} alt="avatar" />
    </motion.div>
  );
}
