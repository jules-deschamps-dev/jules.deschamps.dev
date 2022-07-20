import React from "react";
import Rate from "./Rate";

const Skills = () => {
  let skillsListFront = [
    { language: "HTML", level: 5 },
    { language: "CSS", level: 3 },
    { language: "JS", level: 2 },
    { language: "React", level: 2 },
  ];
  let skillsListBack = [
    { language: "NodeJS", level: 2 },
    { language: "MySQL", level: 1 },
    { language: "MongoDB", level: 1 },
  ];
  let skillsListFuture = [
    { language: "Vue", level: 0 },
    { language: "Solidiity", level: 0 },
    { language: "Python", level: 1 },
  ];
  // Débutant, Initié, Intermediaire, Confirmé

  return (
    <div className="skills-container">
      <ul>
        <h2 className="skill-domain"> Front </h2>
        {skillsListFront.map((element, index) => {
          var className = "skill li" + index + "front";
          return (
            <li className={className} key={index}>
              <span className="margin"> {element.language} </span>
              <Rate rate={element.level} />
            </li>
          );
        })}
      </ul>

      <ul className="skills-list-back">
        <h2 className="skill-domain"> Back </h2>
        {skillsListBack.map((element, index) => {
          var className = "skill li" + index + "back";
          return (
            <li className={className} key={index}>
              <span className="margin"> {element.language} </span>
              <Rate rate={element.level} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
