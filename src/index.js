import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const skillsData = [
  {
    skill: "HTML",
    level: "advanced",
    color: "#ff5e00",
  },
  {
    skill: "CSS",
    level: "intermediate",
    color: "#61dafb",
  },
  {
    skill: "JavaScript ",
    level: "advanced",
    color: "#ffdd00",
  },
  {
    skill: "Bootstrap",
    level: "intermediate",
    color: "#8c00ff",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#0072bc",
  },
  {
    skill: "Redux",
    level: "beginner",
    color: "#006cff",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#000000",
  },
];

const emojy = {
  advanced: "😎",
  intermediate: "👍",
  beginner: "✌",
};

function App() {
  return (
    <div className="mainBox">
      <Description
        name="Roman Babayan"
        aboutMe="My name is Roma and i'm learning React and developing"
        photoName="img/RomaIMG.jpg"
      />
    </div>
  );
}

function Description(props) {
  return (
    <div className="discroption">
      <img className="faceImg" src={props.photoName} alt="" />
      <div className="me">
        <h1 className="name">{props.name}</h1>
        <h4 className="aboutMe">{props.aboutMe}</h4>
      </div>
      <Skills />
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="skill"
          style={{
            background: `linear-gradient(145deg, ${skill.color}, #e0e0e0)`,
          }}
        >
          {skill.skill} {emojy[skill.level]}
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
