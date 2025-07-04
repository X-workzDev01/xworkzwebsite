import { TextField } from '@mui/material';
import React from 'react';

export const FeedbackComment = ({
  feedback,
  handleChange,
  name,
  placeholder,
  row,
  required
}) => {
  return (
    <TextField
      fullWidth
      multiline
      rows={row}
      variant="outlined"
      name={name}
      value={feedback || ''}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      minRows={row}
      sx={{ mt: 1 }}
    />
  );
};