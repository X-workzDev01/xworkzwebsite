import React from 'react'
import './Tech.css'
import spring from '../img/spring.png'
import java from '../img/java.png'
import mySql from '../img/mysql.png'
import angular from '../img/angular.png'
import html from '../img/html.png'
import css from '../img/css.png'
import javaScript from "../img/javaScript.png"
import git from '../img/git.png'






export const Tech = () => {
    return (
        <div className='skill-inner'>
            <div className="heading text-center">
            <h2>We
                <span> Teach</span></h2>
                </div>
            <div className='skill-container'>
                <div className='skill-box'>
                    <div className='skill-title'>
                        <div className='skill-img'>
                            <img src={java} className='skill-icon'></img>
                        </div>
                        
                    </div>
                </div>
                <div className='skill-box'>
                    <div className='skill-title'>
                        <div className='skill-img'>
                            <img src={spring} className='skill-icon'></img>
                        </div>
                        
                    </div>
                </div>
                <div className='skill-box'>
                    <div className='skill-title'>
                        <div className='skill-img'>
                            <img src={mySql} className='skill-icon'></img>
                        </div>
                        
                    </div>
                </div>
                <div className='skill-box'>
                    <div className='skill-title'>
                        <div className='skill-img'>
                            <img src={angular} className='skill-icon'></img>
                        </div>
                        
                    </div>
                </div>
                <div className='skill-box'>
                    <div className='skill-title'>
                        <div className='skill-img'>
                            <img src={javaScript} className='skill-icon'></img>
                        </div>
                        
                    </div>
                </div>
                <div className='skill-box'>
                    <div className='skill-title'>
                        <div className='skill-img'>
                            <img src={html} className='skill-icon'></img>
                        </div>
                       
                    </div>
                </div>
                <div className='skill-box'>
                    <div className='skill-title'>
                        <div className='skill-img'>
                            <img src={css} className='skill-icon'></img>
                        </div>
                        
                    </div>
                </div>
                <div className='skill-box'>
                    <div className='skill-title'>
                        <div className='skill-img'>
                            <img src={git} className='skill-icon'></img>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
            
        </div>

    )
}
