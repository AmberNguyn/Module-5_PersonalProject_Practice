import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  assignmentDetails: {},
}

export const assignmentDetailSlice = createSlice({
  name: 'assignment details',
  initialState,
  reducers: {
    addAssignmentDetail: (state, {payload}) => {
        state.assignmentDetails = payload;
    }
  },
})

export const { addAssignmentDetail } = assignmentDetailSlice.actions
// export const getAllAssignmentDetails = (state) => state.assignmentDetails
export default assignmentDetailSlice.reducer