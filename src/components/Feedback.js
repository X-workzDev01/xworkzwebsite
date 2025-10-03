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
  CircularProgress,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBatchName,
  getBatchNameByCourseDetails
} from '../store/dropdowns/RegistrationDropDownSlice';
import { RegularClassFeedbackForm } from './RegularClassFeedbackForm';
import { WorkshopFeedbackForm } from './WorkshopFeedbackForm';
import axios from "axios";
import { Urlconstant } from "./constant/Urlconstant";
import Swal from "sweetalert2";

export const Feedback = () => {
  const dispatch = useDispatch();
  const { batchName, courseName } = useSelector(state => state.dropdowns);
  const [feedbackType, setFeedbackType] = useState(null);
  const [feedback, setFeedback] = useState({ 
    type: null,
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    college: '',
    batch: '',
    course: '',
    trainerName: ''
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [verifyBtnLoading, setVerifyBtnLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchBatchName());
  }, [dispatch]);

  // Update trainer name when course is selected
  useEffect(() => {
    if (feedback.course && courseName.length > 0) {
      const selectedCourse = courseName.find(c => c.subCourseName === feedback.course);
      if (selectedCourse) {
        setFeedback(prev => ({ ...prev, trainerName: selectedCourse.trainerName || '' }));
      }
    }
  }, [feedback.course, courseName]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFeedback(prev => ({ ...prev, [name]: value }));
  };

  const handleEmailCheck = async () => {
    if (!feedback.email) {
      setEmailError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(feedback.email)) {
      setEmailError("Invalid email format");
      return;
    }

    setVerifyBtnLoading(true);
    setEmailError("");

    try {
      const response = await axios.get(`${Urlconstant.url}api/readByEmail`, {
        params: { email: feedback.email },
        headers: { spreadsheetId: Urlconstant.spreadsheetId },
      });

      if (response.data && response.data.courseInfo) {
        const { course: batch } = response.data.courseInfo;
        setStudentData(response.data);
        
        setFeedback(prev => ({
          ...prev,
          batch,
          course: "",
          trainerName: ""
        }));
        
        dispatch(getBatchNameByCourseDetails(batch));
        setEmailVerified(true);
      } else {
        setEmailVerified(false);
        setEmailError("Email not registered for any course");
      }
    } catch (error) {
      setEmailError(error.response?.data?.message || "Verification failed");
      setEmailVerified(false);
    } finally {
      setVerifyBtnLoading(false);
    }
  };

  const handleFeedbackTypeChange = (type) => {
    setFeedbackType(type);
    setFeedback({ 
      type,
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      college: '',
      batch: '',
      course: '',
      trainerName: ''
    });
    setEmailVerified(false);
    setEmailError('');
    setStudentData(null);
  };

  // Function to get client IP address
  const getClientIP = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      return response.data.ip;
    } catch (error) {
      console.error('Error fetching IP:', error);
      return 'NA';
    }
  };

  const handleSubmit = async (formData) => {
    setLoading(true);
    
    try {
      const clientIP = await getClientIP();
      const currentDate = new Date().toISOString();

      // 🎯 FIX: Get the selected course object to extract IDs
      let selectedCourse = null;
      if (feedbackType === 'regular' && feedback.course) {
        selectedCourse = courseName.find(c => c.subCourseName === feedback.course);
      }

      // Prepare base data for both feedback types
      let submitData = {
        feedbackType: feedbackType === 'regular' ? 'RegularClassFeedback' : 'WorkshopFeedback',
        systemIpAddress: clientIP,
        feedbackSubmitDate: currentDate,
        
        // Common fields
        email: feedback.email || 'NA',
        
        // 🎯 FIXED: Correct ID mapping for Regular Class
        batchId: feedbackType === 'regular' ? (selectedCourse?.batchId || 'NA') : 'NA',
        courseId: feedbackType === 'regular' ? (selectedCourse?.id || 'NA') : 'NA',
        trainerName: feedbackType === 'regular' ? feedback.trainerName : 'NA',
        
        // Workshop specific fields
        fullName: feedbackType === 'workshop' ? `${feedback.firstName} ${feedback.lastName}`.trim() : 'NA',
        phoneNumber: feedbackType === 'workshop' ? feedback.phone : 'NA',
        collegeName: feedbackType === 'workshop' ? feedback.college : 'NA',
      };

      // Question mapping
      if (feedbackType === 'regular') {
        // Regular Class - 10 questions mapped to question1-question10
        submitData = {
          ...submitData,
          question1: formData.overallExperience?.toString() || 'NA',
          question2: formData.contentRelevance || 'NA',
          question3: formData.trainerDelivery || 'NA',
          question4: formData.practicalExamples || 'NA',
          question5: formData.workshopPace || 'NA',
          question6: formData.doubtSupport || 'NA',
          question7: formData.projectGuidance || 'NA',
          question8: formData.workshopRecommendation || 'NA',
          question9: formData.keyLearning || 'NA',
          question10: formData.improvements || 'NA'
        };
      } else {
        // Workshop - 9 questions mapped to question1-question9, question10 as 'NA'
        submitData = {
          ...submitData,
          question1: formData.overallExperience?.toString() || 'NA',
          question2: formData.contentRelevance || 'NA',
          question3: formData.trainerDelivery || 'NA',
          question4: formData.practicalExamples || 'NA',
          question5: formData.workshopPace || 'NA',
          question6: formData.confidenceApplying || 'NA',
          question7: formData.workshopRecommendation || 'NA',
          question8: formData.keyLearning || 'NA',
          question9: formData.improvements || 'NA',
          question10: 'NA'
        };
      }


      const endpoint = `${Urlconstant.FEEDBACK_URL}api/feedback/saveFeedback`;

      const response = await axios.post(endpoint, submitData);

      Swal.fire({
        title: 'Success!',
        text: `${
          feedbackType === 'regular' ? 'Regular Class' : 'Workshop'
        } feedback submitted successfully`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
      
      // Reset form
      setFeedbackType(null);
      setFeedback({ 
        type: null,
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        college: '',
        batch: '',
        course: '',
        trainerName: ''
      });
      setEmailVerified(false);
      setStudentData(null);
    } catch (error) {
      console.error('Submission error:', error);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Submission failed',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={8} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Box sx={{ p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" component="h1" sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #ff5e14 30%, #ff014f 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1
            }}>
              FEEDBACK FORM
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Help us improve our training programs
            </Typography>
          </Box>

          {/* Feedback Type Selection */}
          {!feedbackType && (
            <Box sx={{ 
              mb: 4, 
              p: 4, 
              border: '1px solid #e0e0e0', 
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'white'
            }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
                Select Feedback Type *
              </Typography>
              <RadioGroup
                row
                value={feedbackType}
                onChange={(e) => handleFeedbackTypeChange(e.target.value)}
                sx={{ gap: 4, justifyContent: 'center', mt: 3 }}
              >
                <FormControlLabel 
                  value="regular" 
                  control={<Radio color="primary" />} 
                  label="Regular Class Feedback" 
                />
                <FormControlLabel 
                  value="workshop" 
                  control={<Radio color="primary" />} 
                  label="Workshop Feedback" 
                />
              </RadioGroup>
            </Box>
          )}

          {/* Regular Class Feedback - Email Verification */}
          {feedbackType === 'regular' && !emailVerified && (
            <Box sx={{ 
              mb: 4, 
              p: 4, 
              border: '1px solid #e0e0e0', 
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'white'
            }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
                Regular Class Feedback - Verify Registration
              </Typography>
              <Alert severity="info" sx={{ mb: 3 }}>
                Please enter the email address you used for course registration
              </Alert>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Registered Email *"
                    name="email"
                    value={feedback.email}
                    onChange={handleChange}
                    error={!!emailError}
                    helperText={emailError}
                    disabled={verifyBtnLoading}
                    size="medium"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Box display="flex" justifyContent="center">
                    <Button
                      variant="contained"
                      onClick={handleEmailCheck}
                      disabled={verifyBtnLoading || !feedback.email}
                      startIcon={verifyBtnLoading ? <CircularProgress size={20} /> : null}
                      sx={{ 
                        height: '45px',
                        minWidth: '200px',
                        px: 4
                      }}
                    >
                      {verifyBtnLoading ? 'Verifying...' : 'Verify Email'}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}

          {/* Workshop Feedback - Personal Information */}
          {feedbackType === 'workshop' && (
            <Box sx={{ 
              mb: 4, 
              p: 4, 
              border: '1px solid #e0e0e0', 
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'white'
            }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
                Participant Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name *"
                    name="firstName"
                    value={feedback.firstName}
                    onChange={handleChange}
                    size="medium"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name *"
                    name="lastName"
                    value={feedback.lastName}
                    onChange={handleChange}
                    size="medium"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email *"
                    name="email"
                    type="email"
                    value={feedback.email}
                    onChange={handleChange}
                    size="medium"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number *"
                    name="phone"
                    value={feedback.phone}
                    onChange={handleChange}
                    size="medium"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="College/Company *"
                    name="college"
                    value={feedback.college}
                    onChange={handleChange}
                    size="medium"
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {/* Regular Class - Student Details after verification */}
          {feedbackType === 'regular' && emailVerified && (
            <Box sx={{ 
              mb: 4, 
              p: 4, 
              border: '1px solid #e0e0e0', 
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'white'
            }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
                Your Course Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Your Batch"
                    value={feedback.batch || "Not found"}
                    InputProps={{ readOnly: true }}
                    size="medium"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth size="medium">
                    <InputLabel>Select Course *</InputLabel>
                    <Select
                      name="course"
                      value={feedback.course || ''}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    >
                      {courseName.map((item) => (
                        <MenuItem key={item.id} value={item.subCourseName}>
                          {item.subCourseName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Trainer Name"
                    value={feedback.trainerName || ''}
                    InputProps={{ readOnly: true }}
                    size="medium"
                    variant="filled"
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {/* Render Appropriate Feedback Form */}
          {feedbackType === 'regular' && emailVerified && (
            <RegularClassFeedbackForm
              feedback={feedback}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          )}

          {feedbackType === 'workshop' && (
            <WorkshopFeedbackForm
              feedback={feedback}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          )}
        </Box>
      </Paper>
    </Container>
  );
};