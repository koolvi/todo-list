import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../../styles/colors';

class RoundButton extends Component {
  render() {
    const {
      classes,
      onClick,
      ButtonImg,
      ...rest
    } = this.props;

    return (
      <div className={classes.container} onClick={onClick}>
        <ButtonImg
          className={classes.icon}
          {...rest}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px 0px 5px 0px',
    border: `1px solid ${colors.roundBtn}`,
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    background: 'white',
    transition: 'all .218s ease 0s',
    '&:hover': {
      color: 'rgb(24,24,24)',
      border: `1px solid ${colors.secondary}`,
      background: colors.hover,
    },
    '&:active': {
      color: 'rgb(51,51,51)',
      border: `1px solid ${colors.roundBtnLight}`,
      background: 'white',
    },
  },
  icon: {
    height: '45%',
    width: '45%',
  },
};

export default withStyles(styles)(RoundButton);
