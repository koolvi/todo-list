import * as actionTypes from './actionTypes';

export const changeLogin = newValue => ({
  type: actionTypes.CHANGE_LOGIN, // имя действия или экшена, обязат.поле
  payload: newValue, // данные действия,необязат. поле
});

export const changePassword = newValue => ({
  type: actionTypes.CHANGE_PASSWORD,
  payload: newValue,
});

export const assignErrorLogin = value => ({ // присвоить ошибку полю: логин
  type: actionTypes.ERROR_LOGIN,
  payload: value,
});

export const assignErrorPassword = value => ({ // присвоить ошибку полю: пароль
  type: actionTypes.ERROR_PASSWORD,
  payload: value,
});
