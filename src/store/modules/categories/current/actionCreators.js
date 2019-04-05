import * as actionTypes from './actionTypes';

export const assignError = value => ({
  type: actionTypes.ASSIGN_ERROR,
  payload: value,
});

export const setData = data => ({
  type: actionTypes.SET_DATA,
  payload: data,
});
