import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Course.css";
import axios from "axios";
import RegisterPopup from "./RegisterPopup";

// GitHub image URLs
const java =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/java.png";

const html =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/html.png";

const mySql =
  "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/techlogo/mysql.png";

const Course = ({ id }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/x-workzdev/xworkz-courses/develop/Courses.json"
        );

        const coursesWithGithubImages = response.data.Courses.map((course) => {
          let icon = course.icon;

          switch (course.icon) {
            case "java.png":
              icon = java;
              break;
            case "html.png":
              icon = html;
              break;
            case "mysql.png":
              icon = mySql;
              break;
            default:
              icon = course.icon;
          }

          return {
            ...course,
            icon,
          };
        });

        setCourses(coursesWithGithubImages);
      } catch (error) {
        console.log("Failed to load courses from GitHub:", error);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleSyllabusClick = (course) => {
    setSelectedCourse(course);
    setRegisterOpen(true);
  };

  if (loading) {
    return (
      <section className="courses" id={id}>
        <div className="container">
          <div className="heading text-center">
            <h2>
              Our <span>Courses</span>
            </h2>
            <div className="loading-spinner">Loading courses...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="courses" id={id}>
        <div className="container">
          <div className="heading text-center">
            <h2>
              Our <span>Courses</span>
            </h2>
            <div className="error-message">
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="retry-btn"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="courses" id={id}>
      <div className="container">
        <div className="heading text-center">
          <h2>
            Our
            <span> Courses</span>
          </h2>
          <p>
            Comprehensive training programs designed by industry experts to
            launch your career in software development
          </p>
        </div>

        {courses && courses.length > 0 ? (
          <div className="course-container">
            {courses.map((course) => (
              <div className="course-card" key={course.id}>
                <div className="course-header">
                  <div className="course-icon">
                    <img
                      src={course.icon}
                      alt={course.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/100x100?text=Course";
                      }}
                    />
                  </div>

                  <div className="course-meta">
                    <span className="duration">{course.duration}</span>
                    <span className="level">{course.level}</span>
                  </div>
                </div>

                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>

                  {course.features && course.features.length > 0 && (
                    <div className="course-features">
                      <h4>What You'll Learn:</h4>
                      <ul>
                        {course.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="course-footer">
                  <button
                    className="syllabus-btn"
                    onClick={() => handleSyllabusClick(course)}
                  >
                    Download Syllabus
                  </button>

                  <Link to="/register" className="enroll-btn">
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-courses text-center">
            <p>No courses available at the moment. Please check back later.</p>
          </div>
        )}

        <RegisterPopup
          isOpen={isRegisterOpen}
          onClose={() => setRegisterOpen(false)}
          course={selectedCourse}
        />
      </div>
    </section>
  );
};

export default Course;