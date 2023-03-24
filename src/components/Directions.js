
import "./Directions.css"
import emailjs from "emailjs-com"
import React, { useState} from 'react'

function Directions(){

	const [Firstname, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");

	function sendMail(e) {
        e.preventDefault();

        emailjs.sendForm('service_gdf9o6a',
        'template_j3z5jvd',
         e.target ,
         'vhlq2wUUQwHQPOf-f').then(res=>{
            console.log(res);
         }).catch(err=>{
            console.log(err)
         });
		}


    return (
        <div className="map-container">
		<div className="innerwrap">
		
			<section className="section1 clearfix">
				<div className="textcenter">
					
					
					<h1>Locate us</h1>
				</div>
			</section>
        
			<section className="section2 clearfix">
				<div classNameName='map-div'>
					<div classNameName='map-row'>
				<div className="map-1">
					<h2>Rajaji Nagar</h2>
					<iframe width="550" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=xworkz%20rajaji&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
				</div>
					</div>
					<div classNameName='map-row'>
					<div className="map-2">
					<h2>BTM Layout</h2>
				<iframe width="550" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=xworkz%20btm&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="2" scrolling="no" marginheight="0" marginwidth="10"></iframe>	
				</div>
				</div>
				
				
					</div>
					
					
					
					<div className="sec2contactform">
						<h3 className="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
						<form onSubmit={sendMail}>
							<div className="clearfix">
								<input className="col2 first" type="text" placeholder="FirstName" name='firstName'/>
								<input className="col2 last" type="text" placeholder="LastName" name='lastName'/>
							</div>
							<div className="clearfix">
								<input  className="col2 first" type="Email" placeholder="Email"  name='email'/>
								<input className="col2 last" type="text" placeholder="Contact Number"  name='contactNumber'/>
							</div>
							<div className="clearfix">
								<textarea name="message" id="" cols="30" rows="7" >Your message here...</textarea>
							</div>
							<div className="clearfix"><input type="submit"  /></div>
						</form>
					</div>

				
			</section>
		
		</div>
	</div>
    )
}


export default Directions