import "../Navbar/Navbar.css";

function Navbar() {
  const handleScrollToContact = (e, target) => {
    e.preventDefault();
    const contactSection = document.getElementById(target);
    const headerHeight = document.querySelector(".mainDiv")?.offsetHeight || 75;

    if (contactSection) {
      const contactSectionTop =
        contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: contactSectionTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mainDiv">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 nav-pad">
        <div className="container-fluid">
          <a
            className="navbar-brand IBM-font"
            href="#"
            style={{ color: "#9C9C9C" }}
          >
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item IBM-font">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "#9C9C9C" }}
                  onClick={(e) => handleScrollToContact(e, "edu")}
                >
                  Education
                </a>
              </li>
              <li className="nav-item IBM-font">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "#9C9C9C" }}
                  onClick={(e) => handleScrollToContact(e, "skills")}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item IBM-font">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "#9C9C9C" }}
                  onClick={(e) => handleScrollToContact(e, "projects")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item IBM-font">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "#9C9C9C" }}
                  onClick={(e) => handleScrollToContact(e, "certifications")}
                >
                  Certifications
                </a>
              </li>
              <li className="nav-item IBM-font">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "#9C9C9C" }}
                  onClick={(e) => handleScrollToContact(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
