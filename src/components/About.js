import React from 'react'

import "./Abt.css"
import { Team } from './Team'
import Accordion from 'react-bootstrap/Accordion';
import Messenger from './Widgets/Messenger';




export const About = (props) => {
  return (

   
      
    <div className='about-page'>
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
            <div className="col-lg-6 about-info">
                <h3>Enterprise Application Expertise Team</h3>
                <p>We have been training and placing students over a decade now in various training institutes,
                   we are the pioneers who introduced different training models which not only focus on theory but on practical implementations.</p>
                   <p>We focus on providing quality training on cutting edge technologies that are used to build softwares in the current world.</p>
                
            </div>
        </div>
    </div>
</section>

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
          <p>Get into your dream job with all the skilset needed </p>
          <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>
         
     
    
     
      <div className='team-component'>
      <Messenger />      
      
      <Team value={props.value.Components[1]}/>
      </div>

    </div>
    



  )
}
