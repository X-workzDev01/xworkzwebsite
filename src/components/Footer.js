import React from 'react'
import "./Footer.css"
import emailjs from "emailjs-com"

function Footer() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_gdf9o6a',
        'template_l50t6hc',
         e.target ,
         'vhlq2wUUQwHQPOf-f').then(res=>{
            console.log(res);
         }).catch(err=>{
            console.log(err)
         });


    }
  return (
    <footer class="footer-section">
        <div class="container">
           
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href=""><img src="https://raw.githubusercontent.com/X-workzDev01/xworkzwebsite/master/src/main/webapp/assets/images/Logo.png"  class="img-fluid" alt="logo" /> </a>
                            </div>
                            
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/xworkzdevelopmentcenter/"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://twitter.com/workz_x"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-instagram instagram-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form onSubmit={sendEmail}>
                                    <input type="text" name='email' placeholder="Email Address" />
                                    <button type='submit'><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">about</a></li>
                                <li><a href="/softwares">Software</a></li>
                                <li><a href="/courses">Courses</a></li>
                                <li><a href="/directions">Directions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer