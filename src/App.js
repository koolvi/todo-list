import React, { Component } from 'react';
import { Router } from 'react-router-dom';

import Routes from './pages/Routes';

import { history } from './utils/services/navigation';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}

export default App;
