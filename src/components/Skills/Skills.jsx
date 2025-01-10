import "../Skills/Skills.css";

import java from "../../assets/photos/skills/java.png";
import python from "../../assets/photos/skills/python.png";
import JavaScript from "../../assets/photos/skills/js.png";

import HTML from "../../assets/photos/skills/html.png";
import CSS from "../../assets/photos/skills/css.png";
import React from "../../assets/photos/skills/react.png";
import Bootstrap from "../../assets/photos/skills/bootstrap.png";
import Tailwind from "../../assets/photos/skills/tailwind.png";
import Es6 from "../../assets/photos/skills/es6.png";
import MaterialUI from "../../assets/photos/skills/mui.png";
import Node from "../../assets/photos/skills/node-js.png";

import SpringBoot from "../../assets/photos/skills/springboot.png";
import mongodb from "../../assets/photos/skills/mongodb.png";

import Mysql from "../../assets/photos/skills/mysql.png";

import VScode from "../../assets/photos/skills/vscode.png";
import Intelij from "../../assets/photos/skills/intelij.png";
import GIT from "../../assets/photos/skills/git.png";
import Postman from "../../assets/photos/skills/postman.png";
import Eclipse from "../../assets/photos/skills/eclipse.png";
import Rest from "../../assets/photos/skills/rest_api.png";

const Skills = () => {
  const SKILLS = {
    Programming: [
      {
        name: "Java",
        image: java,
      },
      {
        name: "Python",
        image: python,
      },
      {
        name: "JavaScript",
        image: JavaScript,
      },
    ],
    Frontend: [
      {
        name: "HTML",
        image: HTML,
      },
      {
        name: "CSS",
        image: CSS,
      },
      {
        name: "React",
        image: React,
      },
      {
        name: "Bootstrap",
        image: Bootstrap,
      },
      {
        name: "TailwindCSS",
        image: Tailwind,
      },
      {
        name: "MaterialUI",
        image: MaterialUI,
      },
      {
        name: "ES6",
        image: Es6,
      },
    ],
    Backend: [
      {
        name: "RestApi",
        image: Rest,
      },
      {
        name: "Node",
        image: Node,
      },
      {
        name: "Spring",
        image: SpringBoot,
      },
    ],
    Tools: [
      {
        name: "VsCode",
        image: VScode,
      },
      {
        name: "Postman",
        image: Postman,
      },
      {
        name: "Git",
        image: GIT,
      },
      {
        name: "Eclipse",
        image: Eclipse,
      },
      {
        name: "Intelij",
        image: Intelij,
      },
    ],
    Databases: [
      {
        name: "Mysql",
        image: Mysql,
      },
      {
        name: "mongodb",
        image: mongodb,
      },
    ],
  };

  return (
    <section id="skills" className="container my-5">
      <h5 className="text-primary text-center mb-4 IBM-font skill-head">
        Skills
      </h5>

      <div
        className="p-4 rounded border border-primary"
        style={{ backgroundColor: "#172452" }}
      >
        <div className="row">
          {Object.keys(SKILLS).map((category) => (
            <div
              key={category}
              className={`mb-3 col-12 ${
                category === "Databases" ? "col-md-12" : "col-md-6"
              }`}
            >
              <h3 className="text-white text-center font-weight-bold mb-5 raleway-font">
                {category}:
              </h3>

              <div className="d-flex flex-wrap justify-content-center">
                {SKILLS[category].map((skill) => (
                  <div
                    key={skill.name}
                    className="position-relative group p-2 m-2 rounded shadow-lg hover:shadow-xl transition-shadow img-col"
                  >
                    <img src={skill.image} alt={skill.name} className="pic" />
                    <div className="position-absolute left-50 translate-middle-x top-100 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white bg-black text-sm py-1 px-2 rounded shadow-md">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
