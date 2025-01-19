import { useState, useEffect } from "react";
import "./App.css";

import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPreloader ? (
        <Preloader />
      ) : (
        <>
          <Navbar 
          />
          <LandingPage />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
