import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "../src/components/Navbar/Navbar";
import Education from "../src/components/Education/Education";
import Skills from "../src/components/Skills/Skills";
import Footer from "../src/components/Footer/Footer";
import Contact from "../src/components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Education></Education>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
