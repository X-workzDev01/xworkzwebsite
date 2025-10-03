import React, { useEffect } from "react";
import { Team } from "./Team";
import "./About.css";
import { Gallery } from "./Gallery";

export const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".fade-in, .slide-in, .zoom-in"
      );
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    const startCounters = () => {
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const target = counter.getAttribute("data-target");
        const isPercentage = target.includes("%");
        const numericValue = parseInt(target.replace(/[^0-9]/g, ""));
        // let count = 0;
        const duration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;

        const counterInterval = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const currentCount = Math.round(numericValue * progress);

          if (currentCount <= numericValue) {
            counter.textContent = isPercentage
              ? `${currentCount}%`
              : currentCount === numericValue
              ? `${currentCount}+`
              : currentCount;
          } else {
            clearInterval(counterInterval);
          }

          if (frame === totalFrames) {
            clearInterval(counterInterval);
          }
        }, frameDuration);
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector(".achievement-stats");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1>
              Transforming Careers Through <span>Excellence</span>
            </h1>
            <p className="hero-subtitle">
              Where passion for technology meets dedication to student success.
              We are professionals from the IT industry, committed to bridging
              the gap between academic learning and real-world demands.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-traditional" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="about-image col-12 col-lg-6 fade-in">
              <div className="image-container">
                <img
                  src="https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/Gallery/1.png"
                  alt="Team collaboration"
                  className="img-fluid rounded shadow"
                />
                <div className="image-overlay"></div>
              </div>
            </div>

            <div className="about-info col-12 col-lg-6 fade-in">
              <div className="section-tag">About Us</div>
              <h2>Enterprise Application Expertise Team</h2>
              <p>
                With over a decade of experience in training and placement, we
                pioneered innovative training models that balance theory with
                practical implementation.
              </p>
              <p>
                Our programs focus on cutting-edge technologies to prepare
                students for the evolving IT landscape.
              </p>
              <div className="highlight-box">
                <p>
                  "We don't just teach technology, we build careers with purpose
                  and vision."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container text-center">
          <div className="section-header fade-in">
            <div className="section-tag">Our Purpose</div>
            <h2>
              Our <span>Vision & Mission</span>
            </h2>
            <p className="subtitle">
              Driving innovation in education and career development
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 zoom-in">
              <div className="vision-card">
                <div className="icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.92.66 1.97 1.64h1.84c-.05-1.54-1.2-2.95-3.81-2.95-2.25 0-3.77 1.24-3.77 3.05 0 1.97 1.27 2.73 3.37 3.24 1.95.48 2.34 1.1 2.34 1.87 0 .77-.64 1.51-2.03 1.51-1.48 0-2.18-.64-2.28-1.64H8.04c.1 1.7 1.36 2.95 3.92 2.95 2.49 0 3.9-1.32 3.9-3.15 0-2.05-1.46-2.72-3.55-3.19z" />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the leading catalyst in bridging the gap between
                  academic learning and industry requirements, creating
                  tomorrow's technology leaders.
                </p>
              </div>
            </div>
            <div className="col-md-6 zoom-in">
              <div className="mission-card">
                <div className="icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To provide industry-relevant training that empowers students
                  with practical skills, confidence, and opportunities to excel
                  in their careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container text-center">
          <div className="section-header fade-in">
            <div className="section-tag">Our Foundation</div>
            <h2>
              Our <span>Core Values</span>
            </h2>
            <p className="subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 zoom-in">
              <div className="value-card">
                <div className="value-icon excellence"></div>
                <h4>Excellence</h4>
                <p>
                  We strive for the highest standards in training and outcomes.
                </p>
              </div>
            </div>
            <div className="col-md-3 zoom-in">
              <div className="value-card">
                <div className="value-icon innovation"></div>
                <h4>Innovation</h4>
                <p>
                  Continuously evolving our methods to stay ahead of industry
                  trends.
                </p>
              </div>
            </div>
            <div className="col-md-3 zoom-in">
              <div className="value-card">
                <div className="value-icon integrity"></div>
                <h4>Integrity</h4>
                <p>
                  Building trust through transparency and ethical practices.
                </p>
              </div>
            </div>
            <div className="col-md-3 zoom-in">
              <div className="value-card">
                <div className="value-icon community"></div>
                <h4>Community</h4>
                <p>
                  Creating a supportive environment where everyone grows
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="training-philosophy">
        <div className="container text-center">
          <div className="section-header fade-in">
            <div className="section-tag">Our Approach</div>
            <h2>
              Our <span>Training Philosophy</span>
            </h2>
            <p className="subtitle">
              Learning by doing, growing by challenging
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 zoom-in">
              <div className="philosophy-card">
                <div className="philosophy-icon">✓</div>
                <h4>Industry-Relevant Curriculum</h4>
                <p>Designed with input from industry experts</p>
              </div>
            </div>
            <div className="col-md-3 zoom-in">
              <div className="philosophy-card">
                <div className="philosophy-icon">✓</div>
                <h4>Hands-On Projects</h4>
                <p>Real-world applications for practical skills</p>
              </div>
            </div>
            <div className="col-md-3 zoom-in">
              <div className="philosophy-card">
                <div className="philosophy-icon">✓</div>
                <h4>Personalized Mentorship</h4>
                <p>One-on-one guidance from professionals</p>
              </div>
            </div>
            <div className="col-md-3 zoom-in">
              <div className="philosophy-card">
                <div className="philosophy-icon">✓</div>
                <h4>Career Support</h4>
                <p>Placement assistance & career counseling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      {/* Team Section - Integrated */}
      <section className="team-integrated">
        <div className="container">
          <Team />
        </div>
      </section>

      {/* Achievements */}
      <section className="achievement-stats">
        <div className="container">
          <div className="section-header slide-in left">
            <div className="section-tag">Our Impact</div>
            <h2>
              Our <span>Achievements</span>
            </h2>
          </div>
          <div className="stats-container">
            <div className="stat-card zoom-in">
              <div className="stat-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3 className="counter" data-target="1000+">
                0
              </h3>
              <p>Students Trained</p>
            </div>
            <div
              className="stat-card zoom-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="stat-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3 className="counter" data-target="95%">
                0%
              </h3>
              <p>Placement Rate</p>
            </div>
            <div
              className="stat-card zoom-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="stat-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="counter" data-target="50+">
                0
              </h3>
              <p>Industry Partners</p>
            </div>
            <div
              className="stat-card zoom-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="stat-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3 className="counter" data-target="10+">
                0
              </h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
