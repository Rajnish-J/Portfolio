import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import "../Certifications/Certifications.css";

import java from "../../assets/Certficates/java_scaler.png";
import python from "../../assets/Certficates/Scaler_python.png";
import sql from "../../assets/Certficates/Sql_caler.png";
import NPTEL from "../../assets/Certficates/NPTEL.jpg";
import MAID from "../../assets/Certficates/MAID.jpg";
import problems from "../../assets/Certficates/500_problems_scaler.jpeg";

const MarqueeCardComponent = () => {
  // Array of content
  const contentArray = [
    {
      title: "Java certification",
      issuer: "Scaler",
      date: "11th February 2024",
      description:
        "I am excited to share that I have acquired the Java Scaler certifications! 🎉 <br/> This certification has been a great way to learn Java basics effectively. <br/> With the help of these courses, I was able to understand important concepts <br/> such as loops, variables, arrays, and functions. 🖥️ <br/> The program was well-structured and easy to follow, helping <br/> me build a strong foundation in Java programming. 🌱 <br/> The hands-on practice helped me gain confidence, and now I feel ready to take <br/> on more advanced topics. I'm looking forward to using what I've <br/> learned in real-world projects! 💻 If you're new to Java, I highly <br/> recommend starting with these certifications; they really make <br/> learning easier and more fun! 🚀",
      image: java,
    },
    {
      title: "Python certification",
      issuer: "Scaler",
      date: "25th September 2023",
      description:
        "I am excited to share that I have acquired the Python Scaler certification! 🎉 <br/> This certification has helped me learn the basics of Python programming effectively 🐍. <br/> I now feel more confident using important libraries like NumPy, <br/> pandas, and Matplotlib to handle data and create cool projects 📊. <br/> The step-by-step approach has made learning easier and more fun. <br/> With these new skills, I can solve problems faster and <br/> build more advanced applications 💻. It’s a great feeling to see my <br/> progress and be able to apply what I've learned in real-world scenarios 🚀!",
      image: python,
    },
    {
      title: "SQL certification",
      issuer: "Scaler",
      date: "28th September 2023",
      description:
        "I am happy to share that I have acquired SQL Scaler certifications! 🎉 This course <br/> helped me understand the basics of SQL in a simple and effective way. <br/> It taught me how to manage and query data, which is very important for any project. 🗃️ <br/> I now understand how to work with tables and why their structure is crucial for <br/> organizing and retrieving data. By learning the fundamentals, I can now write <br/> queries that are efficient and effective. It was a great learning <br/> experience that helped me become confident in using SQL for any project.📊",
      image: sql,
    },
    {
      title: "NPTEL - Python",
      issuer: "National Programme on Technology Enhanced Learning",
      date: "April 2023",
      description:
        "I am happy to share that I have acquired the NPTEL - Joy of Python certification! 🎉 <br/> This course helped me understand the basics of Python programming effectively. <br/> It covered important topics like variables, loops, and functions, <br/> which are essential for building a strong programming foundation. 🐍 <br/> Learning DSA (Data Structures and Algorithms) and problem-solving skills is <br/> key for any developer. 🧠 These skills help in writing <br/> efficient code, improving performance, and solving real-world problems. By mastering DSA, <br/> developers can handle complex tasks with ease and boost their <br/> career growth. 💪 It's a must-learn for anyone serious about coding! 💻",
      image: NPTEL,
    },
    {
      title: "MAID - paper presentation",
      issuer: "Panimalar Engineering college",
      date: "19th October 2022",
      description:
        "I am excited to announce that I have received my project certification for MAID <br/> (Materials and Items Dispenser) 🎉. This project taught me a lot about teamwork, <br/> decision-making, and being a key player in any task. 💪 Working with a <br/> team helped me understand how to collaborate effectively and share ideas 🤝. <br/> During tough moments, making quick and wise decisions was crucial 🕒. <br/> I learned that staying calm, focusing on the goal, <br/> and communicating clearly are key skills. This experience showed me how important <br/> it is to be reliable and supportive in a team 🌟. It’s a big step <br/> in my career, and I’m proud of what we achieved together!",
      image: MAID,
    },
    {
      title: "Difficulty rate: 500",
      issuer: "CodeChef",
      date: "19th January 2024",
      description:
        "I am happy to share that I have received a certificate for completing 500+ problems <br/> on CodeChef! 🎉 This achievement has really helped me strengthen my understanding <br/> of coding concepts and improve my problem-solving skills. 🧑‍💻 By solving these problems, <br/> I built a strong foundation in basic programming, which is essential for tackling <br/> Data Structures and Algorithms (DSA) challenges.💡With this experience, <br/>I feel more confident in solving complex coding problems and growing my knowledge. 💪 <br/> Looking forward to learning more and improving further! 🚀",
      image: problems,
    },
  ];
  return (
    <div
      id="certifications"
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Marquee
        fade={true}
        direction="left"
        reverse={true}
        pauseOnHover={true}
        className="text-dark raleway-font"
        innerClassName=""
      >
        {contentArray.map((item, index) => (
          <div
            key={index}
            style={{ margin: "0 50px", display: "inline-block" }}
          >
            <img src={item.image} alt={item.title} className="cert-image" />
            <h3>{item.title}</h3>
            <span>
              <strong>Issuer:</strong> {item.issuer}
            </span>
            <>
              <strong>Date:</strong> {item.date}
            </>
            <p
              dangerouslySetInnerHTML={{ __html: item.description }}
              style={{ whiteSpace: "pre-line" }} // Preserves line breaks
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeCardComponent;
