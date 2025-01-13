import "../Projects/Projects.css";

import pic1 from "../../assets/photos/projects/pic1.jpg";
import pic2 from "../../assets/photos/projects/pic2.png";

import { VscGithubAlt } from "react-icons/vsc";

const Projects = () => {
  const projects = [
    {
      title: "Hospify",
      technologies: [
        "React",
        "Spring Boot",
        "MySql",
        "Rest API",
        "Spring Web",
        "Bootstrap",
      ],
      githubLink: "https://github.com/Rajnish-J/Hospify---Training-project",
      demoLink: "",
      description:
        "I developed a hospital appointment management system from the patient side using Spring for the backend and React for the frontend. The application allows patients to easily book, view, and manage appointments with healthcare providers.",
      image: pic1,
    },
    {
      title: "Guess My Number",
      technologies: ["React", "Bootstrap", "CSS", "Vite"],
      githubLink: "https://github.com/Rajnish-J/GuessNumber",
      demoLink: "https://guezz-the-number.netlify.app/",
      description:
        "Interactive 'Guess My Number' game built with React and Bootstrap, featuring responsive design, dynamic feedback and a highscore tracker for an engaging user experience.",
      image: pic2,
    },
  ];

  return (
    <div id="projects" className="main-div">
      {/* Link to project section in Navbar */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide bg-white"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {projects.map((project, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner raleway-font">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              {/* Set image size */}
              <img
                src={project.image}
                className="d-block w-100"
                alt={project.title}
                style={{ width: "800px", height: "800px", margin: "0 auto" }} // Added styling for 800x800 size
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>{project.title}</h2>
                <div>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="badge m-1 tech-div">
                      <div>{tech}</div>
                    </span>
                  ))}
                </div>
                <p className="desc">{project.description}</p>
                <a
                  href={project.githubLink}
                  className="btn btn-primary code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <VscGithubAlt />
                  </div>
                  <div>GitHub</div>
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="btn btn-primary ms-2 demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
