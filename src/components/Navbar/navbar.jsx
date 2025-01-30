import { useState, useEffect, useRef } from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/Logo/image.png";
import nav from "../../assets/photos/nav/menu-bar.png";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const navbarTogglerRef = useRef(null);

  const handleScrollToContact = (e, target) => {
    e.preventDefault();
    const contactSection = document.getElementById(target);

    // Adjust offset based on screen width
    const isMobileView = window.innerWidth <= 576;
    const headerHeight = isMobileView ? 80 : 75;

    if (contactSection) {
      const contactSectionTop =
        contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: contactSectionTop - headerHeight,
        behavior: "smooth",
      });
    }

    setActiveLink(target);
    setIsNavbarOpen(false);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleClickOutside = (event) => {
    if (
      isNavbarOpen &&
      navbarTogglerRef.current &&
      !navbarTogglerRef.current.contains(event.target)
    ) {
      const navbar = document.querySelector(".navbar-collapse");
      if (navbar && !navbar.contains(event.target)) {
        setIsNavbarOpen(false);
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setActiveLink("");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsNavbarOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavbarOpen]);

  return (
    <div className="mainDiv mont-font">
      <nav className="navbar navbar-expand-lg px-5 nav-pad">
        <div className="container-fluid">
          <a
            className="navbar-brand mont-font"
            href="#"
            style={{ color: "#9C9C9C" }}
            onClick={handleLogoClick}
          >
            <img src={logo} alt="logo-rajnish" className="logo-rajnish" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            ref={navbarTogglerRef}
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
          >
            <img src={nav} alt="nav" className="nav-logo" />
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "edu" ? "active" : ""}`}
                  href="#"
                  style={{ color: "#9C9C9C" }}
                  onClick={(e) => handleScrollToContact(e, "edu")}
                >
                  Education
                </a>
              </li>
              <li className="nav-item mont-font">
                <a
                  className={`nav-link ${
                    activeLink === "skills" ? "active" : ""
                  }`}
                  href="#"
                  style={{ color: "#9C9C9C" }}
                  onClick={(e) => handleScrollToContact(e, "skills")}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item mont-font">
                <a
                  className={`nav-link ${
                    activeLink === "projects" ? "active" : ""
                  }`}
                  href="#"
                  style={{ color: "#9C9C9C" }}
                  onClick={(e) => handleScrollToContact(e, "projects")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item mont-font">
                <a
                  className={`nav-link ${
                    activeLink === "certifications" ? "active" : ""
                  }`}
                  href="#"
                  style={{ color: "#9C9C9C" }}
                  onClick={(e) => handleScrollToContact(e, "certifications")}
                >
                  Certifications
                </a>
              </li>
              <li className="nav-item mont-font">
                <a
                  className={`nav-link ${
                    activeLink === "blog" ? "active" : ""
                  }`}
                  href="#"
                  style={{ color: "#9C9C9C" }}
                  onClick={(e) => handleScrollToContact(e, "blog")}
                >
                  Blog
                </a>
              </li>
              <li className="nav-item mont-font">
                <a
                  className={`nav-link ${
                    activeLink === "contact" ? "active" : ""
                  }`}
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
