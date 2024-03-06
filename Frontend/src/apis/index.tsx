import axios from 'axios';


//  base url adde
axios.defaults.baseURL = 'http://127.0.0.1:8000/';


export const getUsersAPI = async () => axios.get(`/users`);

export const getUserByIdAPI = async (id:any) => axios.get(`/users/${id}`);

export const CreateUserAPI = async (user:any) => axios.post(`/users`, user);

export const UpdateUserAPI = async (user:any) => axios.put(`/users/${user.id}/`, user);

export const deleteUserBtIdAPI = async (id:any) => axios.delete(`/users/${id}/`);