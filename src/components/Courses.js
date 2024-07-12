import React from "react";

import "./Courses.css";

const Courses = props => {
	// const [CourseData , setCourseData ] = useState([])

	// useEffect(() => {
	// 	axios.get("https://ombn.in/xworkz_api/getBatches")
	// 	.then(res =>{
	// 		setCourseData(res.data.Softwares)

	// 	})
	//   .catch(err => {
	// 	console.log(err);
	// 	axios.get("https://raw.githubusercontent.com/xworkzodc/JSON/master/Batches.json")
	// 	  .then(res => {
	// 		console.log("data getting from secondary source")
	// 		setCourseData(res.data.Softwares);
	// 	  })
	// 	  .catch(err => {
	// 		console.log(err);
	// 	  });
	//   })
	//   },[]);

	return (
		<div>
			<div className="course-page">
				<div className="course-heading">
					<h1>Upcoming Courses</h1>
					<div className="courses-container ">
						{props.value.Batches[0]
							? props.value.Batches[0].Upcoming.map((d, i) =>
									<div className="course">
										<div className="course-preview">
											<h6>Course</h6>
											<h2>
												{d.courseName}
											</h2>
											{/* <a href="#">
												View all chapters <i className="fas fa-chevron-right" />
											</a> */}
										</div>
										<div className="course-info">
											<h6>Trainer</h6>
											<h2>
												{d.facultyName}
											</h2>
											<h5>
												{d.type}
											</h5>
											<h6>starts from</h6>
											<h6>
												{d.startDate}
											</h6>
											<h6>
												Location: {d.location}{" "}
											</h6>
											<h6>
												Timing: {d.time}{" "}
											</h6>
										</div>
									</div>
								)
							: "loading"}
					</div>
				</div>
				<div className="course-heading">
					<h1>Ongoing Courses</h1>
					<div className="courses-container">
						{props.value.Batches[1]
							? props.value.Batches[1].Ongoing.map((d, i) =>
									<div className="course">
										<div className="course-preview">
											<h6>Course</h6>
											<h2>
												{d.courseName}
											</h2>
											{/* <a href="#">
												View all chapters <i className="fas fa-chevron-right" />
											</a> */}
										</div>
										<div className="course-info">
											<h6>Trainer</h6>
											<h2>
												{d.facultyName}
											</h2>
											<h5>
												{d.type}
											</h5>
											<h6>started on</h6>
											<h6>
												{d.startDate}
											</h6>
											<h6>
												Location: {d.location}{" "}
											</h6>
											<h6>
												Timings: {d.time}{" "}
											</h6>
										</div>
									</div>
								)
							: "loading"}
					</div>
				</div>
				<div className="course-heading">
					<h1>Completed Courses</h1>

					<div className="courses-container ">
						{props.value.Batches[2]
							? props.value.Batches[2].Completed.map((d, i) =>
									<div className="course">
										<div className="course-preview">
											<h6>Course</h6>
											<h2>
												{d.courseName}
											</h2>
											{/* <a href="#">
												View all chapters <i className="fas fa-chevron-right" />
											</a> */}
										</div>
										<div className="course-info">
											<h6>Trainer</h6>
											<h2>
												{d.facultyName}
											</h2>
											<h5>
												{d.type}
											</h5>
											<h6>starts from</h6>
											<h6>
												{d.startDate}
											</h6>
										</div>
									</div>
								)
							: "loading"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Courses;
