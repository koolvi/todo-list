import * as actionTypes from './actionTypes';

const initialState = {
  data: null,
  hasErrorText: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ASSIGN_ERROR: return {
      ...state,
      hasErrorText: action.payload,
    };
    case actionTypes.SET_DATA: return {
      ...state,
      data: action.payload,
    };
    default: return state;
  }
};
