import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/assignmentDetails');
}

const create = data => {
    return httpClient.post("/assignmentDetails", data);
}

//get by id
const get = id => {
    return httpClient.get(`/assignmentDetails/${id}`);
}

//GET BY TEACHER CODE AND START DATE AFTER
const getByTeacherCodeAndStartDateAfter = (teacherCode, startDate) => {
    return httpClient.get(`/assignmentDetails/find?teacherCode=${teacherCode}&startDate=${startDate}`);
}

//GET BY TEACHER CODE AND CLASS ID
const getByTeacherCodeAndClassId = (teacherCode, classID) => {
    return httpClient.get(`/assignmentDetails/find-class?teacherCode=${teacherCode}&classId=${classID}`);
}

const update = (id , data) => {
    return httpClient.put(`/assignmentDetails/${id}`, data);
}

const remove = id => {
    return httpClient.delete(`/assignmentDetails/${id}`);
}



const contractService = { getAll, create, get, update, remove, getByTeacherCodeAndStartDateAfter, getByTeacherCodeAndClassId} 

export default contractService;