import "../LandingPage/LandingPage.css";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../../assets/photos/profile/4.jpg";
import Resume from "../../assets/Certficates/resume/Rajnish_Resume.pdf";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHackerNews } from "react-icons/fa";

function LandingPage() {
  return (
    <div
      className="container-fluid text-white"
      style={{
        backgroundColor: "#000",
        height: "750px",
        marginBottom: "105px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{ paddingTop: "40px", paddingLeft: "100px" }}
      >
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="raleway-font">
              Hi, I am Rajnish 👋
              <br />
              <span style={{ fontSize: "25px", color: "#62BA1B" }}>
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
                  style={{ fontSize: "", display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="IBM-font" style={{ color: "#9C9C9C" }}>
              Driven IT fresher skilled in Java, JavaScript, and front-end
              development. Committed to continuous growth, eager to learn from
              experienced professionals, and contribute to impactful software
              solutions in a dynamic work environment.
            </p>
            <button
              className="btn btn-lg btn-color"
              style={{ backgroundColor: "#62BA1B" }}
            >
              <a
                className="IBM-font"
                href={Resume}
                target="_blank"
                style={{ color: "black", textDecoration: "none" }}
              >
                Get Resume ❤️
              </a>
            </button>

            {/* Social Links with Icons */}
            <div className="mt-5">
              <div className="d-flex justify-content-left gap-4">
                <a
                  href="https://www.linkedin.com/in/tshrihari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  <FaLinkedin size={40} />
                </a>
                <a
                  href="https://www.instagram.com/tshrihari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-danger"
                >
                  <FaInstagram size={40} />
                </a>
                <a
                  href="https://www.hackerrank.com/tshrihari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-success"
                >
                  <FaHackerNews size={40} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-center">
            <div
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "auto",
              }}
            >
              <img
                src={profilePic}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
