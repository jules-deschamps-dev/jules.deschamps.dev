import React from "react";
import Rate from "./Rate";

const Skills = () => {
  let path = "./img/icons/";
  let skillsListFront = [
    { language: "HTML", derivated: "JSX", url: "html5.webp" },
    { language: "CSS", derivated: "Sass", url: "css3.webp" },
    { language: "JavaScript", url: "js-square.webp" },
    { language: "React", derivated: "Redux", url: "react.webp" },
  ];
  let skillsListBack = [
    { language: "NodeJS", url: "node.png" },
    { language: "MySQL", derivated: "Sequelize", url: "mysql.png" },
    { language: "MongoDB", derivated: "Mongoose", url: "mongodb.png" },
  ];
  let skillsListFuture = [
    { language: "Vue", level: 0 },
    { language: "Solidiity", level: 0 },
    { language: "Python", level: 1 },
  ];
  // Débutant, Initié, Intermediaire, Confirmé

  return (
    <div id="skills-container">
      <ul>
        <h2 className="skill-domain"> Front </h2>
        {skillsListFront.map((element, index) => {
          var className = "skill li" + index + "front";
          return (
            <li className={className} key={index}>
              <img src={path + element.url} alt={element.language} />
              {/*}<span className="margin"> {element.language} </span>{*/}
              {/*}<Rate rate={element.level} />{*/}
              <i>
                <span className="language">{element.language}</span>
                {element.derivated ? (
                  <span className="derivated">{element.derivated}</span>
                ) : (
                  ""
                )}
              </i>
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
              <img src={path + element.url} alt={element.language} />
              <i>
                <span className="language">{element.language}</span>
                {element.derivated ? (
                  <span className="derivated">{element.derivated}</span>
                ) : (
                  ""
                )}
              </i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
