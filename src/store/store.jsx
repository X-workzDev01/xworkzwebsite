import {configureStore} from '@reduxjs/toolkit';
import RegistrationDropDown from './dropdowns/RegistrationDropDownSlice';
export default configureStore ({
  reducer: {
    dropdowns: RegistrationDropDown,
  },
});
