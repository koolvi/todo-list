import * as actionTypes from './actionTypes';

export const changeLogin = newValue => ({
  type: actionTypes.CHANGE_LOGIN,
  payload: newValue,
});

export const changePassword = newValue => ({
  type: actionTypes.CHANGE_PASSWORD,
  payload: newValue,
});

export const assignErrorLogin = value => ({
  type: actionTypes.ERROR_LOGIN,
  payload: value,
});

export const assignErrorPassword = value => ({
  type: actionTypes.ERROR_PASSWORD,
  payload: value,
});
