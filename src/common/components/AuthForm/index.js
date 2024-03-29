import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/modules/auth/actionCreators';

import CardWithTitle from '../CardWithTitle';
import Input from '../Input';
import ErrorBox from './ErrorBox';
import Button from '../Button';

import iconLogin from './images/icon-user.svg';
import iconPassword from './images/icon-password.svg';

import removeAllSpaces from '../../../utils/removeAllSpaces';


class AuthForm extends Component {
  getCorrectStr = (str, func) => {
    const correctStr = removeAllSpaces(str);
    func(correctStr);
  }

  checkEmptyFields = (login, password) => {
    let result = false;
    const { assignErrorLogin, assignErrorPassword } = this.props;
    if (login.length === 0) {
      assignErrorLogin(true);
      result = true;
      setTimeout(() => {
        assignErrorLogin(false);
      }, 1500);
    }
    if (password.length === 0) {
      assignErrorPassword(true);
      result = true;
      setTimeout(() => {
        assignErrorPassword(false);
      }, 1500);
    }
    return result;
  }

  callFunc = () => {
    const { auth } = this.props;
    const { login, password } = auth;
    const { onSubmit } = this.props;
    const resultCheckEmpty = this.checkEmptyFields(login, password);
    if (!resultCheckEmpty) {
      onSubmit(login, password);
    }
  }

  render() {
    const {
      auth,
      classes,
      title,
      text,
      errors,
      updateLogin,
      updatePassword,
    } = this.props;

    return (
      <CardWithTitle title={title}>
        <div className={classes.container}>
          <div className={classes.inputContainer}>
            <Input
              iconSrc={iconLogin}
              inputType="text"
              maxLength="20"
              placeholder="Введите имя пользователя"
              onChange={writingText => this.getCorrectStr(writingText, updateLogin)}
              value={auth.login}
              hasError={errors.hasErrorLogin}
            />
          </div>

          <div className={classes.inputContainer}>
            <Input
              iconSrc={iconPassword}
              value={auth.password}
              type="password"
              maxLength="20"
              placeholder="Введите пароль"
              onChange={writingText => this.getCorrectStr(writingText, updatePassword)}
              hasError={errors.hasErrorPassword}
            />
          </div>

          {errors.hasErrorLogin ? <ErrorBox text={errors.errorTextLogin} /> : null}
          {errors.hasErrorPassword ? <ErrorBox text={errors.errorTextPassword} /> : null}
          <Button
            buttonText={text}
            width="80%"
            onClick={this.callFunc}
          />
        </div>
      </CardWithTitle>
    );
  }
}

const styles = {
  container: {
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    height: '40px',
    width: '100%',
    marginBottom: '20px',
  },
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.auth.errors,
});

const mapDispatchToProps = {
  updateLogin: actionCreators.changeLogin,
  updatePassword: actionCreators.changePassword,
  assignErrorLogin: actionCreators.assignErrorLogin,
  assignErrorPassword: actionCreators.assignErrorPassword,
};

const styled = withStyles(styles)(AuthForm);
export default connect(mapStateToProps, mapDispatchToProps)(styled);
