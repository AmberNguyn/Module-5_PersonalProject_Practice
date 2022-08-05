import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/teachers');
}

const create = data => {
    return httpClient.post("/teachers", data);
}

const get = id => {
    return httpClient.get(`/teachers/${id}`);
}

const update = (id , data) => {
    return httpClient.put(`/teachers/${id}`, data);
}

const remove = id => {
    return httpClient.delete(`/teachers/${id}`);
}

const getTeacherType = input => {
    return httpClient.get(`/teachers/find-by-teacher-type?teacherType=${input}`);
}


const teacherService = { getAll, create, get, update, remove, getTeacherType } 

export default teacherService;