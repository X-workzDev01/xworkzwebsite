import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Checkmark } from "react-checkmark";
import Popup from "reactjs-popup";
import "./Home.css";
import { Urlconstant } from "./constant/Urlconstant";
import { useSelector } from "react-redux";

export const Register = () => {
	const dropdown = useSelector((state) => state.dropdowns.dropdown);
	const [usnCheck, setUsnCheck] = useState("");
	const [isopen, setIsopen] = useState(false);
	const [save, setSave] = useState("");
	const [btn, setbtn] = useState(false);
	const [registerData, setRegisterData] = useState({});
	const [autoSetWhatsAppNumber, setAutoSetWhatsAppNumber] = useState("");
	const [yearOfPassedOut] = useState([
		2019, 2020, 2021, 2022, 2023, 2024, 2025
	]);
	const [phoneNumberError, setPhoneNumberError] = useState("");
	const [wattsappNumberError, setWattsappNumberError] = useState("");
	const [usnError, setUsnError] = useState("");
	const [numberCheck, setNumberCheck] = useState(null);
	const [wattsappNumberCheck, setWattsappNumberCheck] = useState(null);

	const [emailCheck, setEmailCheck] = useState(null);
	const [emailError, setEmailError] = useState("");
	const [verifyHandaleEmail, setverifyHandleEmail] = useState("");
	const [verifyHandaleEmailerror, setverifyHandleEmailError] = useState("");

	const handleNumberChange = (event) => {
		const { name } = event.target;

		if (name === "contactNumber") {
			numberCheckApi(registerData.contactNumber, name);
		}
		if (name === "wattsAppNumber" || autoSetWhatsAppNumber !== "") {
			if (name === "") {
				numberCheckApi(registerData.wattsAppNumber, name);
			} else {
				numberCheckApi(autoSetWhatsAppNumber, "wattsAppNumber");
			}
		}
	};

	const handleUsnCheck = (event) => {
		if (event.target.value.length >= 10 && event.target.value.length <= 12) {
			axios
				.get(
					Urlconstant.url + `api/csr/checkUsn?usnNumber=${event.target.value}`,
					{
						headers: {
							spreadsheetId: Urlconstant.spreadsheetId
						}
					}
				)
				.then((response) => {
					if (
						response.status === 200 &&
						response.data === "Usn Number Already Exists"
					) {
						setUsnCheck(response.data);
					} else {
						setUsnCheck(null);
					}
				});
		}
	};

	const numberCheckApi = (number, name) => {
		axios
			.get(
				Urlconstant.url + `api/csr/checkcontactNumber?contactNumber=${number}`,
				{
					headers: {
						spreadsheetId: Urlconstant.spreadsheetId
					}
				}
			)
			.then((response) => {
				if (name === "contactNumber" && number.length === 10) {
					if (
						response.status === 200 &&
						response.data === "Contact Number Already Exists"
					) {
						setNumberCheck(response.data);
					} else {
						setNumberCheck(null);
					}
				}
				if (name === "wattsAppNumber" && number.length === 10) {
					if (
						response.status === 200 &&
						response.data === "Contact Number Already Exists"
					) {
						setWattsappNumberCheck("whatsApp Number Already Exists");
					} else {
						setWattsappNumberCheck(null);
					}
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleSetData = (e) => {
		const re = /^\d{0,9}$/;
		setSave("");
		const { name, value } = e.target;

		if (name === "contactNumber") {
			setAutoSetWhatsAppNumber(value);
		}
		setRegisterData({ ...registerData, [name]: value });

		if (name === "email") {
			if (!value) {
				setEmailError("Email is required *");
				setverifyHandleEmail("");
				setEmailCheck("");
			} else if (
				!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)
			) {
				setEmailError("Invalid email address *");
				setverifyHandleEmail("");
				setverifyHandleEmailError("");
				setEmailCheck("");
			} else {
				validEmail(value);
				setEmailError("");
			}
		} else if (name === "usn") {
			if (!value) {
				setUsnError("USN is Required *");
				setUsnCheck("");
				setRegisterData.usn("");
			} else if (value.length >= 5 && value.length <= 12) {
				setUsnError("");
			} else {
				setUsnError("Enter Valid USN");
				setUsnCheck("");
				setRegisterData.usn("");
			}
		}
		if (name === "contactNumber") {
			if (!value || re.test(value)) {
				setPhoneNumberError("Contact number is required *");
				setNumberCheck(null);
			} else if (!/^\d+$/.test(value)) {
				setNumberCheck("");
				setPhoneNumberError("Enter Valid Contact Number");
			} else if (value.length !== 10) {
				setNumberCheck("");
				setPhoneNumberError("Enter Valid Contact Number");
			} else {
				setPhoneNumberError("");
			}
		}
		if (name === "wattsAppNumber") {
			if (!value || re.test(value)) {
				setAutoSetWhatsAppNumber("");
				setWattsappNumberError("Wattsapp number is required *");
				setWattsappNumberCheck(null);
			} else if (!/^\d+$/.test(value)) {
				setAutoSetWhatsAppNumber("");
				setWattsappNumberCheck("");
				setWattsappNumberError("Enter Valid wattsapp Number");
			} else if (value.length !== 10) {
				setAutoSetWhatsAppNumber("");
				setWattsappNumberCheck("");
				setWattsappNumberError("Enter Valid wattsapp Number");
			} else {
				setAutoSetWhatsAppNumber(value);
				setWattsappNumberError("");
			}
		}
	};
	const verifyEmail = (email) => {
		axios
			.get(`${Urlconstant.url}api/verify-email?email=${email}`)
			.then((response) => {
				if (response.status === 200) {
					if (response.data === "accepted_email") {
						setverifyHandleEmailError("");
						setverifyHandleEmail(response.data);
					} else if (response.data === "rejected_email") {
						setverifyHandleEmailError("");
						setverifyHandleEmailError(response.data);
						setverifyHandleEmail("");
						setEmailError("");
						setEmailCheck("");
					} else {
						setverifyHandleEmail("");
						setverifyHandleEmailError(response.data);
					}
				} else {
					if (response.status === 500) {
						console.log("Internal Server Error:", response.status);
					} else {
						console.log("Unexpected Error:", response.status);
					}
				}
			})
			.catch((error) => {
				console.log("check emailable credentils");
			});
	};
	const handleEmailVeryfy = (e) => {
		if (emailCheck === "" && emailError === "") {
			verifyEmail(e.target.value);
		}
	};

	const handleEmail = (email) => {
		axios
			.get(Urlconstant.url + `api/emailCheck?email=${email}`, {
				headers: {
					spreadsheetId: Urlconstant.spreadsheetId
				}
			})
			.then((response) => {
				if (response.status === 201) {
					setEmailCheck(response.data);
				} else {
					setEmailCheck("");
				}
			})
			.catch();
	};

	const validEmail = (email) => {
		handleEmail(email);
	};
	useEffect(() => {
		setRegisterData({});
	}, [save]);
	let isDiesabled;
	if (registerData !== null) {
		isDiesabled =
			!registerData.email ||
			!registerData.fullName ||
			phoneNumberError ||
			wattsappNumberError ||
			usnError ||
			emailCheck ||
			emailError ||
			numberCheck ||
			wattsappNumberCheck ||
			verifyHandaleEmailerror ||
			!registerData.contactNumber ||
			!registerData.usn ||
			!autoSetWhatsAppNumber ||
			!registerData.qualification ||
			!registerData.stream ||
			!registerData.yop ||
			!registerData.collegeName ||
			save ||
			usnCheck ||
			btn;
	}

	const handleSubmit = () => {
		setbtn(true);
		let offeredAs;
		if (registerData.yop === 2025) {
			 offeredAs = "CSR Offered";
			// offeredAs = "INTERNSHIP";
			//offeredAs = "Non-CSR Offered";
		} else {
			offeredAs = "Non-CSR Offered";
		}
		const registerDto = {
			basicInfo: {
				contactNumber: registerData.contactNumber,
				email: registerData.email,
				traineeName: registerData.fullName
			},
			alternateContactNumber: autoSetWhatsAppNumber,
			educationInfo: {
				collegeName: registerData.collegeName,
				qualification: registerData.qualification,
				stream: registerData.stream,
				yearOfPassout: registerData.yop
			},
			usnNumber: registerData.usn,
			offeredAs: offeredAs
		};

		const response = axios.post(
			Urlconstant.url + "api/csr/register",
			registerDto
		);
		response.then((response) => {
			setIsopen(true);
			setTimeout(() => {
				setRegisterData([]);
				setAutoSetWhatsAppNumber("");
				setverifyHandleEmail("");
				setbtn(false);
				setSave(response.data);
				setIsopen(false);
			}, 4000);
		});
	};

	return (
		<div className="">
			<div
				className="container mt-5 w-75 mb-11 mx-auto shadow-5-strong bg-light bg-md-secondary rounded-5 "
				style={{ maxWidth: "600px" }}
			>
				<div className=" d-grid justify-content-center ">
					{save ? <span className="text-success fs-4  mt-4">{save}</span> : ""}
					{save ? (
						<span className="text-danger fs-5 text-capitalize">
							check email for further details
						</span>
					) : (
						""
					)}
					<div className="d-flex justify-content-center">
						<div className=" pt-5 pt-lg-5 pt-md-5 mt-n3 pt-sm-5 ">
							<div
								className="mb-4 btn-outline-secondary opacity-80 shadow-5-strong  rounded-8"
								style={{ backgroundColor: "#d94404" }}
							>
								<h5>
									<span className="fa-square-font-awesome-stroke bold text-white ">
										REGISTER HERE
									</span>
								</h5>
							</div>
						</div>
					</div>
				</div>

				<div className="ms-sm-n4  mb-8 ">
					<div className="  w-100 d-flex  justify-content-center">
						<div>
							<div className="row g-2  ">
								<div className="col-md-6 mb-4">
									<TextField
										required
										value={registerData.fullName ? registerData.fullName : ""}
										onChange={handleSetData}
										onBlur={handleNumberChange}
										label="Enter full name"
										placeholder="Enter full name"
										name="fullName"
										id="outlined-size-small"
										size="small"
										color="primary"
										focused
									/>
								</div>

								<div className="col-md-6 mb-4">
									{phoneNumberError || numberCheck ? (
										<div className="mt-2 ">
											<div className="mt-n5">
												<span
													style={{ fontSize: "0.9rem" }}
													className="text-danger text-justify text-capitalize"
												>
													<div className="mb-3">
														{numberCheck}
														{phoneNumberError}
													</div>
												</span>
											</div>
										</div>
									) : (
										" "
									)}

									<TextField
										required
										onChange={handleSetData}
										onBlur={handleNumberChange}
										placeholder="Enter Contact Number"
										value={
											registerData.contactNumber
												? registerData.contactNumber
												: ""
										}
										label="Enter contact number"
										name="contactNumber"
										id="outlined-size-small"
										size="small"
										color="primary"
										focused
									/>
								</div>
							</div>

							<div className="row g-3">
								<div className="col-md-6 mb-4 ">
									{wattsappNumberError || wattsappNumberCheck ? (
										<div className="mt-2 ">
											<div className="mt-n5">
												<span
													style={{ fontSize: "0.9rem" }}
													className="text-danger text-justify text-capitalize "
												>
													{" "}
													<div className="mb-3">
														{wattsappNumberError}
														{wattsappNumberCheck}
													</div>
												</span>
											</div>
										</div>
									) : (
										" "
									)}

									<TextField
										required
										value={
											autoSetWhatsAppNumber || registerData.wattsAppNumber
												? autoSetWhatsAppNumber || registerData.wattsAppNumber
												: ""
										}
										onChange={handleSetData}
										onBlur={handleNumberChange}
										placeholder="Enter whatsApp Number"
										label="Enter whatsApp number"
										name="wattsAppNumber"
										id="outlined-size-small"
										size="small"
										color="primary"
										focused
									/>
								</div>

								<div className="col-md-6 mb-4">
									{emailError ||
									verifyHandaleEmail ||
									emailCheck ||
									verifyHandaleEmailerror ? (
										<div className="mt-2 ">
											<div className="mt-n5">
												<span
													style={{ fontSize: "0.9rem" }}
													className="text-danger text-justify text-capitalize "
												>
													{" "}
													<div className="mb-3">
														{emailError}
														{verifyHandaleEmailerror}
														{emailCheck}
														<span className="text-success">
															{verifyHandaleEmail}
														</span>
													</div>
												</span>
											</div>
										</div>
									) : (
										" "
									)}
									<TextField
										required
										placeholder="Enter email Id "
										onChange={handleSetData}
										onBlur={emailCheck || emailError ? "" : handleEmailVeryfy}
										label="Enter email id"
										name="email"
										value={registerData.email ? registerData.email : ""}
										id="outlined-size-small"
										size="small"
										color="primary"
										focused
									/>
								</div>
							</div>

							<div className="row g-3">
								<div className="col-md-6 mb-4">
									{usnError || usnCheck ? (
										<div className="mt-2 ">
											<div className="mt-n5">
												<span
													style={{ fontSize: "0.9rem" }}
													className="text-danger text-justify text-capitalize "
												>
													<div className="mb-3">
														{usnError}
														{usnCheck}
													</div>
												</span>
											</div>
										</div>
									) : (
										" "
									)}
									<TextField
										required
										placeholder="Enter USN "
										onChange={handleSetData}
										onBlur={handleUsnCheck}
										label="Enter USN / Roll NO "
										name="usn"
										value={registerData.usn ? registerData.usn : ""}
										id="outlined-size-small"
										size="small"
										color="primary"
										focused
									/>
								</div>
								<div className="col-md-6">
									<FormControl>
										<InputLabel id="demo-simple-select-label">
											<span>Select qualification *</span>
										</InputLabel>
										<Select
											color="primary"
											focused
											value={
												registerData.qualification
													? registerData.qualification
													: ""
											}
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											label="Select Qualification"
											required
											name="qualification"
											onChange={handleSetData}
											variant="outlined"
											size="small"
											sx={{
												width: "200px"
											}}
										>
											{dropdown && dropdown.qualification
												? dropdown.qualification.map((item, index) => (
														<MenuItem value={item} key={index}>
															{item}
														</MenuItem>
												  ))
												: ""}
										</Select>
									</FormControl>
								</div>
							</div>

							<div className="row g-3 ">
								<div className="col-md-6">
									<FormControl>
										<InputLabel id="demo-simple-select-label">
											<span>Select stream *</span>
										</InputLabel>
										<Select
											color="primary"
											focused
											value={registerData.stream ? registerData.stream : ""}
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											label="Select Stream"
											required
											name="stream"
											onChange={handleSetData}
											variant="outlined"
											size="small"
											sx={{
												width: "200px"
											}}
										>
											{dropdown && dropdown.stream
												? dropdown.stream.map((item, index) => (
														<MenuItem value={item} key={index}>
															{item}
														</MenuItem>
												  ))
												: ""}
										</Select>
									</FormControl>
								</div>
								<div className="col-md-6">
									<FormControl>
										<InputLabel id="demo-simple-select-label">
											<span>Select college name *</span>
										</InputLabel>
										<Select
											color="primary"
											focused
											value={
												registerData.collegeName ? registerData.collegeName : ""
											}
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											label="Select college Name"
											required
											name="collegeName"
											onChange={handleSetData}
											variant="outlined"
											size="small"
											sx={{
												width: "200px"
											}}
										>
											{dropdown && dropdown.college
												? dropdown.college.map((item, index) => (
														<MenuItem value={item} key={index}>
															{item}
														</MenuItem>
												  ))
												: ""}
										</Select>
									</FormControl>
								</div>
							</div>

							<div className="row g-3 mb-8">
								<div className="col-md-6">
									<FormControl>
										<InputLabel id="demo-simple-select-label">
											<span>Year of PassedOut *</span>
										</InputLabel>
										<Select
											color="primary"
											focused
											value={registerData.yop ? registerData.yop : ""}
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											label="Year of Passed Out"
											required
											name="yop"
											onChange={handleSetData}
											variant="outlined"
											size="small"
											sx={{
												width: "200px"
											}}
										>
											{yearOfPassedOut.map((item, index) => (
												<MenuItem value={item} key={index}>
													{item}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</div>
								<div className="col-md-6">
									<TextField
										aria-readonly
										required
										value={
											registerData.yop
												? registerData.yop === 2025
													? "CSR"
													: "Non CSR"
												: ""
										}
										placeholder="Offeres As"
										label="offered as"
										id="outlined-size-small"
										size="small"
										color="primary"
										focused
									/>
								</div>

								<div className="d-flex mt-3 pt-4 me-5  pe-3 mb-3 justify-content-center">
									<Button
										onClick={handleSubmit}
										disabled={isDiesabled}
										sx={{
											borderRadius: "1rem",
											color: "ActiveCaption",
											backgroundColor: "pink"
										}}
										variant="outlined"
									>
										Register
									</Button>
								</div>
								<div className="d-flex justify-content-center me-5 pe-2 mt-n5 p-n2">
									{btn ? (
										<div className="mt-n1 pe-1">
											<div
												className="spinner-border w-5 text-primary"
												role="status"
											/>
										</div>
									) : (
										""
									)}
								</div>
								<div className="d-flex justify-content-center">
									<div className="border border-2 shadow-5-strong rounded-5 pt-2 border-warning">
										<ol className="text-danger">
											<li>CSR is applicable only for 2025 YOP students.</li>
											<li>
												{" "}
												Enquiries are requested to enter your full Name and
												Reachable contact Number.
											</li>
											<li>
												Candidates are requested to select “Others” if your
												college name is not mentioned in the list
											</li>
											<p className="mb-4 mt-2 text-success">
												Feel free to contact 9886971480 or 9845958884 for any
												queries
											</p>
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Popup
					className="d-flex justify-content-end align-align-items-center me-4" // Add your custom modal class
					open={isopen}
					onClose={() => setIsopen(false)}
				>
					<div className="">
						<Checkmark size="10rem" />
					</div>
					<div>
						<span className="text-capitalize text-success fs-4  ">
							{registerData.fullName + " registered successfully"}
						</span>
					</div>
				</Popup>
			</div>
		</div>
	);
};
