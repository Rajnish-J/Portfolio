import "../Projects/Projects.css";

import pic1 from "../../assets/photos/projects/pic1.jpg";
import pic2 from "../../assets/photos/projects/pic2.png";
import pic3 from "../../assets/photos/projects/pic3.jpg";

import { VscGithubAlt } from "react-icons/vsc";
import { CiShare1 } from "react-icons/ci";

const Projects = () => {
  const projects = [
    {
      title: "Hospify",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Spring Boot", link: "https://spring.io/projects/spring-boot" },
        { name: "MySQL", link: "https://www.mysql.com/" },
        { name: "Rest API", link: "https://restfulapi.net/" },
        {
          name: "Spring Web",
          link: "https://docs.spring.io/spring-framework/docs/current/reference/html/web.html",
        },
        { name: "Bootstrap", link: "https://getbootstrap.com/" },
      ],
      githubLink: "https://github.com/Rajnish-J/Hospify---Training-project",
      demoLink: "",
      description:
        "A hospital appointment management system built with React and Spring Boot, allowing patients to book and manage appointments.",
      image: pic1,
      textColor: "white", // Custom text color
    },
    {
      title: "Guess My Number",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Bootstrap", link: "https://getbootstrap.com/" },
        {
          name: "CSS",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        { name: "Vite", link: "https://vitejs.dev/" },
      ],
      githubLink: "https://github.com/Rajnish-J/GuessNumber",
      demoLink: "https://guezz-the-number.netlify.app/",
      description:
        "An interactive number guessing game with a responsive UI, dynamic feedback, and a high score tracker.",
      image: pic2,
      textColor: "white",
    },
    {
      title: "Google Calendar - Clone",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Vite", link: "https://vitejs.dev/" },
        { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      ],
      githubLink: "https://github.com/Rajnish-J/Calendar-Clone",
      demoLink: "https://calendarmate.netlify.app/",
      description:
        "A Google Calendar clone with event management, a responsive UI, and an intuitive user experience.",
      image: pic3,
      textColor: "black",
    },
  ];

  return (
    <div id="projects" className="main-div">
      <h5 className="text-primary text-center mont-font pro-head">Projects</h5>
      <div
        id="carouselExampleIndicators"
        className="carousel slide bg-white"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {projects.map((_, index) => (
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

        {/* Carousel Items */}
        <div className="carousel-inner mont-font">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={project.image}
                className="d-block w-100 img-cont"
                alt={project.title}
              />
              <div className="carousel-caption">
                {/* Mobile View */}
                <div className="mobile-only">
                  <span
                    className="proj-title"
                    style={{ color: project.textColor }}
                  >
                    {project.title}
                  </span>
                  <div className="d-flex justify-content-center gap-3 mt-1">
                    <a
                      href={project.githubLink}
                      className="btn btn-primary code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="git-logo">
                        <VscGithubAlt />
                        <div>View Source</div>
                      </div>
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        className="btn btn-primary demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="view">
                          <CiShare1 />
                          <div>Live Demo</div>
                        </div>
                      </a>
                    )}
                  </div>
                </div>

                {/* Desktop View */}
                <div className="desktop-only">
                  <span
                    className="proj-title"
                    style={{ color: project.textColor }}
                  >
                    {project.title}
                  </span>
                  <div className="tech-main-div">
                    {project.technologies.map((tech, idx) => (
                      <button
                        key={idx}
                        className="badge m-1 tech-div btn bg-primary"
                        onClick={() => window.open(tech.link, "_blank")}
                      >
                        <div className="tech">{tech.name}</div>
                      </button>
                    ))}
                  </div>
                  <p
                    className="desc mont-font-light"
                    style={{ color: project.textColor }}
                  >
                    {project.description}
                  </p>
                  <a
                    href={project.githubLink}
                    className="btn btn-primary code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="git-logo">
                      <VscGithubAlt />
                      <div>View Source</div>
                    </div>
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="btn btn-primary ms-2 demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="view">
                        <CiShare1 />
                        <div>Live Demo</div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
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
