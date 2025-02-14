import {Button} from '@mui/material';
import React from 'react';
import {FeedbackRadioButton} from './FeedbackRadioButton';
import {FormControlRadio} from './FormControlRadio';

export const FeedbackComment = ({
  feedback,
  handleChange,
  name,
  placeholder,
  row,
  required,
}) => {
  return (
    <div>
      <textarea
        required={required}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        className="form-control"
        id="exampleFormControlTextarea1"
        minLength={20}
        value={feedback && feedback !== 'No' ? feedback : ''}
        errorText="Please enter more than 20 characters"
        rows={row}
      />
    </div>
  );
};

export const FeedbackForm = ({
  handleChange,
  handleSubmit,
  feedback,
  isDisabled,
}) => {
  return (
    <div className="d-flex justify-content-center mb-11">
      <div
        style={{overflowY: 'scroll', height: '75rem'}}
        className="d-flex justify-content-center bg-light shadow-3-strong rounded-4 w-50 p-4 ps-5"
      >
        <form onSubmit={handleSubmit}>
          <div>
            <div className="text-center">
              <span className="fs-4 text-black fw-bolder">
                Please provide your feedback
              </span>
            </div>

            <div className="shadow-5 bg-white rounded-4 mt-4">
              <div className="text-danger pe-2 ps-2">
                <span style={{fontSize: '15px'}}>
                  How would you rate the trainer's quality? (5 being the highest, 1 being the lowest) *
                </span>
              </div>
              <div className="mt-2 text-center">
                <FormControlRadio
                  handleChange={handleChange}
                  name="trainer"
                  value={
                    feedback ? (feedback.trainer ? feedback.trainer : '') : ''
                  }
                />
              </div>
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Practical execution"
                name="practicalExecution"
              />
              {feedback && feedback.practicalExecution
                ? feedback.practicalExecution !== 'Yes' &&
                    <div className="p-3">
                      <FeedbackComment
                        feedback={feedback.practicalExecution}
                        placeholder="Please enter comments here..."
                        row="3"
                        name="practicalExecution"
                        handleChange={handleChange}
                      />
                    </div>
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Classes starting on time"
                name="startingOnTime"
              />
              {feedback && feedback.startingOnTime
                ? feedback.startingOnTime !== 'Yes' &&
                    <div className="p-3">
                      <FeedbackComment
                        feedback={feedback.startingOnTime}
                        placeholder="Please enter comments here..."
                        row="3"
                        name="startingOnTime"
                        handleChange={handleChange}
                      />
                    </div>
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Assignment provided"
                name="assignmentProvided"
              />
              {feedback && feedback.assignmentProvided
                ? feedback.assignmentProvided !== 'Yes' &&
                    <div className="p-3">
                      <FeedbackComment
                        feedback={feedback.assignmentProvided}
                        placeholder="Please enter comments here..."
                        row="3"
                        name="assignmentProvided"
                        handleChange={handleChange}
                      />
                    </div>
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Are your technical doubts being resolved? If No, please mention your comments."
                name="technicalDoubts"
              />
              {feedback && feedback.technicalDoubts
                ? feedback.technicalDoubts !== 'Yes' &&
                    <div className="p-3">
                      <FeedbackComment
                        feedback={feedback.technicalDoubts}
                        placeholder="Please enter comments here..."
                        row="3"
                        name="technicalDoubts"
                        handleChange={handleChange}
                      />
                    </div>
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Is the HR team responding to your queries? If No, please mention your comments."
                name="hrResponse"
              />
              {feedback && feedback.hrResponse
                ? feedback.hrResponse !== 'Yes' &&
                    <div className="p-3">
                      <FeedbackComment
                        feedback={feedback.hrResponse}
                        placeholder="Please enter comments here..."
                        row="3"
                        name="hrResponse"
                        handleChange={handleChange}
                      />
                    </div>
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Are you provided career guidance along with placements and classes? If No, please mention your comments."
                name="careerGuidance"
              />
              {feedback && feedback.careerGuidance
                ? feedback.careerGuidance !== 'Yes' &&
                    <div className="p-3">
                      <FeedbackComment
                        feedback={feedback.careerGuidance}
                        placeholder="Please enter comments here..."
                        row="3"
                        name="careerGuidance"
                        handleChange={handleChange}
                      />
                    </div>
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Is your mentor clarifying your doubts? If No, please mention your comments."
                name="mentorClarifyingDoubt"
              />
              {feedback && feedback.mentorClarifyingDoubt
                ? feedback.mentorClarifyingDoubt !== 'Yes' &&
                    <div className="p-3">
                      <FeedbackComment
                        feedback={feedback.mentorClarifyingDoubt}
                        placeholder="Please enter comments here..."
                        row="3"
                        name="mentorClarifyingDoubt"
                        handleChange={handleChange}
                      />
                    </div>
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Is the assignment being checked daily? If No, please mention your comments."
                name="assignmentChecked"
              />
              {feedback && feedback.assignmentChecked
                ? feedback.assignmentChecked !== 'Yes' &&
                    <div className="p-3">
                      <FeedbackComment
                        feedback={feedback.assignmentChecked}
                        placeholder="Please enter comments here..."
                        row="3"
                        name="assignmentChecked"
                        handleChange={handleChange}
                      />
                    </div>
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <div>
                <p className="text-danger">
                  How would you rate the X-workz environment? (5 being the highest, 1 being the lowest) *
                </p>
              </div>
              <div className="mt-2 text-center">
                <FormControlRadio
                  handleChange={handleChange}
                  name="xworkzEnvironment"
                  value={
                    feedback
                      ? feedback.xworkzEnvironment
                          ? feedback.xworkzEnvironment
                          : 0
                      : 0
                  }
                />
              </div>
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Are you receiving updates about your mock scores and test scores?"
                name="mockScore"
              />
              {feedback && feedback.mockScore
                ? feedback.mockScore !== 'Yes' &&
                    <div className="p-3">
                      <FeedbackComment
                        feedback={feedback.mockScore}
                        placeholder="Please enter comments here..."
                        row="3"
                        name="mockScore"
                        handleChange={handleChange}
                      />
                    </div>
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-4 pt-3 pe-4 pb-2">
              <span className="text-danger">Suggestion/Feedback *</span>
              <FeedbackComment
                feedback={feedback.feedbackSuggestion}
                required={'required'}
                placeholder="Please enter your feedback here..."
                row="5"
                name="feedbackSuggestion"
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-5 text-center pb-5">
            <Button type="submit" disabled={isDisabled} variant="contained">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
