import React from "react";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div style={{ 
      marginTop: "10px", 
      marginBottom: "10px",
      borderRadius: "5px",
      padding: "8px 0"
    }}>
      <Marquee
        pauseOnHover={true}
        play={true}
        speed={70}
        gradient={true}
        gradientWidth={100}
      >
        <span
          style={{
            color: "#f0094a",
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Lato, sans-serif",
            padding: "0 40px",
          }}
        >
          <i className="fas fa-briefcase" style={{ marginRight: "8px" }}></i>
          Kickstart your career with our CSR Internship 2026! Exclusively for upcoming 
          2026 graduates from any stream. Registration for Offline Classes — HURRY UP! •
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <i className="fas fa-rocket" style={{ marginRight: "8px" }}></i>
          Free Java Full Stack Class for 2 Month! Open for graduates from any stream. 
          Registration open for Offline Classes — HURRY UP! •
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </Marquee>
    </div>
  );
};

export default Banner;