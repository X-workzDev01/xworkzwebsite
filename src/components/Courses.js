import React from 'react'
import "./Courses.css"

const Courses = (props) => {
  return (
	<div className='course-heading'>
		<h1>Ongoing Courses</h1> 
    <div className='course-page'>
	
    <div className="courses-container ">
	
	{props.value.Completed
                ? props.value.Completed.map((d, i) => (
					
					<div className="course">
		<div className="course-preview">
			<h6>Course</h6>
			<h2>{d.courseName}</h2>
			<a href="#">View all chapters <i class="fas fa-chevron-right"></i></a>
		</div>
		<div className="course-info">
			
			<h6>Trainer</h6>
			<h2>Devendra</h2>
			<h5>Weekday Offline</h5>
			<h6>starts from </h6>
			
		</div>
	</div>

					))
					: 'loading'}
    
	
    </div>
    
   
    
   
</div>
</div>

  )
}

export default Courses