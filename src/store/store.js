import { configureStore } from '@reduxjs/toolkit'
import assignmentDetailReducer from './reducer/assignmentDetail_reducer'

export const store = configureStore({
reducer: {
    assignmentDetail : assignmentDetailReducer
},
}) 