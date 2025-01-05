import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from "../src/components/Education/Education";
import Skills from "../src/components/Skills/Skills";
import Projects from "../src/components/Projects/Projects";
import Certifications from "../src/components/Certifications/Certifications";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Certifications></Certifications>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
