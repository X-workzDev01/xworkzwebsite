// FeedbackForm.jsx - Updated with multi-column layout
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography
} from '@mui/material';
import React from 'react';
import { FeedbackRadioButton } from './FeedbackRadioButton';
import { FormControlRadio } from './FormControlRadio';

export const FeedbackForm = ({
  handleChange,
  handleSubmit,
  feedback,
  isDisabled,
  loading,
  isRegistered
}) => {
  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    if (value === 'Yes') {
      handleChange({ target: { name, value: 'Yes' } });
    } else {
      handleChange({ target: { name, value: 'No - ' } });
    }
  };

  const handleCommentChange = (name, comment) => {
    handleChange({ target: { name, value: `No - ${comment}` } });
  };

  const renderConditionalComment = (fieldName) => {
    const value = feedback?.[fieldName];
    if (value && value.startsWith('No - ')) {
      return (
        <Grid item xs={12}>
          <Box className="p-3">
            <TextField
              fullWidth
              multiline
              rows={3}
              value={value.substring(5)}
              onChange={(e) => handleCommentChange(fieldName, e.target.value)}
              placeholder="Please enter your comments..."
            />
          </Box>
        </Grid>
      );
    }
    return null;
  };

  const questionsForRegistered = [
    { name: 'practicalExecution', label: 'Practical execution' },
    { name: 'startingOnTime', label: 'Classes starting on time' },
    { name: 'assignmentProvided', label: 'Assignment provided' },
    { name: 'technicalDoubts', label: 'Are your technical doubts being resolved?' },
    { name: 'hrResponse', label: 'Is the HR team responding to your queries?' },
    { name: 'careerGuidance', label: 'Are you provided career guidance along with placements and classes?' },
    { name: 'mentorClarifyingDoubt', label: 'Is your mentor clarifying your doubts?' },
    { name: 'assignmentChecked', label: 'Is the assignment being checked daily?' }
  ];

  return (
    <div className="d-flex justify-content-center mb-5">
      <div className="d-flex justify-content-center bg-light shadow-3-strong rounded-4 w-75 p-4">
        <form onSubmit={handleSubmit} className="w-100">
          <div className="text-center mb-4">
            <Typography variant="h5">Please provide your feedback</Typography>
          </div>

          {/* Trainer Quality Rating */}
          <Grid container spacing={3} className="mb-4">
            <Grid item xs={12}>
              <Box className="shadow-5 bg-white rounded-4 p-3">
                <Typography className="text-danger pe-2 ps-2">
                  How would you rate the trainer's quality? (5 being the highest, 1 being the lowest) *
                </Typography>
                <Box className="mt-2 text-center">
                  <FormControlRadio
                    handleChange={handleChange}
                    name="trainer"
                    value={feedback?.trainer || ''}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Yes/No Questions in 2 columns */}
          <Grid container spacing={3}>
            {questionsForRegistered.map(({ name, label }) => (
              <React.Fragment key={name}>
                <Grid item xs={12} md={6}>
                  <Box className="shadow-5 rounded-4 bg-white p-3 h-100">
                    <FeedbackRadioButton
                      handleChange={handleRadioChange}
                      content={`${label} *`}
                      name={name}
                      feedback={{ [name]: feedback[name]?.startsWith('No - ') ? 'No' : feedback[name] }}
                    />
                    {renderConditionalComment(name)}
                  </Box>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          {/* X-workz Environment Rating */}
          <Grid container spacing={3} className="mt-3">
            <Grid item xs={12}>
              <Box className="shadow-5 rounded-4 bg-white p-3">
                <Typography className="text-danger">
                  How would you rate the X-workz environment? (5 being the highest, 1 being the lowest) *
                </Typography>
                <Box className="mt-2 text-center">
                  <FormControlRadio
                    handleChange={handleChange}
                    name="xworkzEnvironment"
                    value={feedback?.xworkzEnvironment || ''}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Mock Score Question */}
          <Grid container spacing={3} className="mt-3">
            <Grid item xs={12}>
              <Box className="shadow-5 rounded-4 bg-white p-3">
                <FeedbackRadioButton
                  handleChange={handleRadioChange}
                  content="Are you receiving updates about your mock scores and test scores? *"
                  name="mockScore"
                  feedback={{ mockScore: feedback.mockScore?.startsWith('No - ') ? 'No' : feedback.mockScore }}
                />
                {renderConditionalComment('mockScore')}
              </Box>
            </Grid>
          </Grid>

          {/* Suggestion/Feedback */}
          <Grid container spacing={3} className="mt-3">
            <Grid item xs={12}>
              <Box className="shadow-5 rounded-4 bg-white p-3">
                <Typography className="text-danger">Suggestion/Feedback *</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  name="feedbackSuggestion"
                  value={feedback.feedbackSuggestion || ''}
                  onChange={handleChange}
                  placeholder="Please enter your feedback here..."
                  required
                />
              </Box>
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Grid container spacing={3} className="mt-4">
            <Grid item xs={12} className="text-center">
              <Button
                type="submit"
                disabled={isDisabled || loading}
                variant="contained"
                size="large"
              >
                {loading ? 'Submitting...' : 'Submit Feedback'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};