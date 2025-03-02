import "./Blog.css";

import API from "../../assets/Blogs/API.png";
import learningWhileCoding from "../../assets/Blogs/learning-while-coding.jpg";
import riseOfLowCode from "../../assets/Blogs/rise-of-low-code.jpg";
import browserUse from "../../assets/Blogs/browser-use.png";

import { CiShare1 } from "react-icons/ci";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Power of APIs in Modern Software Development",
      date: "Jan 26, 2025",
      image: API,
      url: "https://dev.to/rajnishjaisankar/the-power-of-apis-in-modern-software-development-5cf6",
    },
  ];

  const sideBlogs = [
    {
      id: 2,
      title: "Learning While Building: The Best Way to Master Coding",
      date: "Jan 29, 2025",
      image: learningWhileCoding,
      url: "https://dev.to/rajnishjaisankar/learning-while-building-the-best-way-to-master-coding-2p83",
    },
    {
      id: 3,
      title: "The Rise of Low-Code & No-Code: Should Developers Be Worried?",
      date: "Feb 08, 2025",
      image: riseOfLowCode,
      url: "https://dev.to/rajnishjaisankar/the-rise-of-low-code-no-code-should-developers-be-worried-4ghh",
    },
    {
      id: 4,
      title:
        "Exploring Browser Use Agent: The Future of AI-Powered Web Automation",
      date: "March 02, 2025",
      image: browserUse,
      url: "https://dev.to/rajnishjaisankar/exploring-browser-use-agent-the-future-of-ai-powered-web-automation-3gkd",
    },
  ];

  return (
    <div
      className="blog-section mont-font text-light"
      id="blog"
      style={{
        backgroundColor: "#1c2430",
        marginBottom: "200px",
      }}
    >
      <div className="text-center">
        <p className="text-uppercase text-primary fw-bold our-blog">Blog</p>
      </div>

      <div className="row mt-4">
        {/* Main Blog */}
        <div className="col-lg-7">
          <div className="main-blog-card">
            <a href={blogs[0].url} target="_blank" rel="noopener noreferrer">
              <img src={blogs[0].image} alt="Main Blog" />
            </a>

            <p className="blog-date mt-2 text-primary">{blogs[0].date}</p>
            <h4 className="blog-text">{blogs[0].title}</h4>
            <p>
              APIs enable seamless communication between applications,
              integrating web, mobile, and third-party services. They break
              silos, ensuring smooth interoperability and enhancing
              functionality across digital systems.
            </p>
          </div>
        </div>

        {/* Side Blogs */}
        <div className="col-lg-5">
          {sideBlogs.map((blog) => (
            <div key={blog.id} className="small-blog">
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={blog.image}
                  alt={`Blog ${blog.id}`}
                  style={{
                    width: "250px",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginLeft: "20px",
                  }}
                />
              </a>
              <div>
                <p className="blog-date text-primary">{blog.date}</p>
                <p className="fw-bold">{blog.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See More Button */}
      <div className="see-more">
        <a
          href="https://dev.to/rajnishjaisankar"
          className="bg-primary"
          target="_blank"
        >
          <div className="view">
            <div>
              <CiShare1 />
            </div>
            <div className="mx-2">View More</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blog;
