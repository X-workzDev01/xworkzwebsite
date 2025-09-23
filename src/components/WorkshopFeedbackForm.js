import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  TextField,
  Button,
  CircularProgress,
  Rating,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper
} from '@mui/material';
import React, { useState } from 'react';

export const WorkshopFeedbackForm = ({ feedback, handleChange, handleSubmit, loading }) => {
  const [formData, setFormData] = useState({
    // Rating questions
    overallExperience: 0,
    contentRelevance: '',
    trainerDelivery: '',
    practicalExamples: '',
    workshopPace: '',
    confidenceApplying: '',
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

  const isFormDisabled = () => {
    const requiredFields = [
      'overallExperience', 'contentRelevance', 'trainerDelivery', 
      'practicalExamples', 'workshopPace', 'confidenceApplying', 
      'workshopRecommendation', 'keyLearning', 'improvements'
    ];
    const personalInfoRequired = ['firstName', 'lastName', 'email', 'phone', 'college'];
    const personalInfoComplete = personalInfoRequired.every(field => feedback[field]);
    
    return requiredFields.some(field => !formData[field]) || !personalInfoComplete;
  };

  const submitForm = (event) => {
    event.preventDefault();
    const completeData = { ...formData };
    handleSubmit(completeData);
  };

  return (
    <Box component="form" onSubmit={submitForm}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: 'white' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, color: 'primary.main' }}>
          Workshop Feedback
        </Typography>

        <Grid container spacing={4}>
          {/* Question 1: Overall workshop experience rating */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                1. How would you rate your overall experience with this workshop? *
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Rating
                  name="overallExperience"
                  value={Number(formData.overallExperience) || 0}
                  onChange={(event, newValue) => handleRatingChange('overallExperience', newValue)}
                  size="large"
                />
                <Typography variant="caption" sx={{ mt: 1 }}>
                  (1 = Poor, 5 = Excellent)
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Question 2: Workshop content relevance */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                2. Was the workshop content relevant and useful? *
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
                4. Were the practical examples, activities, or demos helpful? *
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

          {/* Question 5: Workshop pace */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                5. How was the pace of the workshop? *
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

          {/* Question 6: Confidence in applying learnings */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                6. Do you feel confident applying what you learned in real-world scenarios? *
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  name="confidenceApplying"
                  value={formData.confidenceApplying || ''}
                  onChange={handleFormChange}
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="Somewhat" control={<Radio />} label="Somewhat" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>

          {/* Question 7: Workshop recommendation */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                7. Would you recommend this workshop to others? *
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

          {/* Question 8: Key learning */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                8. What is one key thing you learned from this workshop? *
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                name="keyLearning"
                value={formData.keyLearning || ''}
                onChange={handleFormChange}
                placeholder="Share one key thing you learned..."
                required
              />
            </Box>
          </Grid>

          {/* Question 9: Improvements for future workshops */}
          <Grid item xs={12}>
            <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
              <Typography sx={{ fontWeight: 'bold', mb: 2, color: 'error.main' }}>
                9. What could be improved in future workshops? *
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                name="improvements"
                value={formData.improvements || ''}
                onChange={handleFormChange}
                placeholder="Please share your suggestions for improvement..."
                required
              />
            </Box>
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isFormDisabled() || loading}
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
              {loading ? 'Submitting...' : 'Submit Workshop Feedback'}
            </Button>
          </Box>
        </Grid>
      </Paper>
    </Box>
  );
};