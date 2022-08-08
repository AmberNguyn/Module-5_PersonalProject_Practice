import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import assignmentDetailService from '../../services/assignmentDetail.service'

export default function Salary() {
  const { assignmentDetails } = useSelector((state) => state.assignmentDetail);
  const dispatch = useDispatch();

  const getData = () => {
    assignmentDetailService.getAll()
    .then ((response) => {
      console.log(response.data);
      
    })
  }


  return (
    <div>
      <button onClick={getData}>get data</button>




    </div>
  )
}
