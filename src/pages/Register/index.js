import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { history } from '../../utils/services/navigation';

import apiService from '../../utils/services/api';
import AuthForm from '../../common/components/AuthForm/index';
import TextAndLink from '../../common/components/TextAndLink';

class Register extends Component {
  handleSubmit = async (login, password) => {
    try {
      const sessionId = await apiService.auth.register(login, password);
      global.localStorage.setItem('sessionId', sessionId);
      history.push('/main');
    } catch (error) {
      if (error.response.data.code === 'USER_EXISTS') {
        global.alert('Пользователь уже зарегистрирован!');
      }
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <AuthForm
          title="Регистрация"
          text="Зарегистрироваться"
          onSubmit={this.handleSubmit}
        />
        <TextAndLink
          text="Есть аккаунт?"
          adressLink="/login"
          textLink="Выполнить вход"
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

export default withStyles(styles)(Register);
