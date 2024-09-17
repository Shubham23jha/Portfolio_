import React from "react";
import webprojects from "../Data/webproject.json";
import researches from "../Data/research.json";
import leadership from "../Data/leadership.json";
import "../styles/Experience.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

function Experience() {
  const renderWebProjects = () => {
    return webprojects.map((project, index) => (
      <div key={index} className="card">
        <img src={project.thumbnail} alt={project.title} />
        <div className="card-body">
          <h5 className="card-title text-gray-400">
            {project.title}
            <span className="text-status m-0 p-0 font-extralight text-lime-500">
              [{project.status}]
            </span>
          </h5>
          <p className="card-text">{project.description}</p>
          <a
            href={project.link}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        </div>
      </div>
    ));
  };

  const renderResearches = () => {
    return researches.map((research, index) => (
      <div key={index} className="card">
        <div className="card-body">
          <h5 className="card-title text-gray-400">{research.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted text-blue-300">
            {research.subtitle}
          </h6>
          <p className="card-text">{research.description}</p>
          <p className="">
            <strong>Status:</strong> {research.status}
          </p>
        </div>
      </div>
    ));
  };

  const renderLeadership = () => {
    return leadership.map((leader, index) => (
      <div key={index} className="card">
        <div className="card-body">
          <img
            src={leader.logo}
            alt={leader.title}
            className="leadership-logo"
          />
          <h5 className="card-title text-gray-400">{leader.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted text-blue-300">
            Term: {leader.start_date} - {leader.end_date}
          </h6>
          <p className="card-text">{leader.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="experience-container">
      <div className="horizontal-container">
        <div className="card-container">
          <h1 className="text-gray-600">FullStack Projects</h1>
          <div className="scrollable-cards">{renderWebProjects()}</div>
        </div>

        <div className="card-container">
          <h1 className="text-gray-600">Research And Publications</h1>
          <div className="scrollable-cards">{renderResearches()}</div>
        </div>

        <div className="card-container">
          <h1 className="text-gray-600">Work Experience</h1>
          <div className="scrollable-cards">{renderLeadership()}</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
