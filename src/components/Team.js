import React, { useState, useEffect } from 'react';
import "./Team.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from 'axios'
import teamData from "../data/Faculties.json" 





export const Team = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        axios.get("https://ombn.in/xworkz_api/getFaculties")
            .then(res => {  
                setTeamData(res.data.Faculties)
            })
            .catch(err => {
                console.log(err)
                axios.get("https://raw.githubusercontent.com/xworkzodc/JSON/master/Faculties.json")
            .then(res => {
                console.log("getting data from secondary source")
                setTeamData(res.data.Faculties)
            })
            .catch(err => { 
                console.log(err)
                setTeamData(teamData)
                console.log("getting data from third source")
            })
            })
    }, []);

    return (


        <div className='team'>
            <div className='team-title' >
                <h2>Our <span>Team</span></h2>

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Scrollbar, A11y, FreeMode, Autoplay]}
                    freeMode={true}
                    autoplay={false}


                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 10,

                        }

                    }
                    }


                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    navigation
                >

                    {teamData
                        ? teamData.map((d, i) => (

                            <SwiperSlide key={i} >


                            <div className="team-container">
                                <input type="radio" name="dot" id="one" />
                                <input type="radio" name="dot" id="two" />
                                <div className="main-card">
                                    <div className="cards">
                                        <div className="card">
                                            <div className="content">
                                                <div className="img">
                                                    <img src ={d.imgSrc} alt="" />
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
                        : 'loading'}

                </Swiper>
            </div>
        </div>
    )
}
