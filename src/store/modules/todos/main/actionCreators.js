import * as actionTypes from './actionTypes';

export const setTodosList = newValue => ({
  type: actionTypes.SET_TODOS_LIST,
  payload: newValue,
});
