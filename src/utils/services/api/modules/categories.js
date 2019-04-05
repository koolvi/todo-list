import axios from 'axios';
import { prefix } from '../consts';

const getAllCategories = async () => {
  const sessionId = global.localStorage.getItem('sessionId');
  const response = await axios.get(`${prefix}/category/`, {
    headers: { 'x-session-id': sessionId },
  });
  return response;
};

const updateCategory = async (categoryId, newNameCategory) => {
  const sessionId = global.localStorage.getItem('sessionId');
  const response = await axios.put(`${prefix}/category/${categoryId}`, {
    categoryName: newNameCategory,
  }, {
    headers: { 'x-session-id': sessionId },
  });
  return response;
};

const deleteCategory = async (categoryId) => {
  const sessionId = global.localStorage.getItem('sessionId');
  const response = await axios.delete(`/api/category/${categoryId}`, {
    headers: {
      'x-session-id': sessionId,
    },
  });
  return response;
};

const createCategory = async (nameCategory) => {
  const sessionId = global.localStorage.getItem('sessionId');
  const response = await axios.post('/api/category/', {
    categoryName: nameCategory,
  }, {
    headers: {
      'x-session-id': sessionId,
    },
  });
  return response;
};

export default {
  getAllCategories,
  updateCategory,
  deleteCategory,
  createCategory,
};
