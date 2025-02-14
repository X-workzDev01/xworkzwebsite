import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Urlconstant } from '../../components/constant/Urlconstant'

export const fetchDropdown = createAsyncThunk('fetchDropdown', async () => {
  const response = await axios.get(Urlconstant.url + 'utils/dropdown', {
    headers: {
      spreadsheetId: Urlconstant.spreadsheetId,
      contenttype: 'application/json'
    }
  })
  return response.data
})
export const getBatchNameByCourseDetails = createAsyncThunk(
  'getBatchNameByCourseDetails',
  async batchName => {
    const response = await axios.get(
      Urlconstant.BACTH_URL + `api/getsubcourseDetails/${batchName}`
    )
    return response.data
  }
)

export const fetchBatchName = createAsyncThunk('fetchBatchName', async () => {
  const response = await axios.get(
    Urlconstant.BACTH_URL + 'api/getCourseName?status=Active',
    {
      headers: {
        spreadsheetId: Urlconstant.spreadsheetId,
        contenttype: 'application/json'
      }
    }
  )
  return response.data
})
const RegistrationDropDownSlice = createSlice({
  name: 'dropdown',
  initialState: {
    batchName: [],
    courseName: [],
    dropdown: {}
  },
  extraReducers: builder => {
    builder.addCase(fetchDropdown.fulfilled, (state, action) => {
      state.dropdown = action.payload
    })
    builder.addCase(getBatchNameByCourseDetails.fulfilled, (state, action) => {
      state.courseName = action.payload
    })
    builder.addCase(fetchBatchName.fulfilled, (state, action) => {
      state.batchName = action.payload
    })
  }
})

export default RegistrationDropDownSlice.reducer
