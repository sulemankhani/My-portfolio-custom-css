import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <About/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}
