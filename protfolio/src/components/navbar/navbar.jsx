import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <div>
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
          <ul className="navbar-nav" style={{ paddingRight: "50px" }}>
            <li className="nav-item list">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "#9C9C9C" }}
              >
                Education
              </a>
            </li>
            <li className="nav-item list">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "#9C9C9C" }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item list">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "#9C9C9C" }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item list">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "#9C9C9C" }}
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
