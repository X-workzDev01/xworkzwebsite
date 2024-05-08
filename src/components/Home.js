import React, { useState } from "react";
import "./Home.css";
import { TfiClose } from "react-icons/tfi";
import Typewriter from "typewriter-effect";
import { Tech } from "./Tech";
import code from "../img/coding_img.png";
import Accordion from "react-bootstrap/Accordion";
import { Team } from "./Team";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import { Modal } from "semantic-ui-react";

const Home = props => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div>
			<Banner />
			<Modal
				className="h-auto w-auto rounded-5 position-relative  "
				style={{
					backgroundColor: "#bdb7b2"
				}}
				open={isOpen}
			>
				<div className="m-3">
					<div className="d-flex  justify-content-end mt-3 me-4 ">
						<TfiClose
							color="black"
							onClick={() => setIsOpen(false)}
							size={20}
						/>
					</div>

					<div className="d-flex justify-content-center mt-n3">
						<img
							src="https://www.x-workz.in/Logo.png"
							height={100}
							width={250}
							alt="png"
						/>
					</div>
					<div className="d-flex justify-content-center ">
						<p className="text-black fw-bolder fs-2">
							<span className="fw-bolder text-danger">FREE</span> 2 months class
							for 2024 Graduates {" "}
						</p>
					</div>
					<div className="d-flex justify-content-center ">
						<p
							className="fs-2 fw-bolder "
							style={{
								color: "purple"
							}}
						>
							Contact :
						</p>
					</div>
					<div className="d-flex justify-content-center ">
						<p className="text-black fs-2">9886971480 / 9886971483</p>
					</div>
					<div className="d-flex justify-content-center m-3 ">
						<p className="text-danger fs-2 fw-bold">Starting from June</p>
					</div>
					<div className="d-flex justify-content-center ">
						<p className="fs-2 text-black fw-bold ">
							<Link to={"/register"}>
								<i class="me-3 text-decoration-none ">Register now</i>
							</Link>
							Limited seats available
						</p>
					</div>
				</div>
			</Modal>
			<section className="hero" id="home">
				<div className="container">
					<div className="row justify-content-around">
						<div className="left col-lg-5">
							<h1>
								We Are
								<span>
									<Typewriter
										options={{
											autoStart: true,
											loop: true,
											delay: 40,
											cursor: "_",
											strings: [
												"Software Trainers",
												"Working Professionals",
												"Experienced Trainers"
											]
										}}
									/>
								</span>
							</h1>
							<div className="mt-4">
								<span className=" text-secondary fs-4 fw-bolder">
									Click here to enroll for CSR-2024
								</span>
							</div>
							<Link to="/register">
								<button className="custom-btn btn-5">Enroll Now</button>
							</Link>
						</div>
						<img className="col-sm-12 col-lg-5" src={code} alt=" " />
					</div>
				</div>
			</section>

			<Tech />

			<WhatsAppWidget
				open={false}
				companyName="Xworkz ODC"
				phoneNumber="+919886971483"
			/>
			<div>
				<section className="about" id="about">
					<div className="container">
						<div className="heading text-center">
							<h2>
								About
								<span>Us</span>
							</h2>
							<p>
								We are professionals from IT industry, having vast experience in
								development
								<br />and training of JAVA and various UI related technologies.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<img
									src="https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/56.jpeg"
									alt="about"
									className="img-fluid"
									width="50%"
								/>
							</div>
							<div className="about-info col-lg-6">
								<h3>Enterprise Application Expertise Team</h3>
								<p>
									We have been training and placing students over a decade now
									in various training institutes, we are the pioneers who
									introduced different training models which not only focus on
									theory but on practical implementations.
								</p>
								<p>
									We focus on providing quality training on cutting edge
									technologies that are used to build softwares in the current
									world.
								</p>
								<p>
									Our alumni are our pride and joy. They have gone on to achieve
									remarkable success in the tech industry, holding key positions
									in renowned companies and contributing to groundbreaking
									projects. Their achievements stand as a testament to the
									quality of education and training we provide.
								</p>
							</div>
						</div>
					</div>
				</section>
				<Accordion>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Why Xworkz</Accordion.Header>
						<Accordion.Body>
							<div className="row1-container">
								<div className="box box-down cyan">
									<h2>Guidance and Placements</h2>
									<img
										src="https://assets.codepen.io/2301174/icon-supervisor.svg"
										alt=""
									/>
								</div>

								<div className="box red">
									<h2>Best Trainers</h2>
									<img
										src="https://assets.codepen.io/2301174/icon-team-builder.svg"
										alt=""
									/>
								</div>

								<div className="box box-down blue">
									<h2>Technical Skills</h2>
									<img
										src="https://assets.codepen.io/2301174/icon-calculator.svg"
										alt=""
									/>
								</div>
							</div>
							<div className="row2-container">
								<div className="box orange">
									<h2>Learn Application Development</h2>
									<img
										src="https://assets.codepen.io/2301174/icon-karma.svg"
										alt=""
									/>
								</div>
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Team</Accordion.Header>
						<Accordion.Body>
							<Team />
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
				{/* <Testimonials /> */}
			</div>
		</div>
	);
};

export default Home;
