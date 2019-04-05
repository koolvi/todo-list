import * as actionTypes from './actionTypes';


export const updateLists = lists => ({
  type: actionTypes.UPDATE_LISTS,
  payload: lists,
});

export const setSelectedList = currentList => ({
  type: actionTypes.SET_SELECTED_LIST,
  payload: currentList,
});
