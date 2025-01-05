import "../Navbar/Navbar.css";

function Navbar() {
  const handleScrollToContact = (e, target) => {
    e.preventDefault();
    const contactSection = document.getElementById(target);
    const headerHeight = document.querySelector("mainDiv")?.offsetHeight || 75;

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
      <nav className="navbar navbar-expand-lg IBM-font px-5 nav-pad">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "#9C9C9C" }}>
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
        </div>
        <div className="collapse navbar-collapse px-4" id="navbarNav">
          <ul className="navbar-nav" style={{ paddingRight: "1px" }}>
            <li className="nav-item list">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "#9C9C9C" }}
                onClick={(e) => handleScrollToContact(e, "edu")}
              >
                Education
              </a>
            </li>
            <li className="nav-item list">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "#9C9C9C"}}
                onClick={(e) => handleScrollToContact(e, "skills")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item list">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "#9C9C9C" }}
                onClick={(e) => handleScrollToContact(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item list">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "#9C9C9C" }}
                onClick={(e) => handleScrollToContact(e, "certifications")}
              >
                Certifications
              </a>
            </li>
            <li className="nav-item list">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "#9C9C9C" }}
                onClick={(e) => handleScrollToContact(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
