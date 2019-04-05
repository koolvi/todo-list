import axios from 'axios';
import { prefix } from '../consts';
import parseTodo from '../parsers/todo';


const getToDos = async (listId) => {
  const { sessionId } = global.localStorage;
  const response = await axios.get(`${prefix}/todo/${listId}`, {
    headers: { 'x-session-id': sessionId },
  });
  return response.data.map(parseTodo);
};

const createNewTodo = async (listId, todoData) => {
  const { sessionId } = global.localStorage;
  const response = await axios.post(`${prefix}/todo/${listId}`, {
    text: todoData.text,
    completed: false,
    price: todoData.price,
    categoryId: todoData.category,
  }, {
    headers: { 'x-session-id': sessionId },
  });
  return response;
};

const deleteAllTodo = async (listId) => {
  const { sessionId } = global.localStorage;
  const response = await axios.delete(`${prefix}/todo/${listId}`, {
    headers: { 'x-session-id': sessionId },
  });
  return response;
};

const deleteByIdTodoInList = async (listId, todoId) => {
  const { sessionId } = global.localStorage;
  const response = await axios.delete(`${prefix}/todo/${listId}/${todoId}`, {
    headers: { 'x-session-id': sessionId },
  });
  return response;
};

const updateTodo = async (listId, todo) => {
  const { sessionId } = global.localStorage;
  const response = await axios.put(`${prefix}/todo/${listId}/${todo.id}`, {
    fields: {
      text: todo.text,
      price: todo.price,
      categoryId: todo.category,
    },
  }, {
    headers: { 'x-session-id': sessionId },
  });
  return response;
};

const chekedTodo = async (listId, todo, newStateTodo) => {
  // функция, меняющая на сервере инфу о том вкл или выкл галочка (чек)
  const { sessionId } = global.localStorage;
  const response = await axios.put(`${prefix}/todo/${listId}/${todo.id}`, {
    fields: {
      completed: newStateTodo,
    },
  }, {
    headers: { 'x-session-id': sessionId },
  });
  return response;
};

export default {
  getToDos,
  createNewTodo,
  deleteAllTodo,
  deleteByIdTodoInList,
  updateTodo,
  chekedTodo,
};
