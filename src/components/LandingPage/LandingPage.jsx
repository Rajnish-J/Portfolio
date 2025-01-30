import "../LandingPage/LandingPage.css";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import profilePic from "../../assets/photos/profile/4.jpg";
import Resume from "../../assets/Certficates/resume/Rajnish_Resume.pdf";
import codechef from "../../assets/photos/landingpage/codechef.jpg";
import { FaGithubSquare, FaLinkedin, FaHackerrank } from "react-icons/fa";
import axios from "axios";

const GITHUB_ACCESS = import.meta.env.VITE_GITHUB_ACCESS;
const GITHUB_USERNAME = "Rajnish-J";
const DEVTO_USERNAME = "rajnishjaisankar";

function LandingPage() {
  const [githubCommits, setGithubCommits] = useState(0);
  const [devBlogs, setDevBlogs] = useState(0);
  const [problemsSolved] = useState(1120);

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          {
            headers: {
              Authorization: `Bearer ${GITHUB_ACCESS}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!reposResponse.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const repos = await reposResponse.json();
        let totalCommits = 0;

        const commitPromises = repos.map(async (repo) => {
          try {
            const commitsUrl = repo.commits_url.replace("{/sha}", "");
            const commitsResponse = await fetch(commitsUrl, {
              headers: {
                Authorization: `Bearer ${GITHUB_ACCESS}`,
                Accept: "application/vnd.github.v3+json",
              },
            });

            if (commitsResponse.ok) {
              const commits = await commitsResponse.json();
              return commits.length;
            }
          } catch (error) {
            console.error(`Error fetching commits for ${repo.name}:`, error);
          }
          return 0;
        });

        const commitCounts = await Promise.all(commitPromises);
        totalCommits = commitCounts.reduce((sum, count) => sum + count, 0);

        setGithubCommits(totalCommits);
      } catch (error) {
        console.error("Error in GitHub stats API:", error);
        setGithubCommits(0);
      }
    }

    async function fetchDevBlogs() {
      try {
        let allBlogs = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await axios.get(
            `https://dev.to/api/articles?username=${DEVTO_USERNAME}&page=${page}&per_page=10`
          );

          if (response.data.length > 0) {
            allBlogs = [...allBlogs, ...response.data];
            page++;
          } else {
            hasMore = false;
          }
        }

        setDevBlogs(allBlogs.length);
      } catch (error) {
        console.error("Error fetching Dev.to blogs:", error);
        setDevBlogs(0);
      }
    }

    fetchGithubStats();
    fetchDevBlogs();
  }, []);

  return (
    <div className="container-fluid text-white landing-page">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 text-md-start">
            <h1 className="mont-font">
              Hi, I am{" "}
              <TypeAnimation
                sequence={["Rajnish 👋", 1000]}
                wrapper="span"
                speed={50}
                className="text-primary"
                repeat={Infinity}
              />
              <br />
              <span className="text-primary" style={{ fontSize: "25px" }}>
                FullStack Developer
              </span>
            </h1>
            <p className="mont-font-light text-left abt-cont">
              Driven IT fresher skilled in Java, JavaScript, and front-end
              development. Committed to continuous growth, eager to learn from
              experienced professionals, and contribute to impactful software
              solutions in a dynamic work environment.
            </p>
            <button
              className="btn btn-lg bg-primary"
              style={{ backgroundColor: "#62BA1B" }}
            >
              <a
                className="mont-font"
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black", textDecoration: "none" }}
              >
                Get Resume
              </a>
            </button>

            {/* Social Links with Icons */}
            <div className="mt-3">
              <div className="d-flex justify-content-left gap-2">
                <a
                  href="https://github.com/Rajnish-J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-light"
                >
                  <FaGithubSquare size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajnish-j-a749bb248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://www.codechef.com/users/rajnish10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  <img className="codechef-img" src={codechef} alt="codechef" />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/Rajnish_J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-success"
                >
                  <FaHackerrank size={30} />
                </a>
              </div>
            </div>

            {/* Stats Section for PC & Mobile */}
            <div className="mt-4 d-flex flex-wrap justify-content-center text-center mont-font stats-container">
              <div className="stat-box">
                <CountUp
                  className="text-primary"
                  start={0}
                  end={devBlogs}
                  duration={3}
                />
                <p>Blogs Posted</p>
              </div>
              <div className="stat-box">
                <CountUp
                  className="text-primary"
                  start={0}
                  end={problemsSolved}
                  duration={3}
                />
                <p>Problems Solved</p>
              </div>
              <div className="stat-box">
                <CountUp
                  className="text-primary"
                  start={0}
                  end={githubCommits}
                  duration={3}
                />
                <p>Code Commits</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-center">
            <div className="profile-pic-container">
              <img src={profilePic} alt="Profile" className="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
