import * as actionTypes from './actionTypes';

export const updateField = (fieldName, newValue) => ({
  type: actionTypes.UPDATE_FIELD,
  field: fieldName,
  payload: newValue,
});

export const setData = todo => ({
  type: actionTypes.SET_DATA,
  payload: todo,
});

export const reset = () => ({
  type: actionTypes.RESET,
});
