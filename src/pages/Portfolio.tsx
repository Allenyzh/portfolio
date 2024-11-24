import Allen from "../assets/allen.jpg";
import BadgeStyle from "../components/BadgeStyle";
import TagLabel from "../components/TagLabel";
import BubbleSort from "../assets/bubbleSort.png";
import Contact from "../assets/contact.png";
import Dpic from "../assets/picture.png";
import clsx from "clsx";
import { useState, useEffect } from "react";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Bubble Sort animation",
    description: "An animation demo of bubble soty",
    tags: ["HTML", "JavaScript", "jquery"],
    img: BubbleSort,
  },
  {
    id: 2,
    title: "Simple Item Management",
    description: "A simple backend server with Express.js ",
    tags: ["HTML", "jquery", "Express.js"],
    img: Contact,
  },
  {
    id: 3,
    title: "Personal Website",
    description: "Personal website using React + Vite + Tailwind",
    tags: ["React", "TypeScript", "Vite", "Tailwind css"],
    img: null,
  },
];

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "jQuery",
  "C++",
  "Express.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Restful API",
];

export default function Portfolio() {
  const [currentTheme, setCurrentTheme] = useState<string | null>("");

  useEffect(() => {
    const getTheme = () => document.documentElement.getAttribute("data-theme");
    setCurrentTheme(getTheme());

    const observer = new MutationObserver(() => {
      setCurrentTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="hero bg-base-200 min-h-svh">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={Allen || "https://via.placeholder.com/150"}
            className=" rounded-lg shadow-2xl min-w-32 max-w-64"
          />
          <div>
            <h1
              className={clsx("text-3xl font-bold", {
                "text-orange-300": currentTheme === "dark",
                "text-orange-700": currentTheme === "nord",
              })}
            >
              My Name is
            </h1>
            <h1 className="text-5xl font-bold">Zhenhao Yang</h1>
            <p className="py-6">
              I'm a passionate Full-stack developer and Math Student at
              Concordia
            </p>
            <button className="btn btn-primary">
              <a href="#projects">Get Started</a>
            </button>
          </div>
        </div>
      </div>

      <section id="projects" className="mb-24 mt-24">
        <h2 className="text-2xl font-bold mb-4 mt-24">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card glass min-w-32 shadow-md project-link"
            >
              <figure>
                <img
                  src={project.img || Dpic}
                  alt="card!"
                  className="max-h-64"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="flex items-center pl-8 pb-4">
                <TagLabel p={2} />
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <BadgeStyle key={index} text={tag} theme="color" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <BadgeStyle key={index} text={skill} />
          ))}
        </div>
      </section>

      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-4">
          Feel free to reach out to me for any inquiries or collaboration
          opportunities.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Allenyzh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600"
          >
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              fill={clsx({
                white: currentTheme === "dark",
                currentColor: currentTheme === "nord",
              })}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/allenyzh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="w-6 h-6"
              fill={clsx({
                white: currentTheme === "dark",
                currentColor: currentTheme === "nord",
              })}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="mailto:allenyangzhenhao@gmail.com"
            className="text-gray-800 hover:text-blue-600"
          >
            <span className="sr-only">Email</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={clsx({
                white: currentTheme === "dark",
                currentColor: currentTheme === "nord",
              })}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
