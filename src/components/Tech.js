import React from "react";
import "./Tech.css";

// Import all your images
import spring from "../img/spring.png";
import java from "../img/java.png";
import mySql from "../img/mysql.png";
import angular from "../img/angular.png";
import html from "../img/html.png";
import css from "../img/css.png";
import hibernate from "../img/hibernate.png";
import javaScript from "../img/javaScript.png";
import git from "../img/git.png";
import python from "../img/python.png";
import genAi from "../img/gen-ai.png";
import springAi from "../img/spring-ai.png";
import jquery from "../img/jquery.png";
import bootstrap from "../img/bootstrap.png";
import django from "../img/django.png";
import flask from "../img/flask.png";
import datajpa from "../img/datajpa.png";

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