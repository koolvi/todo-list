import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { history } from '../../utils/services/navigation';

import apiService from '../../utils/services/api';
import AuthForm from '../../common/components/AuthForm/index';
import TextAndLink from '../../common/components/TextAndLink';

class Register extends Component {
  handleSubmit = async (login, password) => {
    const sessionId = await apiService.auth.register(login, password);
    global.localStorage.setItem('sessionId', sessionId);
    history.push('/main');
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.authPage}>
        <AuthForm
          title="Регистрация"
          text="Зарегистрироваться"
          onSubmit={this.handleSubmit}
        />
        <TextAndLink
          textBottomPart="Есть аккаунт?"
          adressLink="/login"
          textLink="Выполнить вход"
        />
      </div>
    );
  }
}

const styles = {
  authPage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
};

export default withStyles(styles)(Register);
