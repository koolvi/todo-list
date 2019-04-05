import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './Main';
import Login from './Login';
import Register from './Register';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/register" component={Register} exact />
        <Route path="/main" component={Main} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    );
  }
}

export default Routes;
