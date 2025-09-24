import {
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  CircularProgress,
  Rating,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper
} from '@mui/material';
import React, { useState } from 'react';

export const RegularClassFeedbackForm = ({ feedback, handleChange, handleSubmit, loading }) => {
  const [formData, setFormData] = useState({
    // Rating questions
    overallExperience: 0,
    contentRelevance: '',
    trainerDelivery: '',
    practicalExamples: '',
    workshopPace: '',
    doubtSupport: '',
    projectGuidance: '',
    workshopRecommendation: '',
    
    // Text questions
    keyLearning: '',
    improvements: ''
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      overallExperience: 0,
      contentRelevance: '',
      trainerDelivery: '',
      practicalExamples: '',
      workshopPace: '',
      doubtSupport: '',
      projectGuidance: '',
      workshopRecommendation: '',
      keyLearning: '',
      improvements: ''
    });
  };

  const isFormDisabled = () => {
    // Check if course is selected
    const isCourseSelected = !!feedback.course;
    
    // Check if main feedback questions are filled
    const mainQuestions = [
      'overallExperience', 'contentRelevance', 'trainerDelivery', 
      'practicalExamples', 'workshopPace', 'doubtSupport', 
      'projectGuidance', 'workshopRecommendation', 'keyLearning', 'improvements'
    ];
    const mainQuestionsComplete = mainQuestions.every(field => {
      const value = formData[field];
      return value !== undefined && value !== null && value !== '' && value !== 0;
    });

    return !isCourseSelected || !mainQuestionsComplete || loading;
  };

  const submitForm = (event) => {
    event.preventDefault();
    handleSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={submitForm}>
      <Paper elevation={3} sx={{ p: 4, mb: 4, backgroundColor: 'white' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, color: 'primary.main' }}>
          Regular Class Feedback
        </Typography>
        
        <Grid container spacing={4}>
          {/* Question 1: Overall experience rating */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                1. How would you rate your overall experience with this course? *
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Rating
                  name="overallExperience"
                  value={Number(formData.overallExperience) || 0}
                  onChange={(event, newValue) => handleRatingChange('overallExperience', newValue)}
                  size="large"
                />
              </Box>
            </Box>
          </Grid>

          {/* Question 2: Course content relevance */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                2. Was the course content relevant and useful? *
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  name="contentRelevance"
                  value={formData.contentRelevance || ''}
                  onChange={handleFormChange}
                >
                  <FormControlLabel value="Yes, very useful" control={<Radio />} label="Yes, very useful" />
                  <FormControlLabel value="Somewhat useful" control={<Radio />} label="Somewhat useful" />
                  <FormControlLabel value="Not useful" control={<Radio />} label="Not useful" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>

          {/* Question 3: Trainer's delivery and engagement */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                3. How would you rate the trainer's delivery and engagement? *
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  name="trainerDelivery"
                  value={formData.trainerDelivery || ''}
                  onChange={handleFormChange}
                >
                  <FormControlLabel value="Excellent" control={<Radio />} label="Excellent" />
                  <FormControlLabel value="Good" control={<Radio />} label="Good" />
                  <FormControlLabel value="Average" control={<Radio />} label="Average" />
                  <FormControlLabel value="Needs improvement" control={<Radio />} label="Needs improvement" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>

          {/* Question 4: Practical examples helpfulness */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                4. Were the practical examples and hands-on sessions helpful? *
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  name="practicalExamples"
                  value={formData.practicalExamples || ''}
                  onChange={handleFormChange}
                >
                  <FormControlLabel value="Very helpful" control={<Radio />} label="Very helpful" />
                  <FormControlLabel value="Somewhat helpful" control={<Radio />} label="Somewhat helpful" />
                  <FormControlLabel value="Not helpful" control={<Radio />} label="Not helpful" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>

          {/* Question 5: Course pace */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                5. How was the pace of the course? *
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  name="workshopPace"
                  value={formData.workshopPace || ''}
                  onChange={handleFormChange}
                >
                  <FormControlLabel value="Too fast" control={<Radio />} label="Too fast" />
                  <FormControlLabel value="Just right" control={<Radio />} label="Just right" />
                  <FormControlLabel value="Too slow" control={<Radio />} label="Too slow" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>

          {/* Question 6: Doubt resolution support */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                6. How effective was the doubt resolution support? *
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  name="doubtSupport"
                  value={formData.doubtSupport || ''}
                  onChange={handleFormChange}
                >
                  <FormControlLabel value="Excellent" control={<Radio />} label="Excellent" />
                  <FormControlLabel value="Good" control={<Radio />} label="Good" />
                  <FormControlLabel value="Average" control={<Radio />} label="Average" />
                  <FormControlLabel value="Needs improvement" control={<Radio />} label="Needs improvement" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>

          {/* Question 7: Project guidance */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                7. How would you rate the project guidance provided? *
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  name="projectGuidance"
                  value={formData.projectGuidance || ''}
                  onChange={handleFormChange}
                >
                  <FormControlLabel value="Exceptional guidance" control={<Radio />} label="Exceptional guidance" />
                  <FormControlLabel value="Good support" control={<Radio />} label="Good support" />
                  <FormControlLabel value="Basic guidance" control={<Radio />} label="Basic guidance" />
                  <FormControlLabel value="Lacking support" control={<Radio />} label="Lacking support" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>

          {/* Question 8: Course recommendation */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                8. Would you recommend this course to others? *
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  name="workshopRecommendation"
                  value={formData.workshopRecommendation || ''}
                  onChange={handleFormChange}
                >
                  <FormControlLabel value="Definitely yes" control={<Radio />} label="Definitely yes" />
                  <FormControlLabel value="Maybe" control={<Radio />} label="Maybe" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>

          {/* Question 9: Key learning */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                9. What is one key thing you learned from this course? *
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                name="keyLearning"
                value={formData.keyLearning || ''}
                onChange={handleFormChange}
                placeholder="Share one key thing you learned..."
                error={!formData.keyLearning}
                helperText={!formData.keyLearning ? "This field is required" : ""}
              />
            </Box>
          </Grid>

          {/* Question 10: Improvements */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                10. What could be improved in future courses? *
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                name="improvements"
                value={formData.improvements || ''}
                onChange={handleFormChange}
                placeholder="Please share your suggestions for improvement..."
                error={!formData.improvements}
                helperText={!formData.improvements ? "This field is required" : ""}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Buttons - Centered with gap */}
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Box display="flex" justifyContent="center" gap={3}>
            <Button
              type="button"
              variant="outlined"
              size="large"
              onClick={handleReset}
              disabled={loading}
              sx={{
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                border: '2px solid #ff5e14',
                color: '#ff5e14',
                '&:hover': {
                  border: '2px solid #e05512',
                  backgroundColor: 'rgba(255, 94, 20, 0.04)'
                }
              }}
            >
              Reset
            </Button>
            
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isFormDisabled()}
              startIcon={loading ? <CircularProgress size={20} /> : null}
              sx={{
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
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
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </Button>
          </Box>
        </Grid>
      </Paper>
    </Box>
  );
};