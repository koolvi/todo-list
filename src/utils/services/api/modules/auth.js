import axios from 'axios';
import { prefix } from '../consts';

const login = async (userName, pass) => {
  const response = await axios.post(`${prefix}/auth/login`, {
    login: userName,
    pass,
  });
  return response.data.sessionId;
};

const logout = async () => {
  const sessionId = global.localStorage.getItem('sessionId');
  const response = await axios.post(`${prefix}/auth/logout`, {}, {
    headers: { 'x-session-id': sessionId },
  });
  return response;
};

const register = async (userName, pass) => {
  const response = await axios.post(`${prefix}/auth/register`, {
    login: userName,
    pass,
  });
  return response.data.sessionId;
};

export default {
  login,
  logout,
  register,
};
