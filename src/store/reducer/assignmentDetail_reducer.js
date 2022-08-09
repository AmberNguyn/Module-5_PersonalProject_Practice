import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { get } from 'react-hook-form'
import assignmentDetailService from '../../services/assignmentDetail.service'

const initialState = {
  assignmentDetails: [],
  status: null
}

export const getAllAssignmentDetails = createAsyncThunk(
  'assignmentDetails/getAllAssignmentDetails',
  async () => {
    return assignmentDetailService.getAll
    .then((response) => {
      response.json();
    })
  }
)

export const assignmentDetailSlice = createSlice({
  name: 'assignmentDetails',
  initialState,
  reducers: {
    addAssignmentDetail: (state, {payload}) => {
        state.assignmentDetails = payload;
    }
  },

  extraReducers: {
    [getAllAssignmentDetails.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getAllAssignmentDetails.fulfilled]: (state, {payload}) => {
      state.list = payload
      state.status = 'succeed'
    },
    [getAllAssignmentDetails.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }



})

export const { addAssignmentDetail } = assignmentDetailSlice.actions
// export const getAllAssignmentDetails = (state) => state.assignmentDetails
export default assignmentDetailSlice.reducer