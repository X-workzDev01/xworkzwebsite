import "./Directions.css"
import React from 'react'

function Directions() {
    return (
        <div className="directions-container">
            <div className="innerwrap">
                <section className="section1 clearfix">
                    <div className="textcenter directions-heading">
                        <h1>
                            Our
                            <span> Locations</span>
                        </h1>
                        <p>Find us at these convenient locations</p>
                    </div>
                </section>
        
                {/* Directions Section */}
                <section className="directions-section">
                    <div className="locations-grid">
                        <div className="location-card">
                            <h2 className="location-title rajaji-color">Rajaji Nagar</h2>
                            <div className="map-container">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62213.36842565492!2d77.53720571953126!3d12.950368898720827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d92e03a00dd%3A0x8b96f625cf9b4ead!2sX-Workz!5e0!3m2!1sen!2sin!4v1757936306506!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="300" 
                                    style={{border:0}} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Rajaji Nagar Location"
                                ></iframe>
                            </div>
                            <div className="location-info">
                                <p><strong>Address:</strong> X-Workz, Rajaji Nagar, Bangalore</p>
                            </div>
                        </div>
                        
                        <div className="location-card">
                            <h2 className="location-title btm-color">BTM Layout</h2>
                            <div className="map-container">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62213.36842565492!2d77.53720571953126!3d12.950368898720827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e2df6c9ccf%3A0xf1dc47ea7a6a133!2sX-workz%20BTM!5e0!3m2!1sen!2sin!4v1757936472063!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="300" 
                                    style={{border:0}} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="BTM Layout Location"
                                ></iframe>
                            </div>
                            <div className="location-info">
                                <p><strong>Address:</strong> X-workz BTM, BTM Layout, Bangalore</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Directions