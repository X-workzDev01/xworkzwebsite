import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { Checkmark } from "react-checkmark";
import { Urlconstant } from "./constant/Urlconstant";
import { useSelector } from "react-redux";
import "./RegisterPopup.css";

const RegisterPopup = ({ isOpen, onClose, actionType = "enroll" }) => {
  const dropdown = useSelector((state) => state.dropdowns.dropdown);
  const [usnCheck, setUsnCheck] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [save, setSave] = useState("");
  const [btn, setbtn] = useState(false);
  const [registerData, setRegisterData] = useState({});
  const [autoSetWhatsAppNumber, setAutoSetWhatsAppNumber] = useState("");
  const [yearOfPassedOut] = useState([2023, 2024, 2025, 2026, 2027]);
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

  let isDisabled =
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

  const handleSubmit = () => {
    setbtn(true);
    let offeredAs;
    if (registerData.yop === 2025) {
      offeredAs = "CSR Offered";
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

    axios.post(Urlconstant.url + "api/csr/register", registerDto)
      .then((response) => {
        setIsSuccessOpen(true);
        setTimeout(() => {
          setRegisterData({});
          setAutoSetWhatsAppNumber("");
          setverifyHandleEmail("");
          setbtn(false);
          setSave(response.data);
          setIsSuccessOpen(false);
          onClose(); // Close popup after success
        }, 4000);
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        setbtn(false);
      });
  };

  const handleClose = () => {
    setRegisterData({});
    setAutoSetWhatsAppNumber("");
    setverifyHandleEmail("");
    onClose();
  };

  const getHeaderText = () => {
    return actionType === "syllabus" 
      ? "Download Course Syllabus" 
      : "Enroll in Course Program";
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={handleClose} 
      maxWidth="lg" 
      fullWidth
      className="register-popup"
    >
      <DialogTitle className="popup-header">
        <div className="header-content">
          <div className="header-text">
            <h2>{getHeaderText()}</h2>
            <p>Complete the registration form to proceed</p>
          </div>
        </div>
        <IconButton className="close-button" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent className="popup-content">
        <div className="popup-layout">
          <div className="popup-image">
            <img 
              src="https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/56.jpeg" 
              alt="Registration" 
            />
          </div>
          
          <div className="registration-form">
            {save && <div className="success-message">{save}</div>}
            
            <Grid container spacing={2}>
              {/* Row 1 */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={registerData.fullName || ""}
                  onChange={handleSetData}
                  label="Full Name"
                  name="fullName"
                  size="small"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={registerData.contactNumber || ""}
                  onChange={handleSetData}
                  onBlur={handleNumberChange}
                  label="Contact Number"
                  name="contactNumber"
                  size="small"
                  margin="normal"
                  error={!!phoneNumberError || !!numberCheck}
                  helperText={phoneNumberError || numberCheck}
                />
              </Grid>

              {/* Row 2 */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={autoSetWhatsAppNumber || registerData.wattsAppNumber || ""}
                  onChange={handleSetData}
                  onBlur={handleNumberChange}
                  label="WhatsApp Number"
                  name="wattsAppNumber"
                  size="small"
                  margin="normal"
                  error={!!wattsappNumberError || !!wattsappNumberCheck}
                  helperText={wattsappNumberError || wattsappNumberCheck}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={registerData.email || ""}
                  onChange={handleSetData}
                  onBlur={handleEmailVeryfy}
                  label="Email ID"
                  name="email"
                  size="small"
                  margin="normal"
                  error={!!emailError || !!emailCheck || !!verifyHandaleEmailerror}
                  helperText={emailError || emailCheck || verifyHandaleEmailerror || verifyHandaleEmail}
                />
              </Grid>

              {/* Row 3 */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={registerData.usn || ""}
                  onChange={handleSetData}
                  onBlur={handleUsnCheck}
                  label="USN / Roll Number"
                  name="usn"
                  size="small"
                  margin="normal"
                  error={!!usnError || !!usnCheck}
                  helperText={usnError || usnCheck}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small" margin="normal">
                  <InputLabel>Qualification *</InputLabel>
                  <Select
                    value={registerData.qualification || ""}
                    onChange={handleSetData}
                    name="qualification"
                    label="Qualification *"
                  >
                    {dropdown?.qualification?.map((item, index) => (
                      <MenuItem value={item} key={index}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Row 4 */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small" margin="normal">
                  <InputLabel>Stream *</InputLabel>
                  <Select
                    value={registerData.stream || ""}
                    onChange={handleSetData}
                    name="stream"
                    label="Stream *"
                  >
                    {dropdown?.stream?.map((item, index) => (
                      <MenuItem value={item} key={index}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small" margin="normal">
                  <InputLabel>College Name *</InputLabel>
                  <Select
                    value={registerData.collegeName || ""}
                    onChange={handleSetData}
                    name="collegeName"
                    label="College Name *"
                  >
                    {dropdown?.college?.map((item, index) => (
                      <MenuItem value={item} key={index}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Row 5 */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small" margin="normal">
                  <InputLabel>Year of Passing *</InputLabel>
                  <Select
                    value={registerData.yop || ""}
                    onChange={handleSetData}
                    name="yop"
                    label="Year of Passing *"
                  >
                    {yearOfPassedOut.map((year) => (
                      <MenuItem value={year} key={year}>{year}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  value={registerData.yop ? 
                    (registerData.yop === 2025 ? "CSR" : 
                     registerData.yop === 2026 ? "INTERNSHIP" : "Non CSR") : ""}
                  label="Offered As"
                  size="small"
                  margin="normal"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>

            <div className="form-actions">
              <Button
                onClick={handleSubmit}
                disabled={isDisabled}
                variant="contained"
                className="submit-button"
                size="large"
              >
                {btn ? "Processing..." : "Submit Registration"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterPopup;