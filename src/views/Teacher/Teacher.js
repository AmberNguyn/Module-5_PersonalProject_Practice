import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import teacherService from '../../services/teacher.service';
import './Teacher.scss'

export default function Teacher() {
    const [teacherList, setTeacherList] = useState([]);
    const [type, setType] = useState("");
    const [numberOfTeacher, setNumberOfTeacher] = useState(0);
    
    const clickHandler = (event) => {
        setType(event.target.value);

        let teacherType = event.target.value;
        teacherService.getTeacherType(teacherType)
            .then((response) => {
                setTeacherList(response.data);
                setNumberOfTeacher(response.data.length);
                console.log(teacherList);
            })
        
        
    }

  return (
    <section>
      <div className="teacher-page">
        <form>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="teacherType"
              id="vietnamese"
              value="VIETNAMESE"
              onClick={clickHandler}
            />
            <label className="form-check-label" htmlFor="vietnamese">
              Vietnamese
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="teacherType"
              id="expatriate"
              value="EXPATRIATE"
              onClick={clickHandler}
            />
            <label className="form-check-label" htmlFor="expatriate">
              Expatriate
            </label>
          </div>
        </form>
        <div>
            <p className='list-title'>LIST OF {type} TEACHERS ({numberOfTeacher})</p>
            <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Employee Code</th>
              <th>First name</th>
              {/* <th>Middle name</th> */}
              <th>Last name</th>
              <th>Gender</th>
              <th>Date of birth</th>
              <th>Phone number</th>
              <th>Private email</th>
              <th>Nationality</th>
          
            </tr>
          </thead>
          <tbody>
          {
            teacherList.map(teacher => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.employeeCode}</td>
                <td>{teacher.firstName}</td>
                {/* <td>{teacher.middleName}</td> */}
                <td>{teacher.lastName}</td>
                <td>{teacher.gender}</td>
                <td>{teacher.dateOfBirth}</td>
                <td>{teacher.phoneNumber}</td>
                <td>{teacher.privateEmail}</td>
                <td>{teacher.nationality}</td>
              </tr>
            ))
          }

          {
            teacherList.length===0 &&
            <tr>
                <td colSpan={10} className="text-center">No data found yet!</td>
            </tr>
          }


          </tbody>
        </table>
        </div>
      </div>
        


    </section>
  )
}
