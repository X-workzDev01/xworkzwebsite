import {
  Button,
  TextField
} from '@mui/material';
import React from 'react';
import { FeedbackRadioButton } from './FeedbackRadioButton';
import { FormControlRadio } from './FormControlRadio';
import { FeedbackComment } from './FeedbackComment';

export const FeedbackForm = ({
  handleChange,
  handleSubmit,
  feedback,
  isDisabled,
  loading,
  isRegistered
}) => {
  const renderConditionalComment = (fieldName, placeholder) => {
    const value = feedback?.[fieldName];
    if (value && value !== 'Yes') {
      return (
        <div className="p-3">
          <FeedbackComment
            feedback={value}
            placeholder={placeholder}
            row="3"
            name={fieldName}
            handleChange={handleChange}
          />
        </div>
      );
    }
    return null;
  };


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

          {[
            { name: 'practicalExecution', label: 'Practical execution' },
            { name: 'startingOnTime', label: 'Classes starting on time' },
            { name: 'assignmentProvided', label: 'Assignment provided' },
            { name: 'technicalDoubts', label: 'Are your technical doubts being resolved? If No, please mention your comments.' },
            { name: 'hrResponse', label: 'Is the HR team responding to your queries? If No, please mention your comments.' },
            { name: 'careerGuidance', label: 'Are you provided career guidance along with placements and classes? If No, please mention your comments.' },
            { name: 'mentorClarifyingDoubt', label: 'Is your mentor clarifying your doubts? If No, please mention your comments.' },
            { name: 'assignmentChecked', label: 'Is the assignment being checked daily? If No, please mention your comments.' }
          ].map(({ name, label }) => (
            <div key={name} className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content={label}
                name={name}
                feedback={feedback}
              />
              {renderConditionalComment(name, 'Please enter comments here...')}
            </div>
          ))}

          <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
            <p className="text-danger">
              How would you rate the X-workz environment? (5 being the highest, 1 being the lowest) *
            </p>
            <div className="mt-2 text-center">
              <FormControlRadio
                handleChange={handleChange}
                name="xworkzEnvironment"
                value={feedback?.xworkzEnvironment || 0}
              />
            </div>
          </div>

          <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
            <FeedbackRadioButton
              handleChange={handleChange}
              content="Are you receiving updates about your mock scores and test scores?"
              name="mockScore"
              feedback={feedback}
            />
            {renderConditionalComment('mockScore', 'Please enter comments here...')}
          </div>

          <div className="shadow-5 rounded-4 bg-white mt-2 ps-4 pt-3 pe-4 pb-2">
            <span className="text-danger">Suggestion/Feedback *</span>
            <FeedbackComment
              feedback={feedback.feedbackSuggestion}
              required="required"
              placeholder="Please enter your feedback here..."
              row="5"
              name="feedbackSuggestion"
              handleChange={handleChange}
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
