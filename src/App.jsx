import "./App.css";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
