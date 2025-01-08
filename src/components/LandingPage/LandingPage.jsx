import "../LandingPage/LandingPage.css";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../../assets/photos/profile/4.jpg";
import Resume from "../../assets/Certficates/resume/Rajnish_Resume.pdf";
import codechef from "../../assets/photos/landingpage/codechef.jpg";
import { FaGithubSquare, FaLinkedin, FaHackerrank } from "react-icons/fa";

function LandingPage() {
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    const headerHeight = document.querySelector(".mainDiv")?.offsetHeight || 60;

    if (targetSection) {
      const targetPosition =
        targetSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container-fluid text-white landing-page">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 text-md-start">
            <h1 className="raleway-font">
              Hi, I am Rajnish 👋
              <br />
              <span className="text-primary" style={{ fontSize: "25px", color: "#62BA1B" }}>
                <TypeAnimation
                  sequence={[
                    "FullStack Developer",
                    1000,
                    "Frontend Developer",
                    1000,
                    "Backend Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="opacity-70 text-2xl"
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="IBM-font text-left" style={{ color: "#9C9C9C" }}>
              Driven IT fresher skilled in Java, JavaScript, and front-end
              development. Committed to continuous growth, eager to learn from
              experienced professionals, and contribute to impactful software
              solutions in a dynamic work environment.
            </p>
            <button
              className="btn btn-lg bg-primary"
              style={{ backgroundColor: "#62BA1B" }}
            >
              <a
                className="IBM-font"
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black", textDecoration: "none" }}
              >
                Get Resume
              </a>
            </button>

            {/* Social Links with Icons */}
            <div className="mt-3">
              <div className="d-flex justify-content-left gap-2">
                <a
                  href="https://github.com/Rajnish-J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-light"
                >
                  <FaGithubSquare size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajnish-j-a749bb248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://www.codechef.com/users/rajnish10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  <img className="codechef-img" src={codechef} alt="codechef" />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/Rajnish_J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-success"
                >
                  <FaHackerrank size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-center">
            <div className="profile-pic-container">
              <img src={profilePic} alt="Profile" className="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
