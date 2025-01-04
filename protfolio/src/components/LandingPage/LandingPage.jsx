import "../LandingPage/LandingPage.css";
import profilePic from "../../assets/photos/profile/4.jpg";
import Resume from "../../assets/Certficates/resume/Rajnish_Resume.pdf";

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
            <h1 className="raleway-font">Hi, I am Rajnish 👋</h1>
            <p className="IBM-font" style={{ color: "#9C9C9C" }}>
              Driven IT fresher skilled in Java, JavaScript, and front-end
              development. Committed to continuous growth, eager to learn from
              experienced professionals, and contribute to impactful software
              solutions in a dynamic work environment.
            </p>
            <button className="btn btn-lg btn-color" style={{backgroundColor: "#62BA1B"}}>
              <a
                className="IBM-font"
                href={Resume}
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                Get Resume ❤️
              </a>
            </button>
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
