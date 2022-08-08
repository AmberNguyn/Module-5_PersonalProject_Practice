import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/contracts');
}

const create = data => {
    return httpClient.post("/contracts", data);
}

//get by id
const get = id => {
    return httpClient.get(`/contracts/${id}`);
}

//get by contract id
const getByContractId = contractCode => {
    return httpClient.get(`/contracts/get-by-contract-id?contractId=${contractCode}`);
}

//get by teacher code
const getByTeacherCode = teacherCode => {
    return httpClient.get(`/contracts/get-by-teacher-code?teacherCode=${teacherCode}`);
}

const update = (id , data) => {
    return httpClient.put(`/contracts/${id}`, data);
}

const remove = id => {
    return httpClient.delete(`/contracts/${id}`);
}



const contractService = { getAll, create, get, update, remove, getByContractId, getByTeacherCode } 

export default contractService;