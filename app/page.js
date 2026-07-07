import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import WhyChooseUs from "./components/WhyChooseUs";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Statistics />
      <WhyChooseUs />
      <Projects />
      <Certifications />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}