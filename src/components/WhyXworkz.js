import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./WhyXworkz.css";

const WhyXworkz = () => {
  const features = [
    {
      id: 1,
      title: "Mock Interview Training",
      description: "Get real-time interview practice with industry experts to boost your confidence",
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/56.jpeg"
    },
    {
      id: 2,
      title: "Best Trainers",
      description: "Learn from experienced professionals who are passionate about teaching",
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image17.jpeg"
    },
    {
      id: 3,
      title: "Technical Skills",
      description: "Master cutting-edge technologies used in modern software development",
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image20.jpg"
    },
    {
      id: 4,
      title: "Learn Application Development",
      description: "Build real-world applications from concept to deployment",
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image24.jpg"
    },
    {
      id: 5,
      title: "Guidance and Placements",
      description: "Comprehensive career support and placement assistance",
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image29.jpeg"
    },
    {
      id: 6,
      title: "Expert Mentors",
      description: "Get personalized guidance from industry veterans",
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image31.jpg"
    },
    {
      id: 7,
      title: "Career Guidance",
      description: "Strategic career planning and roadmap development",
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image32.jpg"
    },
    {
      id: 8,
      title: "Industry Relevant Projects",
      description: "Work on projects that mirror real industry challenges",
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image33.jpg"
    }
  ];

  return (
    <section className="why-xworkz" id="why-xworkz">
      <div className="container">
        <div className="heading text-center">
          <h2>
            Why
            <span> Xworkz</span>
          </h2>
          <p>
            Discover what makes our training program exceptional and why we're the right choice for your career growth
          </p>
        </div>
        
        <Carousel 
          interval={3000} 
          pause={false} 
          indicators={true} 
          controls={true}
          className="why-xworkz-carousel"
          nextIcon={<span aria-hidden="true" className="carousel-control-next-icon-custom">&gt;</span>}
          prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon-custom">&lt;</span>}
        >
          {features.map((feature) => (
            <Carousel.Item key={feature.id}>
              <div className="carousel-content">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <img
                      className="d-block w-100 carousel-image"
                      src={feature.image}
                      alt={feature.title}
                    />
                  </div>
                  <div className="col-12 col-lg-6 carousel-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default WhyXworkz;