import React from 'react'
import "./Directions.css"
import emailjs from "emailjs-com"

function Directions(){
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
        <div class="map-container">
		<div class="innerwrap">
		
			<section class="section1 clearfix">
				<div class="textcenter">
					
					
					<h1>Locate us</h1>
				</div>
			</section>
        
			<section class="section2 clearfix">
				<div className='map-div'>
					<div className='map-row'>
				<div class="map-1">
					<h2>Rajaji Nagar</h2>
					<iframe width="550" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=xworkz%20rajaji&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
				</div>
					</div>
					<div className='map-row'>
					<div class="map-2">
					<h2>BTM Layout</h2>
				<iframe width="550" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=xworkz%20btm&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="2" scrolling="no" marginheight="0" marginwidth="10"></iframe>	
				</div>
				</div>
				
				
					</div>
					
					
					
					<div class="sec2contactform">
						<h3 class="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
						<form onSubmit={sendMail}>
							<div class="clearfix">
								<input class="col2 first" type="text" placeholder="FirstName" name='firstName'/>
								<input class="col2 last" type="text" placeholder="LastName" name='lastName'/>
							</div>
							<div class="clearfix">
								<input  class="col2 first" type="Email" placeholder="Email"  name='email'/>
								<input class="col2 last" type="text" placeholder="Contact Number"  name='contactNumber'/>
							</div>
							<div class="clearfix">
								<textarea name="message" id="" cols="30" rows="7" >Your message here...</textarea>
							</div>
							<div class="clearfix"><input type="submit"  /></div>
						</form>
					</div>

				
			</section>
		
		</div>
	</div>
    )
}


export default Directions