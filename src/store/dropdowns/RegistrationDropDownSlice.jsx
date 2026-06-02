import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Urlconstant } from "../../components/constant/Urlconstant";
import api from "../../components/interceptors/axiosConfig";

export const fetchDropdown = createAsyncThunk(

  "fetchDropdown",

  async (_, { rejectWithValue }) => {

    try {

      const response = await api.get(

        Urlconstant.url + "utils/dropdown",

        {
          headers: {
            spreadsheetId:
              Urlconstant.spreadsheetId,
            contenttype:
              "application/json",
          },
        }

      );

      return response.data;

    } catch (error) {

      return rejectWithValue(
        "SERVER_DOWN"
      );

    }

  }

);

export const getBatchNameByCourseDetails =
createAsyncThunk(

  "getBatchNameByCourseDetails",

  async (
    batchName,
    { rejectWithValue }
  ) => {

    try {

      const response =
        await api.get(

          Urlconstant.BACTH_URL +
          `api/getsubcourseDetails/${batchName}`

        );

      return response.data;

    } catch (error) {

      return rejectWithValue(
        "SERVER_DOWN"
      );

    }

  }

);

export const fetchBatchName = createAsyncThunk(

  "fetchBatchName",

  async (_, { rejectWithValue }) => {

    try {

      const response = await api.get(

        Urlconstant.BACTH_URL +
        "api/getCourseName?status=Active",

        {
          headers: {
            spreadsheetId:
              Urlconstant.spreadsheetId,
            contenttype:
              "application/json",
          },
        }

      );

      return response.data;

    } catch (error) {

      return rejectWithValue(
        "SERVER_DOWN"
      );

    }

  }

);

const RegistrationDropDownSlice =
createSlice({

  name: "dropdown",

  initialState: {

    batchName: [],
    courseName: [],
    dropdown: {},
    serverError: false,

  },

  reducers: {

    clearServerError: (state) => {

      state.serverError = false;

    },

  },

  extraReducers: (builder) => {

    builder

      .addCase(
        fetchDropdown.fulfilled,

        (state, action) => {

          state.dropdown =
            action.payload;

        }

      )

      .addCase(

        fetchBatchName.fulfilled,

        (state, action) => {

          state.batchName =
            action.payload;

        }

      )

      .addCase(

        getBatchNameByCourseDetails.fulfilled,

        (state, action) => {

          state.courseName =
            action.payload;

        }

      )

      .addCase(
        fetchDropdown.rejected,

        (state, action) => {

          if(
            action.payload ===
            "SERVER_DOWN"
          ){

            state.serverError =
              true;

          }

        }

      )

      .addCase(
        fetchBatchName.rejected,

        (state, action) => {

          if(
            action.payload ===
            "SERVER_DOWN"
          ){

            state.serverError =
              true;

          }

        }

      )

      .addCase(

        getBatchNameByCourseDetails.rejected,

        (state, action) => {

          if(
            action.payload ===
            "SERVER_DOWN"
          ){

            state.serverError =
              true;

          }

        }

      );

  },

});

export const {
  clearServerError,
} =
RegistrationDropDownSlice.actions;

export default
RegistrationDropDownSlice.reducer;