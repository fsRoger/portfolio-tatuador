
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Depositions from "./components/Depositions/Depositions";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Depositions />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
