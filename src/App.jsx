import { Link, Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="blogs">
        <Blogs />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
