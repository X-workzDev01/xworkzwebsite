import {Button} from '@mui/material';
import React from 'react';
import {FeedbackRadioButton} from './FeedbackRadioButton';
import {FormControlRadio} from './FormControlRadio';

export const FeedbackComment = ({
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
        erortext="Please enter more then 20 charactor"
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
    <div className="d-flex justify-content-center mb-11 ">
      <div
        style={{overflowY: 'scroll', height: '30rem'}}
        className="d-flex justify-content-center bg-light shadow-3-strong rounded-4 w-50 p-4 ps-5"
      >
        <form onSubmit={handleSubmit}>

          <div>
            <div className="text-center">
              <span className="fs-4 text-black fw-bolder">
                Please fill  feedback
              </span>
            </div>

            <div className="shadow-5 bg-white rounded-4 mt-4">

              <div className="text-danger pe-2 ps-2 ">
                <span style={{fontSize: '15px'}}>
                  How would you rate the trainer Quality ?
                  5 Being the Highest  1 the lowest
                  practical Execution  *
                </span>
              </div>
              <div>

                <div className="mt-2 text-center ">
                  <FormControlRadio
                    handleChange={handleChange}
                    name="trainer"
                    value={
                      feedback ? (feedback.trainer ? feedback.trainer : '') : ''
                    }
                  />
                </div>

              </div>

            </div>
            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Practical execution"
                name="practicalExecution"
              />
              {feedback && feedback.practicalExecution
                ? feedback.practicalExecution !== 'Yes'
                    ? <div className="p-3">
                        <FeedbackComment
                          placeholder="Please Enter comment type here....."
                          row="3"
                          name="practicalExecution"
                          handleChange={handleChange}
                        />
                      </div>
                    : <div />
                : <div />}
            </div>
            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Classes stating on time"
                name="startingOnTime"
              />
              {feedback && feedback.startingOnTime
                ? feedback.startingOnTime !== 'Yes'
                    ? <div className="p-3">
                        <FeedbackComment
                          placeholder="Please Enter comment type here....."
                          row="3"
                          name="startingOnTime"
                          handleChange={handleChange}
                        />
                      </div>
                    : <div />
                : <div />}
            </div>
            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                handleChange={handleChange}
                content="Assignment Provided"
                name="assignmentProvided"
              />
              {feedback && feedback.assignmentProvided
                ? feedback.assignmentProvided !== 'Yes'
                    ? <div className="p-3">
                        <FeedbackComment
                          placeholder="Please Enter comment type here....."
                          row="3"
                          name="assignmentProvided"
                          handleChange={handleChange}
                        />
                      </div>
                    : <div />
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3 ">
              <FeedbackRadioButton
                content="Whether your technical doubts are getting resolved ? if No-Please mention your comments"
                name="technicalDoubts"
                handleChange={handleChange}
              />
              {feedback && feedback.technicalDoubts
                ? feedback.technicalDoubts !== 'Yes'
                    ? <div className="p-3">
                        <FeedbackComment
                          placeholder="Please Enter comment type here....."
                          row="3"
                          name="technicalDoubts"
                          handleChange={handleChange}
                        />
                      </div>
                    : <div />
                : <div />}
            </div>
            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                content="Whether HR Team is responding for clearification ? if No-Please mention comments"
                name="hrResponse"
                handleChange={handleChange}
              />
              {feedback && feedback.hrResponse
                ? feedback.hrResponse !== 'Yes'
                    ? <div className="p-3">
                        <FeedbackComment
                          placeholder="Please Enter comment type here....."
                          row="3"
                          name="hrResponse"
                          handleChange={handleChange}
                        />
                      </div>
                    : <div />
                : <div />}
            </div>
            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                content="Are you been provided career Guidence along with placements and classes ? if No-Please mention your comments"
                name="careerGuidence"
                handleChange={handleChange}
              />
              {feedback && feedback.careerGuidence
                ? feedback.careerGuidence !== 'Yes'
                    ? <div className="p-3">
                        <FeedbackComment
                          placeholder="Please Enter comment type here....."
                          row="3"
                          name="careerGuidence"
                          handleChange={handleChange}
                        />
                      </div>
                    : <div />
                : <div />}
            </div>
            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                content=" Is your Menter clarifying your doubts ? if No-Please mention your comments"
                name="menterClarifyingDoubt"
                handleChange={handleChange}
              />
              {feedback && feedback.menterClarifyingDoubt
                ? feedback.menterClarifyingDoubt !== 'Yes'
                    ? <div className="p-3">
                        <FeedbackComment
                          placeholder="Please Enter comment type here....."
                          row="3"
                          name="menterClarifyingDoubt"
                          handleChange={handleChange}
                        />
                      </div>
                    : <div />
                : <div />}
            </div>
            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <FeedbackRadioButton
                content=" Is beeing assignment checked daily ? if No-Please mention your comments"
                name="assignmentChecked"
                handleChange={handleChange}
              />
              {' '}
              {feedback && feedback.assignmentChecked
                ? feedback.assignmentChecked !== 'Yes'
                    ? <div className="p-3">
                        <FeedbackComment
                          placeholder="Please Enter comment type here....."
                          row="3"
                          name="assignmentChecked"
                          handleChange={handleChange}
                        />
                      </div>
                    : <div />
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-3 pt-3">
              <div>
                <p className="text-danger">
                  How would you rate the X-workz environment ? 5 beeing the highest and 1 the lowest  *
                </p>
              </div>
              <div className="mt-2 text-center ">
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
                content=" Are you reciving/updates about your mock score and test score"
                name="mockScore"
                handleChange={handleChange}
              />
              {feedback && feedback.mockScore
                ? feedback.mockScore !== 'Yes'
                    ? <div className="p-3">
                        <FeedbackComment
                          placeholder="Please Enter comment type here....."
                          row="3"
                          name="mockScore"
                          handleChange={handleChange}
                        />
                      </div>
                    : <div />
                : <div />}
            </div>

            <div className="shadow-5 rounded-4 bg-white mt-2 ps-4 pt-3 pe-4 pb-2">
              <span className="text-danger">Suggestion/Feedback *</span>
              <FeedbackComment
                required={'required'}
                placeholder="Feedback type here ....."
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
