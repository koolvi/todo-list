import * as actionTypes from './actionTypes';

const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CATEGORIES: return {
      ...state,
      categories: action.payload,
    };
    default: return state;
  }
};
