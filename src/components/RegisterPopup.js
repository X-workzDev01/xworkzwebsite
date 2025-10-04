import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./RegisterPopup.css";

const RegisterPopup = ({ isOpen, onClose, course }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    category: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.category) {
      newErrors.category = "Please select an option";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const handleClose = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      category: "",
      message: ""
    });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={handleClose} 
      maxWidth="md" 
      fullWidth
      className="register-popup"
    >
      <DialogTitle className="popup-header">
        <div className="header-content">
          <div className="header-text">
            <h2>Download {course?.title || "Course"} Syllabus</h2>
            <p>Complete the form to get the syllabus</p>
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
              src="https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/Gallery/DownloadSyllabus.png" 
              alt="Syllabus Download" 
            />
          </div>
          
          <div className="registration-form">
            {isSuccess ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>You will receive an email about the Syllabus shortly.</p>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  className="submit-button"
                  style={{marginTop: '15px'}}
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      value={formData.firstName}
                      onChange={handleChange}
                      label="First Name"
                      name="firstName"
                      size="small"
                      margin="normal"
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      value={formData.lastName}
                      onChange={handleChange}
                      label="Last Name"
                      name="lastName"
                      size="small"
                      margin="normal"
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      label="Phone Number"
                      name="phoneNumber"
                      size="small"
                      margin="normal"
                      error={!!errors.phoneNumber}
                      helperText={errors.phoneNumber}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                      label="Email"
                      name="email"
                      size="small"
                      margin="normal"
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth size="small" margin="normal" error={!!errors.category}>
                      <InputLabel>College or Occupation *</InputLabel>
                      <Select
                        value={formData.category}
                        onChange={handleChange}
                        name="category"
                        label="College or Occupation *"
                      >
                        <MenuItem value="student">Student</MenuItem>
                        <MenuItem value="working">Working Professional</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                      {errors.category && (
                        <div className="error-text">{errors.category}</div>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      label="Message (Optional)"
                      name="message"
                      size="small"
                      margin="normal"
                    />
                  </Grid>
                </Grid>

                <div className="form-actions">
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    variant="contained"
                    className="submit-button"
                    size="large"
                  >
                    {isSubmitting ? "Processing..." : "Get Syllabus"}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterPopup;