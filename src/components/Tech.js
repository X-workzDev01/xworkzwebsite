import React from "react";
import "./Tech.css";

// GitHub image URLs
const spring =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/spring.png";
const java =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/java.png";
const mySql =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/mysql.png";
const angular =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/angular.png";
const html =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/html.png";
const css =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/css.png";
const hibernate =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/hibernate.png";
const javaScript =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/javaScript.png";
const git =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/git.png";
const python =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/python.png";
const genAi =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/genai.png";
const springAi =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/springai.png";
const jquery =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/jquery.png";
const bootstrap =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/bootstrap.png";
const django =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/django.png";
const flask =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/flask.png";
const datajpa =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/datajpa.png";

export const Tech = () => {
  const technologies = [
    { name: "Angular", icon: angular },
    { name: "Generative AI", icon: genAi },
    { name: "Java", icon: java },
    { name: "Spring Framework", icon: spring },
    { name: "Spring AI", icon: springAi },
    { name: "Data JPA", icon: datajpa },
    { name: "MySQL", icon: mySql },
    { name: "Hibernate", icon: hibernate },
    { name: "Python", icon: python },
    { name: "Django", icon: django },
    { name: "Flask", icon: flask },
    { name: "JavaScript", icon: javaScript },
    { name: "jQuery", icon: jquery },
    { name: "HTML5", icon: html },
    { name: "CSS3", icon: css },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Git", icon: git },
  ];

  return (
    <div className="skill-inner">
      <div className="heading text-center">
        <h2>
          We
          <span> Teach</span>
        </h2>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          {technologies.map((tech, index) => (
            <div className="skill-box" key={index}>
              <div className="skill-title">
                <div className="skill-img">
                  <img src={tech.icon} className="skill-icon" alt={tech.name} />
                </div>
                <h3>{tech.name}</h3>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {technologies.map((tech, index) => (
            <div className="skill-box" key={`duplicate-${index}`}>
              <div className="skill-title">
                <div className="skill-img">
                  <img src={tech.icon} className="skill-icon" alt={tech.name} />
                </div>
                <h3>{tech.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};