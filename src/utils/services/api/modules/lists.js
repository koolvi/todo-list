import axios from 'axios';
import { prefix } from '../consts';

const getAllLists = async () => {
  const sessionId = global.localStorage.getItem('sessionId');
  const response = await axios.get(`${prefix}/list/`, {
    headers: { 'x-session-id': sessionId },
  });
  return response;
};

const updateList = async (listId, newNameList) => {
  const sessionId = global.localStorage.getItem('sessionId');
  const response = await axios.put(`${prefix}/list/${listId}`, {
    newListName: newNameList,
  }, {
    headers: { 'x-session-id': sessionId },
  });
  return response;
};

const deleteList = async (listId) => {
  const sessionId = global.localStorage.getItem('sessionId');
  const response = await axios.delete(`/api/list/${listId}`, {
    headers: {
      'x-session-id': sessionId,
    },
  });
  return response;
};

const createList = async (listName) => {
  const sessionId = global.localStorage.getItem('sessionId');
  const response = await axios.post('/api/list/', {
    listName,
  }, {
    headers: {
      'x-session-id': sessionId,
    },
  });
  return response;
};

export default {
  getAllLists,
  updateList,
  deleteList,
  createList,
};
