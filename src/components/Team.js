import React, { useState, useEffect } from "react";
import "./Team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import axios from "axios";

export const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/Faculties.json"
      )
      .then((res) => {
        setTeamData(res.data.Faculties);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="team-section">
      <div className="container">
        <div className="team-header text-center">
          <h2>
            Our <span>Team</span>
          </h2>
          <p>Meet our experienced professionals and trainers</p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="team-swiper"
        >
          {teamData && teamData.length > 0 ? (
            teamData.map((d, i) => (
              <SwiperSlide key={i}>
                <div className="team-container">
                  <div className="main-card">
                    <div className="cards">
                      <div className="card">
                        <div className="content">
                          <div className="img">
                            <img src={d.imgSrc} alt={d.name} />
                          </div>
                          <div className="details">
                            <div className="name">{d.name}</div>
                            <div className="job">{d.designation}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="team-loading">
                <p>Loading team members...</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};