import React, { useState, useEffect } from "react";
import "./Course.css";
import axios from "axios";
import RegisterPopup from "./RegisterPopup"; 
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

const Course = ({ id }) => {  // Accept id as a prop
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [registerAction, setRegisterAction] = useState("enroll");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Use your GitHub raw JSON URL directly
        const response = await axios.get(
          "https://raw.githubusercontent.com/x-workzdev/xworkz-courses/main/Courses.json"
        );
        setCourses(response.data.Courses);
      } catch (error) {
        console.log("Failed to load courses from GitHub:", error);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleSyllabusClick = (courseName) => {
    setRegisterAction("syllabus");
    setRegisterOpen(true);
  };

  const handleEnrollClick = () => {
    setRegisterAction("enroll");
    setRegisterOpen(true);
  };

  if (loading) {
    return (
      <section className="courses" id={id}>
        <div className="container">
          <div className="heading text-center">
            <h2>Our <span>Courses</span></h2>
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
            <h2>Our <span>Courses</span></h2>
            <div className="error-message">
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="retry-btn">
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
            Comprehensive training programs designed by industry experts to launch your career in software development
          </p>
        </div>

        {courses && courses.length > 0 ? (
          <>
            <div className="course-container">
              {courses.map((course) => (
                <div className="course-card" key={course.id}>
                  <div className="course-header">
                    <div className="course-icon">
                      <img 
                        src={images[course.icon] || course.icon} 
                        alt={course.title}
                        onError={(e) => {
                          e.target.src = images['default-course.png'] || '/default-course.png';
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
                      onClick={() => handleSyllabusClick(course.title)}
                    >
                      Download Syllabus
                    </button>
                    <button 
                      className="enroll-btn"
                      onClick={handleEnrollClick}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <button 
                className="cta-button"
                onClick={handleEnrollClick}
              >
                View All Courses & Register
              </button>
            </div>
          </>
        ) : (
          <div className="no-courses text-center">
            <p>No courses available at the moment. Please check back later.</p>
          </div>
        )}

        {/* Register Popup Component */}
        <RegisterPopup 
          isOpen={isRegisterOpen} 
          onClose={() => setRegisterOpen(false)}
          actionType={registerAction}
        />
      </div>
    </section>
  );
};

export default Course;