import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import assignmentDetailService from '../../services/assignmentDetail.service'
import { getAllAssignmentDetails } from '../../store/reducer/assignmentDetail_reducer';

export default function Salary() {
  const { assignmentDetails } = useSelector((state) => state.assignmentDetail);
  const dispatch = useDispatch();
  dispatch(getAllAssignmentDetails())

  const getData = () => {
    assignmentDetailService.getAll()
    .then ((response) => {
      console.log(response.data);
      
    })
  }


  return (
    <div>
      <h1>Return list of assignment</h1>
      <button onClick={getData}>get data</button>




    </div>
  )
}
