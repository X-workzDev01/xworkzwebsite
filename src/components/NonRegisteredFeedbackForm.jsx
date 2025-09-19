// NonRegisteredFeedbackForm.jsx - Updated with multi-column layout
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
  Grid
} from '@mui/material';
import { Rating } from '@mui/material';
import React from 'react';

export const NonRegisteredFeedbackForm = ({
  handleChange,
  handleSubmit,
  feedback,
  isDisabled,
  loading
}) => {
  return (
    <div className="d-flex justify-content-center mb-5">
      <div className="d-flex justify-content-center bg-light shadow-3-strong rounded-4 w-75 p-4">
        <form onSubmit={handleSubmit} className="w-100">
          <div className="text-center mb-4">
            <Typography variant="h5">Please provide your feedback</Typography>
          </div>

          {/* Row 1: Questions 1-2 */}
          <Grid container spacing={3}>
            {/* Question 1: How did you come to know about X-workz? */}
            <Grid item xs={12} md={6}>
              <Box className="shadow-5 bg-white rounded-4 p-3 h-100">
                <Typography className="text-danger mb-2">
                  1. How did you come to know about X-workz? *
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Select source</InputLabel>
                  <Select
                    name="source"
                    value={feedback.source || ''}
                    onChange={handleChange}
                    label="Select source"
                    required
                  >
                    <MenuItem value="Website">Website</MenuItem>
                    <MenuItem value="Social Media">Social Media</MenuItem>
                    <MenuItem value="College">College</MenuItem>
                    <MenuItem value="Friends">Friends</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* Question 2: What was the main purpose of visiting our website? */}
            <Grid item xs={12} md={6}>
              <Box className="shadow-5 bg-white rounded-4 p-3 h-100">
                <Typography className="text-danger mb-2">
                  2. What was the main purpose of visiting our website? *
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Select purpose</InputLabel>
                  <Select
                    name="purpose"
                    value={feedback.purpose || ''}
                    onChange={handleChange}
                    label="Select purpose"
                    required
                  >
                    <MenuItem value="Workshops">To know about workshops</MenuItem>
                    <MenuItem value="Training Programs">Training programs</MenuItem>
                    <MenuItem value="Placement Support">Placement support</MenuItem>
                    <MenuItem value="CSR Activities">CSR activities</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          {/* Row 2: Questions 3-4 */}
          <Grid container spacing={3} className="mt-3">
            {/* Question 3: How easy was it to find the required information on our website? */}
            <Grid item xs={12} md={6}>
              <Box className="shadow-5 bg-white rounded-4 p-3 h-100">
                <Typography className="text-danger mb-2">
                  3. How easy was it to find the required information on our website? *
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Select ease level</InputLabel>
                  <Select
                    name="findInfoEase"
                    value={feedback.findInfoEase || ''}
                    onChange={handleChange}
                    label="Select ease level"
                    required
                  >
                    <MenuItem value="Very Easy">Very Easy</MenuItem>
                    <MenuItem value="Easy">Easy</MenuItem>
                    <MenuItem value="Neutral">Neutral</MenuItem>
                    <MenuItem value="Difficult">Difficult</MenuItem>
                    <MenuItem value="Very Difficult">Very Difficult</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* Question 4: How satisfied are you with the clarity, design, and navigation of the website? */}
            <Grid item xs={12} md={6}>
              <Box className="shadow-5 bg-white rounded-4 p-3 h-100">
                <Typography className="text-danger mb-2">
                  4. How satisfied are you with the clarity, design, and navigation of the website? *
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Select satisfaction level</InputLabel>
                  <Select
                    name="websiteSatisfaction"
                    value={feedback.websiteSatisfaction || ''}
                    onChange={handleChange}
                    label="Select satisfaction level"
                    required
                  >
                    <MenuItem value="Very Satisfied">Very Satisfied</MenuItem>
                    <MenuItem value="Satisfied">Satisfied</MenuItem>
                    <MenuItem value="Neutral">Neutral</MenuItem>
                    <MenuItem value="Dissatisfied">Dissatisfied</MenuItem>
                    <MenuItem value="Very Dissatisfied">Very Dissatisfied</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          {/* Row 3: Questions 5-6 */}
          <Grid container spacing={3} className="mt-3">
            {/* Question 5: If you attended our workshop, how would you rate the overall session? */}
            <Grid item xs={12} md={6}>
              <Box className="shadow-5 bg-white rounded-4 p-3 h-100">
                <Typography className="text-danger mb-2">
                  5. If you attended our workshop, how would you rate the overall session? *
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Rating
                    name="workshopRating"
                    value={Number(feedback.workshopRating) || 0}
                    onChange={(event, newValue) => {
                      handleChange({ target: { name: 'workshopRating', value: newValue.toString() } });
                    }}
                    size="large"
                  />
                </Box>
              </Box>
            </Grid>

            {/* Question 6: How relevant and useful was the workshop for your learning and career growth? */}
            <Grid item xs={12} md={6}>
              <Box className="shadow-5 bg-white rounded-4 p-3 h-100">
                <Typography className="text-danger mb-2">
                  6. How relevant and useful was the workshop for your learning and career growth? *
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Select usefulness</InputLabel>
                  <Select
                    name="workshopUsefulness"
                    value={feedback.workshopUsefulness || ''}
                    onChange={handleChange}
                    label="Select usefulness"
                    required
                  >
                    <MenuItem value="Very Useful">Very Useful</MenuItem>
                    <MenuItem value="Useful">Useful</MenuItem>
                    <MenuItem value="Neutral">Neutral</MenuItem>
                    <MenuItem value="Not Useful">Not Useful</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          {/* Row 4: Questions 7-8 */}
          <Grid container spacing={3} className="mt-3">
            {/* Question 7: How would you rate the trainer's knowledge, communication, and delivery style? */}
            <Grid item xs={12} md={6}>
              <Box className="shadow-5 bg-white rounded-4 p-3 h-100">
                <Typography className="text-danger mb-2">
                  7. How would you rate the trainer's knowledge, communication, and delivery style? *
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Select rating</InputLabel>
                  <Select
                    name="trainerRating"
                    value={feedback.trainerRating || ''}
                    onChange={handleChange}
                    label="Select rating"
                    required
                  >
                    <MenuItem value="Excellent">Excellent</MenuItem>
                    <MenuItem value="Good">Good</MenuItem>
                    <MenuItem value="Average">Average</MenuItem>
                    <MenuItem value="Needs Improvement">Needs Improvement</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* Question 8: How satisfied are you with the communication and support provided by the X-workz team? */}
            <Grid item xs={12} md={6}>
              <Box className="shadow-5 bg-white rounded-4 p-3 h-100">
                <Typography className="text-danger mb-2">
                  8. How satisfied are you with the communication and support provided by the X-workz team? *
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Select satisfaction level</InputLabel>
                  <Select
                    name="supportSatisfaction"
                    value={feedback.supportSatisfaction || ''}
                    onChange={handleChange}
                    label="Select satisfaction level"
                    required
                  >
                    <MenuItem value="Very Satisfied">Very Satisfied</MenuItem>
                    <MenuItem value="Satisfied">Satisfied</MenuItem>
                    <MenuItem value="Neutral">Neutral</MenuItem>
                    <MenuItem value="Dissatisfied">Dissatisfied</MenuItem>
                    <MenuItem value="Very Dissatisfied">Very Dissatisfied</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          {/* Row 5: Question 9 */}
          <Grid container spacing={3} className="mt-3">
            <Grid item xs={12}>
              <Box className="shadow-5 bg-white rounded-4 p-3">
                <Typography className="text-danger mb-2">
                  9. Was your query or concern addressed in a timely and helpful manner? *
                </Typography>
                <RadioGroup
                  row
                  name="queryAddressed"
                  value={feedback.queryAddressed || ''}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                  <FormControlLabel value="Partially" control={<Radio />} label="Partially" />
                </RadioGroup>
              </Box>
            </Grid>
          </Grid>

          {/* Row 6: Questions 10-11 (2 columns) */}
          <Grid container spacing={3} className="mt-3">
            {/* Question 10: What do you like the most about X-workz? */}
            <Grid item xs={12} md={6}>
              <Box className="shadow-5 bg-white rounded-4 p-3 h-100">
                <Typography className="text-danger mb-2">
                  10. What do you like the most about X-workz (website, workshops, training, CSR activities, etc.)? *
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  name="likes"
                  value={feedback.likes || ''}
                  onChange={handleChange}
                  placeholder="Please share what you like the most..."
                  required
                />
              </Box>
            </Grid>

            {/* Question 11: What improvements would you suggest? */}
            <Grid item xs={12} md={6}>
              <Box className="shadow-5 bg-white rounded-4 p-3 h-100">
                <Typography className="text-danger mb-2">
                  11. What improvements would you suggest for our website, workshops, or communication? *
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  name="improvements"
                  value={feedback.improvements || ''}
                  onChange={handleChange}
                  placeholder="Please share your suggestions for improvement..."
                  required
                />
              </Box>
            </Grid>
          </Grid>

          {/* Row 7: Question 12 */}
          <Grid container spacing={3} className="mt-3">
            <Grid item xs={12}>
              <Box className="shadow-5 bg-white rounded-4 p-3">
                <Typography className="text-danger mb-2">
                  12. Would you recommend X-workz to your friends, peers, or colleagues? *
                </Typography>
                <RadioGroup
                  row
                  name="recommendation"
                  value={feedback.recommendation || ''}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                {feedback.recommendation === 'No' && (
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    name="recommendationReason"
                    value={feedback.recommendationReason || ''}
                    onChange={handleChange}
                    placeholder="Please share why not..."
                    sx={{ mt: 2 }}
                  />
                )}
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