
import React from "react"
import "./Home.css"
import JsonData from '../data/data.json';

import Typewriter from "typewriter-effect"


import { Tech } from "./Tech";
import code from '../img/coding_img.png'
import Accordion from 'react-bootstrap/Accordion';
import { Team } from "./Team";


import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css'



const Home = (props) => {
  return (
    <>

      <section className='hero' id='home'>
        <div className='container'>
          <div className='row'>
            <img className="col-sm-12 col-lg-5" src={code} alt=" " />
            <div className='left col-lg-5'>

              <h1>
                We Are
                <span>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      cursor: "_",
                      strings: [
                        "Software Trainers",
                        "Working Professionals",
                        "Experienced Trainers"

                      ],
                    }}
                  />
                </span>
              </h1>
              <button class="custom-btn btn-5">Enroll Now</button>







            </div>


          </div>
        </div>

      </section>


      <Tech />

      
      <WhatsAppWidget  open={true} companyName='Xworkz ODC'  phoneNumber="+919514726209sleep" />
      <div>
        <section className="about" id="about">
          <div className="container">
            <div className="heading text-center">
              <h2>About
                <span>Us</span></h2>
              <p>We are professionals from IT industry, having vast experience in development
                <br></br>and training of JAVA and various UI related technologies.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <img src="https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/56.jpeg" alt="about" className="img-fluid" width="50%" />
              </div>
              <div className="about-info col-lg-6">
                <h3>Enterprise Application Expertise Team</h3>
                <p>We have been training and placing students over a decade now in various training institutes,
                  we are the pioneers who introduced different training models which not only focus on theory but on practical implementations.</p>
                <p>We focus on providing quality training on cutting edge technologies that are used to build softwares in the current world.</p>
              </div>
            </div>
          </div>
        </section>
        <Accordion >
          <Accordion.Item >
            <Accordion.Header>
              Why Xworkz
            </Accordion.Header>
            <Accordion.Body>

              <div className="row1-container">
                <div className="box box-down cyan">
                  <h2>Student Guidance</h2>
                  <p>We make sure every Student is guided towards their future carrer</p>
                  <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                </div>

                <div className="box red">
                  <h2>Best Trainers</h2>
                  <p>We have the best trainers to teach you the best tech</p>
                  <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
                </div>

                <div className="box box-down blue">
                  <h2>Best Skills</h2>
                  <p>We make sure that every students are skilled </p>
                  <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                </div>
              </div>
              <div className="row2-container">
                <div className="box orange">
                  <h2>Landing Dream Job</h2>
                  <p>Get into your dream job with all the skilset needed    </p>
                  <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
                </div>
              </div>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" alwaysOpen={false}>
            <Accordion.Header>Team</Accordion.Header>
            <Accordion.Body>
              <Team value={props.value.Components[1]} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>

    </>
  )
}

export default Home
