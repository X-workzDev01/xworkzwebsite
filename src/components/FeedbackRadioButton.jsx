import {FormControl, FormControlLabel, Radio, RadioGroup} from '@mui/material';
import React from 'react';

export const FeedbackRadioButton = ({content, name, handleChange}) => {
  return (
    <div>
      <span className="text-danger">
        {content} *
      </span>
      <div>
        <FormControl required>
          <RadioGroup onChange={handleChange} name={name}>
            <FormControlLabel control={<Radio value="Yes" />} label="Yes" />
            <FormControlLabel control={<Radio value="No" />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
