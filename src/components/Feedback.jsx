import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  CircularProgress,
  Box,
  useTheme,
  useMediaQuery,
  Rating
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBatchName,
  getBatchNameByCourseDetails
} from '../store/dropdowns/RegistrationDropDownSlice';
import { FeedbackForm } from './FeedbackForm';
import { NonRegisteredFeedbackForm } from './NonRegisteredFeedbackForm'; // New component
import axios from 'axios';
import { Urlconstant } from './constant/Urlconstant';
import Swal from 'sweetalert2';

export const Feedback = () => {
  const dispatch = useDispatch();
  const { batchName, courseName } = useSelector(state => state.dropdowns);
  const [feedback, setFeedback] = useState({ isRegistered: null });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    dispatch(fetchBatchName());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'course') {
      const selectedCourse = courseName.find(c => c.subCourseName === value);
      setFeedback(prev => ({
        ...prev,
        [name]: value,
        trainerName: selectedCourse?.trainerName || ''
      }));
    } else {
      setFeedback(prev => ({ ...prev, [name]: value }));
    }
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

    setLoading(true);
    setEmailError("");

    try {
      const response = await axios.get(`${Urlconstant.url}api/readByEmail`, {
        params: { email: feedback.email },
        headers: { spreadsheetId: Urlconstant.spreadsheetId },
      });

      if (response.data) {
        const { course: batch } = response.data.courseInfo;
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
        setEmailError("Email not registered");
      }
    } catch (error) {
      setEmailError(error.response?.data?.message || "Verification failed");
      setEmailVerified(false);
    } finally {
      setLoading(false);
    }
  };

  const handleIsRegisteredChange = (value) => {
    setFeedback({ isRegistered: value, email: '' });
    setEmailVerified(false);
    setEmailError('');
  };

  const isDisabled = () => {
    if (feedback.isRegistered === 'yes') {
      const registeredFields = [
        'trainer',
        'practicalExecution',
        'startingOnTime',
        'assignmentProvided',
        'technicalDoubts',
        'assignmentChecked',
        'feedbackSuggestion',
        'hrResponse',
        'careerGuidance',
        'mentorClarifyingDoubt',
        'xworkzEnvironment',
        'mockScore'
      ];
      return registeredFields.some(field => !feedback[field]);
    } else if (feedback.isRegistered === 'no') {
      const nonRegisteredFields = [
        'source',
        'purpose',
        'findInfoEase',
        'websiteSatisfaction',
        'workshopRating',
        'workshopUsefulness',
        'trainerRating',
        'supportSatisfaction',
        'queryAddressed',
        'likes',
        'improvements',
        'recommendation'
      ];
      return nonRegisteredFields.some(field => !feedback[field]);
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    try {
      let feedbackData;
      
      if (feedback.isRegistered === 'yes') {
        const selectedCourse = courseName.find(c => c.subCourseName === feedback.course);
        feedbackData = {
          ...feedback,
          batchId: selectedCourse?.batchId || "NA",
          courseId: selectedCourse?.id || "NA",
          email: feedback.email,
          isRegistered: true,
          trainerName: feedback.trainerName,
          type: 'registered'
        };
      } else {
        feedbackData = {
          ...feedback,
          email: feedback.email || 'anonymous',
          isRegistered: false,
          type: 'non-registered'
        };
      }

      await axios.post(
        `${Urlconstant.FEEDBACK_URL}api/feedback/saveFeedback`,
        feedbackData
      );

      Swal.fire({
        title: 'Success!',
        text: 'Feedback submitted successfully',
        icon: 'success',
      });
      setFeedback({ isRegistered: null });
      setEmailVerified(false);
    } catch (error) {
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
    <Box className="container" sx={{ padding: isMobile ? 2 : 3 }}>
      {feedback.isRegistered === null && (
        <Box display="flex" justifyContent="center" mb={4}>
          <Box width={isMobile ? '100%' : 500} p={3} boxShadow={3} borderRadius={2}>
            <h5 className="text-center mb-4">Are you a registered trainee?</h5>
            <RadioGroup
              row
              name="isRegistered"
              onChange={(e) => handleIsRegisteredChange(e.target.value)}
              sx={{ justifyContent: 'center' }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
        </Box>
      )}

      {feedback.isRegistered === 'yes' && !emailVerified && (
        <Box display="flex" justifyContent="center">
          <Box width={isMobile ? '100%' : 500} p={3} boxShadow={3} borderRadius={2}>
            <h5 className="text-center mb-4">Verify your registration</h5>
            <TextField
              fullWidth
              label="Registered Email"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              error={!!emailError}
              helperText={emailError}
              disabled={loading}
              sx={{ mb: 2 }}
            />
            <Box textAlign="center">
              <Button
                variant="contained"
                onClick={handleEmailCheck}
                disabled={loading || !feedback.email}
                startIcon={loading ? <CircularProgress size={20} /> : null}
              >
                {loading ? 'Verifying...' : 'Verify Email'}
              </Button>
            </Box>
          </Box>
        </Box>
      )}

      {feedback.isRegistered === 'no' && (
        <Box display="flex" justifyContent="center" mb={4}>
          <Box width={isMobile ? '100%' : '60%'} p={3} boxShadow={3} borderRadius={2}>
            <h5 className="text-center mb-4">Optional Contact Email</h5>
            <TextField
              fullWidth
              label="Email (optional)"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </Box>
        </Box>
      )}

      {feedback.isRegistered === 'yes' && emailVerified && (
        <Box display="flex" justifyContent="center" my={4}>
          <Box width={isMobile ? '100%' : '60%'} p={2} boxShadow={3} borderRadius={2}>
            <h5 className="text-center mb-4">Your Details</h5>
            <Box display="flex" gap={2} flexWrap="wrap">
              <TextField
                fullWidth
                label="Your Batch"
                value={feedback.batch || "Not found"}
                InputProps={{ readOnly: true }}
                size="small"
                sx={{ flex: 1, minWidth: 200 }}
              />
              <FormControl fullWidth sx={{ flex: 1, minWidth: 200 }}>
                <InputLabel>Select Course *</InputLabel>
                <Select
                  name="course"
                  value={feedback.course || ''}
                  onChange={handleChange}
                  required
                  size="small"
                >
                  {courseName.map((item) => (
                    <MenuItem key={item.id} value={item.subCourseName}>
                      {item.subCourseName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Trainer Name"
                value={feedback.trainerName || ''}
                InputProps={{ readOnly: true }}
                size="small"
                sx={{ flex: 1, minWidth: 200 }}
              />
            </Box>
          </Box>
        </Box>
      )}

      {feedback.isRegistered === 'yes' && emailVerified && (
        <FeedbackForm
          isDisabled={isDisabled()}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          feedback={feedback}
          loading={loading}
        />
      )}

      {feedback.isRegistered === 'no' && (
        <NonRegisteredFeedbackForm
          isDisabled={isDisabled()}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          feedback={feedback}
          loading={loading}
        />
      )}
    </Box>
  );
};