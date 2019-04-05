import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/rootReducer'; // корень редьюса

import './styles/index.css';
import App from './App';

// встроенная функция редакса, передаем ей то что экспортирует рутредьюсер
// на выходе в сторе лежать будет что-то объекта
const store = createStore(
  rootReducer,
  global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  global.document.getElementById('root'),
);
