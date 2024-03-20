import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {Urlconstant} from '../../components/constant/Urlconstant';

export const fetchDropdown = createAsyncThunk ('fetchDropdown', async () => {
  const response = await axios.get (Urlconstant.url + 'utils/dropdown', {
    headers: {
      spreadsheetId: Urlconstant.spreadsheetId,
      contenttype: 'application/json',
    },
  });
  return response.data;
});

const RegistrationDropDownSlice = createSlice ({
  name: 'dropdown',
  initialState: {
    dropdown: {},
    loading: false,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase (fetchDropdown.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase (fetchDropdown.fulfilled, (state, action) => {
      state.loading = false;
      state.dropdown = action.payload;
      state.error = '';
    });
    builder.addCase (fetchDropdown.rejected, (state, action) => {
      state.loading = false;
      state.dropdown = {};
      state.error = action.error.message;
    });
  },
});

export default RegistrationDropDownSlice.reducer;
