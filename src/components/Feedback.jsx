import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getBatchNameByCourseDetails,
} from '../store/dropdowns/RegistrationDropDownSlice';
import {FeedbackForm} from './FeedbackForm';
import axios from 'axios';
import {Urlconstant} from './constant/Urlconstant';
import Swal from 'sweetalert2';

export const Feedback = () => {
  const dispatch = useDispatch ();
  const dropdown = useSelector (state => state.dropdowns);
  const [feedback, setFeedback] = useState ({});
  const [succcess, setSucccess] = useState ('');

  const handleChange = event => {
    const {name, value} = event.target;

    setFeedback ({...feedback, [name]: value});

    if (name === 'course') {
      const courseId = dropdown.courseName
        .filter (element => element.subCourseName === value)
        .map (element => element.id)[0];
      setFeedback ({...feedback, courseId: courseId});
    }
  };
  useEffect (
    () => {
      if (feedback.course !== 'undefined')
        dispatch (getBatchNameByCourseDetails (feedback.batch));
    },
    [feedback.batch, feedback.course, dispatch]
  );

  const isDisabled =
    !feedback.batch ||
    !feedback.courseId ||
    !feedback.trainer ||
    !feedback.practicalExecution ||
    !feedback.startingOnTime ||
    !feedback.assignmentProvided ||
    !feedback.technicalDoubts ||
    !feedback.hrResponse ||
    !feedback.careerGuidance ||
    !feedback.mentorClarifyingDoubt ||
    !feedback.assignmentChecked ||
    !feedback.xworkzEnvironment ||
    !feedback.mockScore ||
    !feedback.feedbackSuggestion;

  const handleSubmit = event => {
    event.preventDefault ();
    const batchId = dropdown.courseName
      .filter (element => element.id === feedback.courseId)
      .map (element => element.batchId)[0];
    console.log (batchId);
    const feedbackFinalDto = {...feedback, batchId: batchId};
    Swal.fire ({
      timer: 4000,
      title: 'Submitted successfully!',
      icon: 'success',
      showConfirmButton: false,
      customClass: {
        popup: 'my-popup-class',
      },
    });
    const response = axios.post (
      Urlconstant.FEEDBACK_URL + 'api/feedback/saveFeedback',
      feedbackFinalDto
    );
    response.then (result => {
      setSucccess (result.data);
      setFeedback ({});
    });
  };

  return (
    <div className="  ">
      <div className="d-flex justify-content-center mt-md-4 mb-md-4">
        <div className="w-25">
          <hr className="bg-danger my-1" style={{paddingTop: '0.1rem'}} />
          <div className="text-success fs-5 text-center fw-bold text-capitalize">
            <span>Feedback </span>
          </div>
          <hr className="bg-danger my-1" style={{paddingBottom: '0.1rem'}} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="mt-3 mb-4 w-50">
          <div className="shadow-5 rounded-4 p-2 pe-4 ps-n3">
            <div className="text-center mb-4">
              <span className="fs-5">Select batch details</span>
            </div>
            <div className="row ps-4 g-2">
              <div className="col-md-4 mb-3">
                <FormControl fullWidth>
                  <InputLabel id="batch-select-label">
                    <span>Select Batch *</span>
                  </InputLabel>
                  <Select
                    name="batch"
                    onChange={handleChange}
                    value={
                      feedback ? (feedback.batch ? feedback.batch : '') : ''
                    }
                    color="primary"
                    labelId="batch-select-label"
                    id="batch-select"
                    label="Select Batch"
                    variant="outlined"
                    size="small"
                  >
                    {dropdown && dropdown.batchName
                      ? dropdown.batchName.map ((item, index) => (
                          <MenuItem value={item} key={index}>
                            {item}
                          </MenuItem>
                        ))
                      : ''}
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl fullWidth>
                  <InputLabel id="course-select-label">
                    <span>Select Course *</span>
                  </InputLabel>
                  <Select
                    onChange={handleChange}
                    name="course"
                    value={
                      dropdown
                        ? dropdown.courseName
                            ? dropdown.courseName
                                .filter (
                                  element => element.id === feedback.courseId
                                )
                                .map (element => element.subCourseName)
                            : ''
                        : ''
                    }
                    color="primary"
                    labelId="course-select-label"
                    id="course-select"
                    label="Select Course"
                    variant="outlined"
                    size="small"
                  >
                    {dropdown && dropdown.courseName
                      ? dropdown.courseName.map ((item, index) => (
                          <MenuItem value={item.subCourseName} key={index}>
                            {item.subCourseName}
                          </MenuItem>
                        ))
                      : ''}
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">

                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  name="trainerName"
                  onLoad={handleChange}
                  value={
                    dropdown
                      ? dropdown.courseName
                          ? dropdown.courseName
                              .filter (
                                element => element.id === feedback.courseId
                              )
                              .map (element => element.trainerName)
                          : ''
                      : ''
                  }
                  color="primary"
                  focused
                  label="Trainer Name"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FeedbackForm
          isDisabled={isDisabled}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          feedback={feedback}
        />
      </div>
    </div>
  );
};
