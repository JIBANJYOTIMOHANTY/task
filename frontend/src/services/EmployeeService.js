import axios from "axios";


const REST_API_BASE_URL = "http://localhost:8081/api/"

export const listEmployees = () => axios.get(REST_API_BASE_URL)

export const createEmployee = (tasks) => axios.post(REST_API_BASE_URL, tasks)

export const getEmployee = (id) => axios.get(REST_API_BASE_URL + '/' + id)

export const updateEmployee = (id, tasks) => axios.put(REST_API_BASE_URL + '/' + id,tasks)

export const deleteEmployee = (id) => axios.delete(REST_API_BASE_URL + '/' + id)