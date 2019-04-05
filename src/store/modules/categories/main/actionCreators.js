import * as actionTypes from './actionTypes';


export const updateCategories = categories => ({
  type: actionTypes.UPDATE_CATEGORIES,
  payload: categories,
});
