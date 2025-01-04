import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "../src/components/Navbar/Navbar";
import Education from "../src/components/Education/Education";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Education></Education>
    </>
  );
}

export default App;
