import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { history } from '../../utils/services/navigation';

import apiService from '../../utils/services/api';
import AuthForm from '../../common/components/AuthForm/index';
import TextAndLink from '../../common/components/TextAndLink';

class Login extends Component {
  handleSubmit = async (login, password) => {
    try {
      const sessionId = await apiService.auth.login(login, password);
      global.localStorage.setItem('sessionId', sessionId);
      history.push('/main');
    } catch (error) {
      if (error.response.data.code === 'USER_NOT_FOUND') {
        global.alert('Пользователь не зарегистрирован!');
      }
      if (error.response.data.code === 'WRONG_PASSWORD') {
        global.alert('Введен неверный пароль!');
      }
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <AuthForm
          title="Авторизация"
          text="Войти"
          onSubmit={this.handleSubmit}
        />
        <TextAndLink
          text="Нет аккаунта?"
          adressLink="/register"
          textLink="Регистрация"
        />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
};

export default withStyles(styles)(Login);
