import React from 'react'
import "./Directions.css"

const Directions = () => {
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
					<iframe width="550" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=xworkz&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="2" scrolling="no" marginheight="0" marginwidth="10"></iframe>
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
						<form action="">
							<div class="clearfix">
								<input class="col2 first" type="text" placeholder="FirstName" />
								<input class="col2 last" type="text" placeholder="LastName" />
							</div>
							<div class="clearfix">
								<input  class="col2 first" type="Email" placeholder="Email" />
								<input class="col2 last" type="text" placeholder="Contact Number" />
							</div>
							<div class="clearfix">
								<textarea name="textarea" id="" cols="30" rows="7">Your message here...</textarea>
							</div>
							<div class="clearfix"><input type="submit" value="Send" /></div>
						</form>
					</div>

				
			</section>
		
		</div>
	</div>
    )
}

export default Directions