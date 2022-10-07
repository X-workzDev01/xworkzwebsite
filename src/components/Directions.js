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
				<div class="col2 column1 first">
				<iframe width="611" height="650" id="gmap_canvas" src="https://maps.google.com/maps?q=xworkz%20btm&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>	
				</div>
				<div class="col2 column2 last">
					<div class="sec2innercont">
						<div class="sec2addr">
							<p># 50, 1st Floor, 100 Feet Ring Rd, Vysya Bank Colony, BTM 2nd Stage, Bengaluru, Karnataka 560076</p>
							<p><span class="collig">Phone :</span> +91-9886971480/9886971483</p>
							<p><span class="collig">Email :</span> contact@x-workz.in</p>
							
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

				</div>
			</section>
		
		</div>
	</div>
    )
}

export default Directions