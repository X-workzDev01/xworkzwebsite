import {
  Button,
  TextField
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
        <div className="p-3">
          <TextField
            fullWidth
            multiline
            rows={3}
            value={value.substring(5)}
            onChange={(e) => handleCommentChange(fieldName, e.target.value)}
            placeholder="Please enter your comments..."
          />
        </div>
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

  const questionsForNonRegistered = [
    { name: 'practicalExecution', label: 'Practical execution' },
    { name: 'startingOnTime', label: 'Classes starting on time' },
    { name: 'assignmentProvided', label: 'Assignment provided' },
    { name: 'technicalDoubts', label: 'Are your technical doubts being resolved?' },
    { name: 'assignmentChecked', label: 'Is the assignment being checked daily?' }
  ];

  const questions = isRegistered === 'yes' ? questionsForRegistered : questionsForNonRegistered;

  return (
    <div className="d-flex justify-content-center mb-5">
      <div className="d-flex justify-content-center bg-light shadow-3-strong rounded-4 w-50 w-md-75z p-4">
        <form onSubmit={handleSubmit} className="w-100">

          <div className="text-center">
            <span className="fs-5">Please provide your feedback</span>
          </div>

          <div className="shadow-5 bg-white rounded-4 mt-4">
            <div className="text-danger pe-2 ps-2">
              <span>How would you rate the trainer's quality? (5 being the highest, 1 being the lowest) *</span>
            </div>
            <div className="mt-2 text-center">
              <FormControlRadio
                handleChange={handleChange}
                name="trainer"
                value={feedback?.trainer || ''}
              />
            </div>
          </div>

          {questions.map(({ name, label }) => (
            <div key={name} className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleRadioChange}
                content={`${label} *`}
                name={name}
                feedback={{ [name]: feedback[name]?.startsWith('No - ') ? 'No' : feedback[name] }}
              />
              {renderConditionalComment(name)}
            </div>
          ))}

          {isRegistered === 'yes' && (
            <>
              <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
                <p className="text-danger">
                  How would you rate the X-workz environment? (5 being the highest, 1 being the lowest) *
                </p>
                <div className="mt-2 text-center">
                  <FormControlRadio
                    handleChange={handleChange}
                    name="xworkzEnvironment"
                    value={feedback?.xworkzEnvironment || ''}
                  />
                </div>
              </div>

              <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
                <FeedbackRadioButton
                  handleChange={handleRadioChange}
                  content="Are you receiving updates about your mock scores and test scores? *"
                  name="mockScore"
                  feedback={{ mockScore: feedback.mockScore?.startsWith('No - ') ? 'No' : feedback.mockScore }}
                />
                {renderConditionalComment('mockScore')}
              </div>
            </>
          )}

          <div className="shadow-5 rounded-4 bg-white mt-2 ps-4 pt-3 pe-4 pb-2">
            <span className="text-danger">Suggestion/Feedback *</span>
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
          </div>

          <div className="mt-5 text-center pb-5">
            <Button
              type="submit"
              disabled={isDisabled || loading}
              variant="contained"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};