import Navbar from "components/navbar";
import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Footer from "./footer";
import Hero from "./hero";
import Portfolio from "./portfolio";
import Services from "./services";
export default function Pages() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
