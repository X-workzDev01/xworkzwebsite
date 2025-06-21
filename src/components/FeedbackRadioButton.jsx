import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';

export const FeedbackRadioButton = ({
  content,
  name,
  handleChange,
  feedback
}) => {
  return (
    <div>
      <span className="text-danger">{content} *</span>
      <div>
        <FormControl required component="fieldset">
          <RadioGroup name={name} value={feedback?.[name] || ''} onChange={handleChange}>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};