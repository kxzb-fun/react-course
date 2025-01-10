import axios from "axios";
const baseUrl = "http://localhost:3001/todos";

export const getAllTodo = () => {
  return axios.get(baseUrl);
};

export const createTodo = (newTodo) => {
  return axios.post(baseUrl, newTodo);
};

export const deleteTodo = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

