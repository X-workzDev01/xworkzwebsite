import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
  Paper,
  Typography,
  Box,
  Alert,
  Container,
  IconButton // Import IconButton
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon
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
    2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
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

  const [existingDataPopup, setExistingDataPopup] = useState(false);
  const [existingDataMessage, setExistingDataMessage] = useState("");

  const handleExistingDataPopup = (message) => {
    setExistingDataMessage(message);
    setExistingDataPopup(true);
  };

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
              spreadsheetId: Urlconstant.spreadsheetId,
            },
          }
        )
        .then((response) => {
          if (
            response.status === 200 &&
            response.data === "Usn Number Already Exists"
          ) {
            handleExistingDataPopup("Data Already Exists");
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
            spreadsheetId: Urlconstant.spreadsheetId,
          },
        }
      )
      .then((response) => {
        if (name === "contactNumber" && number.length === 10) {
          if (
            response.status === 200 &&
            response.data === "Contact Number Already Exists"
          ) {
            handleExistingDataPopup("Data Already Exists");
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
            handleExistingDataPopup("Data Already Exists");
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
      } else if (value.length >= 4 && value.length <= 12) {
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
          spreadsheetId: Urlconstant.spreadsheetId,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          handleExistingDataPopup("Data Already Exists");
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
    } else if (registerData.yop === 2026) {
      offeredAs = "INTERNSHIP";
    } else {
      offeredAs = "Non-CSR Offered";
    }
    const registerDto = {
      basicInfo: {
        contactNumber: registerData.contactNumber,
        email: registerData.email,
        traineeName: registerData.fullName,
      },
      alternateContactNumber: autoSetWhatsAppNumber,
      educationInfo: {
        collegeName: registerData.collegeName,
        qualification: registerData.qualification,
        stream: registerData.stream,
        yearOfPassout: registerData.yop,
      },
      usnNumber: registerData.usn,
      offeredAs: offeredAs,
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={8} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Grid container>
          {/* Left Side - Java Enterprise Application Info */}
          <Grid item xs={12} md={5} sx={{
            background: 'linear-gradient(135deg, #ff5e14 0%, #ff014f 100%)',
            color: 'white',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
              Enterprise Application Expertise
            </Typography>

            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <img
                src="https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/Gallery/2.png"
                alt="Java Enterprise Application"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
              />
            </Box>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
              Master Java Enterprise Development
            </Typography>

            <Box component="ul" sx={{ pl: 2, mb: 3 }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Comprehensive training in Java EE technologies
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Hands-on experience with enterprise application development
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Industry-relevant projects and case studies
              </Typography>
              <Typography component="li" variant="body1">
                Expert instructors with real-world experience
              </Typography>
            </Box>

            <Alert severity="info" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
              <Typography variant="body2">
CSR Internship Program open for students graduating in 2026.              </Typography>
            </Alert>
          </Grid>

          {/* Right Side - Registration Form */}
          <Grid item xs={12} md={7} sx={{ p: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h4" component="h1" sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #ff5e14 30%, #ff014f 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1
              }}>
                REGISTER HERE
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Join our Java Enterprise Application program
              </Typography>
            </Box>

            {save && (
              <Alert severity="success" sx={{ mb: 3 }}>
                {save} - Please check your email for further details
              </Alert>
            )}

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  value={registerData.fullName || ""}
                  onChange={handleSetData}
                  onBlur={handleNumberChange}
                  label="Full Name"
                  placeholder="Enter your full name"
                  name="fullName"
                  size="small"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  onChange={handleSetData}
                  onBlur={handleNumberChange}
                  placeholder="Enter Contact Number"
                  value={registerData.contactNumber || ""}
                  label="Contact Number"
                  name="contactNumber"
                  size="small"
                  error={!!phoneNumberError || !!numberCheck}
                  helperText={phoneNumberError || numberCheck}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  value={autoSetWhatsAppNumber || registerData.wattsAppNumber || ""}
                  onChange={handleSetData}
                  onBlur={handleNumberChange}
                  placeholder="Enter WhatsApp Number"
                  label="WhatsApp Number"
                  name="wattsAppNumber"
                  size="small"
                  error={!!wattsappNumberError || !!wattsappNumberCheck}
                  helperText={wattsappNumberError || wattsappNumberCheck}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  placeholder="Enter Email Address"
                  onChange={handleSetData}
                  onBlur={emailCheck || emailError ? "" : handleEmailVeryfy}
                  label="Email Address"
                  name="email"
                  value={registerData.email || ""}
                  size="small"
                  error={!!emailError || !!emailCheck || !!verifyHandaleEmailerror}
                  helperText={emailError || emailCheck || verifyHandaleEmailerror || (verifyHandaleEmail && "Email verified successfully")}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  placeholder="Enter USN / Roll No"
                  onChange={handleSetData}
                  onBlur={handleUsnCheck}
                  label="USN / Roll No"
                  name="usn"
                  value={registerData.usn || ""}
                  size="small"
                  error={!!usnError || !!usnCheck}
                  helperText={usnError || usnCheck}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Qualification *</InputLabel>
                  <Select
                    value={registerData.qualification || ""}
                    label="Qualification *"
                    required
                    name="qualification"
                    onChange={handleSetData}
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
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Stream *</InputLabel>
                  <Select
                    value={registerData.stream || ""}
                    label="Stream *"
                    required
                    name="stream"
                    onChange={handleSetData}
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
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>College Name *</InputLabel>
                  <Select
                    value={registerData.collegeName || ""}
                    label="College Name *"
                    required
                    name="collegeName"
                    onChange={handleSetData}
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
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Year of Passing *</InputLabel>
                  <Select
                    value={registerData.yop || ""}
                    label="Year of Passing *"
                    required
                    name="yop"
                    onChange={handleSetData}
                  >
                    {yearOfPassedOut.map((item, index) => (
                      <MenuItem value={item} key={index}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  aria-readonly
                  required
                  value={
                    registerData.yop
                      ? registerData.yop === 2025
                        ? "CSR"
                        : registerData.yop === 2026
                        ? "INTERNSHIP"
                        : "Non CSR"
                      : ""
                  }
                  placeholder="Offered As"
                  label="Offered As"
                  size="small"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button
                onClick={handleSubmit}
                disabled={isDiesabled}
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #ff5e14 30%, #ff014f 90%)',
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #e05512 30%, #e00146 90%)',
                  },
                  '&:disabled': {
                    background: '#cccccc',
                    color: '#666666'
                  }
                }}
              >
                {btn ? "Processing..." : "Register Now"}
              </Button>
            </Box>

            <Alert severity="info" sx={{ mt: 3 }}>
              <Typography variant="body2">
              <strong>Note:</strong> The CSR Internship Program is open only to 2026 YOP students. If your college is not listed, choose "Others".              </Typography>
            </Alert>

            <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#ff5e14' }}>
                For queries, contact:
              </Typography>
              <Typography variant="body2">
                 Kousalya: 9845658883 | Mamatha: 9886971480 | Bhumika Rathore: 9886971483
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Popup
        open={isopen}
        onClose={() => setIsopen(false)}
        modal
        closeOnDocumentClick
        contentStyle={{
          width: '400px',
          padding: '30px',
          borderRadius: '12px',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Checkmark size="5rem" color="#ff5e14" />
          <Typography variant="h5" sx={{ mt: 2, color: '#ff5e14', fontWeight: 'bold' }}>
            Registration Successful!
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {registerData.fullName} has been registered successfully.
          </Typography>
        </Box>
      </Popup>

      <Popup
        open={existingDataPopup}
        onClose={() => setExistingDataPopup(false)}
        modal
        closeOnDocumentClick
        contentStyle={{
          width: '400px',
          padding: '25px',
          borderRadius: '12px',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          position: 'relative' // Added for positioning the close button
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={() => setExistingDataPopup(false)}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'grey.500',
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box>
          <Typography variant="h6" sx={{ color: '#ff014f', mb: 2, fontWeight: 'bold' }}>
            {existingDataMessage}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Your data is already registered with us.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Please contact our HR team for assistance.
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // This will center the items
            mt: 3,
            mb: 3
          }}>
                    
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              <strong>Kousalya:</strong> 9845658883
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              <strong>Mamatha:</strong> 9886971480
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              <strong>Bhumika Rathore:</strong> 9886971483
            </Typography>
          </Box>
        </Box>
      </Popup>
    </Container>
  );
};