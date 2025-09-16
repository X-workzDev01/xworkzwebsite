import React, { useState, useEffect } from "react";
import "./Team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";

export const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ombn.in/xworkz_api/getFaculties")
      .then((res) => {
        setTeamData(res.data.Faculties);
      })
      .catch((err) => {
        console.log(err);
        axios
          .get(
            "https://raw.githubusercontent.com/xworkzodc/JSON/master/Faculties.json"
          )
          .then((res) => {
            console.log("getting data from secondary source");
            setTeamData(res.data.Faculties);
          })
          .catch((err) => {
            console.log(err);
            setTeamData(teamData);
            console.log("getting data from third source");
          });
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
          modules={[Navigation, Scrollbar, A11y, FreeMode, Autoplay]}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
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
            1440: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          scrollbar={{ draggable: true }}
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
            <div className="team-loading">
              <p>Loading team members...</p>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};
