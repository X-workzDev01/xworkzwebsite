import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Box, Rating, styled} from '@mui/material';

import React from 'react';
const StyledRating = styled (Rating) ({
  '& .MuiRating-iconFilled': {
    color: '#ff3d47',
  },
  '& .MuiRating-iconHover': {
    color: '#ff6d75',
  },
});
export const FormControlRadio = ({value, name, handleChange}) => {
  return (
    <div>
      <Box
        sx={{
          '& > legend': {mt: 2},
        }}
      >
        <StyledRating
          name={name}
          value={value}
          onChange={handleChange}
          getLabelText={value => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="large" required />}
          emptyIcon={<FavoriteBorderIcon fontSize="large" />}
        />
      </Box>

    </div>
  );
};
