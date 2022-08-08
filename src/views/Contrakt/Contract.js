import React, { useEffect } from 'react'
import './Contract.scss'
import { useState } from 'react';
import contractService from '../../services/contract.service';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import Alert from 'react-bootstrap/Alert';

export default function Contract() {
    const [contractList, setContractList] = useState([]);

    //react-bootstrap pop-up modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //react-hook-form

    const [contractId, setContractId] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [payRate, setPayRate] = useState("");
    const [bank, setBank] = useState("");
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState(0);
    const [branch, setBranch] = useState("vietcombank");
    const [description, setDescription] = useState("");
    const [isSigned, setIsSigned] = useState("false");
    const [teacherCode, setTeacherCode] = useState("");


    const { register, handleSubmit} = useForm();
    //SAVE CONTRACT
    const onSubmit = (data, event) => {
      // event.preventDefault();
      console.log(data.payRate)

      const newContract = {
        contractId: data.contractId,
        startDate: data.startDate,
        endDate: data.endDate,
        payRate: data.payRate,
        bank: data.bank,
        accountName: data.accountName,
        accountNumber: data.accountNumber,
        branch: data.branch,
        description: data.description,
        isSigned: data.isSigned,
        teacherCode: data.teacherCode
      };

      contractService.create(newContract)
      .then((response) => {
        console.log("success!" , response.data);
      })

    };


    const onError = (error) => {
      console.log(error)
    }


    useEffect(() => {
      initial();
    }, []);

    const initial = () => {
      contractService
      .getAll()
      .then((response) => {
        setContractList(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
      
    }

    const findTeacherByTeacherCodeHandler = (event) => {
      event.preventDefault();
      const searchingValue = document.querySelector('#contractForm').value;

      contractService.getByTeacherCode(searchingValue).then((res) => {
        setContractList(res.data)
      })

    }

    //created Contract


    // const addTeacherHandler = (event) => {

    // }





  return (
    <section>
      <h1>Contract List</h1>

      <h3>Teachers who: </h3>
        <form onSubmit={findTeacherByTeacherCodeHandler}>
          <label htmlFor="contractForm">Find teacher by teacher code:</label>
          <input type="text" id="contractForm" placeholder="Enter teacher code"/>
          <button>Search</button>
        </form>
      <br />
      <h3>Add Teacher</h3>
      <Button variant="primary" onClick={handleShow}>
        Add teacher
      </Button>
      




      <table className="table table-hover">
        <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee Code</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Teacher type</th>
      <th scope="col">Contract Id</th>
      <th scope="col">Start date</th>
      <th scope="col">End date</th>
      <th scope="col">Pay rate</th>
      <th scope="col">Action</th>

    </tr>
        </thead>


        <tbody>
    {
      contractList.map(contract => (
    <tr key={contract.id}>
      <th scope='row'>{contract.id}</th>
      <td>{contract.employeeCode}</td>
      <td>{contract.firstName}</td>
      <td>{contract.lastName}</td>
      <td>{contract.teacherType}</td>
      <td>{contract.contractId}</td>
      <td>{contract.startDate}</td>
      <td>{contract.endDate}</td>
      <td>{contract.payRate}</td>
      <td>
      <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
      </td>
      
    </tr>
      ))
    }

          </tbody>
</table>

{/* CREATE APP */}

    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title >
            <h4 className='ml-5'>Wanna add contract? Try this!</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="form-group">
          <label htmlFor="contractId">Contract ID:</label>
          <input className='form-control' id="contractId" type="text" placeholder="Contract ID" {...register("contractId", { maxlength: 80})} />
          </div>

          <div className="form-group">
          <label htmlFor="startDate">Start date:</label>
          <input className='form-control' id="startDate" type="date" placeholder="Start date" {...register("startDate", {required: true, maxlength: 100})} />
          </div>

          <div className="form-group">
          <label htmlFor="endDate">End date:</label>
          <input className='form-control' id="endDate" type="date" placeholder="End date" {...register("endDate", {})} />
          </div>

          <div className="form-group">
          <label htmlFor="payRate">Pay rate:</label>
          <input className='form-control' id="payRate" type="number" placeholder="Pay rate" {...register("payRate", { maxlength: 12})} />
          </div>

          <div className="form-group">
          <label htmlFor="bank">Bank</label>
          <input className='form-control' id="bank" type="text" placeholder="Bank" {...register("bank", {})} />
          </div>

          <div className="form-group">
          <label htmlFor="accountName">Account name:</label>
          <input className='form-control' id="accountName" type="text" placeholder="Account name" {...register("accountName", {})} />
          </div>

          <div className="form-group">
          <label htmlFor="accountNumber">Account number:</label>
          <input className='form-control' id="accountNumber" type="number" placeholder="Account number" {...register("accountNumber", {})} />
          </div>

          <div className="form-group">
          <label htmlFor="">Branch:</label>
          <select className='form-control' {...register("branch")}>
            <option value="vietcombank">Vietcombank</option>
          </select>
          </div>

          <div className="form-group">
          <label htmlFor="description">Description</label>
          <input className='form-control' id="description" type="text" placeholder="Description" {...register("description", {})} />
          </div>

          <div className="form-group">
          <label htmlFor="signed">Sign:</label>
          <div className='form-control'>
          <input {...register("isSigned")} className="form-check-inline " type="radio" defaultValue="true" name="signContract"/>Yes     
          <input {...register("isSigned")} className="form-check-inline ml-5" type="radio" defaultValue="false" name="signContract"/>No
          </div>
          </div>

          <div className="form-group">
          <label htmlFor="teacherCode">Teacher code:</label>
          <input className='form-control' id="teacherCode" type="text" placeholder="Teacher Code" {...register("teacherCode", {})} />
          </div>

          <div className='d-flex justify-content-center'>
          <Button variant="primary" type = "submit">
            Save
          </Button>
          </div>

        </form>












        </Modal.Body>
        
        
        
        
        
        
        
        
        
        
        
        
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>






    </section>
  )
}
