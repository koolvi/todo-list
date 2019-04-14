import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import colors from '../../../styles/colors';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    border: `1px solid ${colors.primary}`,
    background: 'white',
    color: colors.textSecondary,
    '&:hover': {
      background: colors.hover,
    },
  },
  text: {
    marginTop: 1,
    marginLeft: 5,
  },
  icon: {
    height: '25px',
    width: '25px',
  },
});

class ClassicButton extends Component {
  static defaultProps = {
    height: 'auto',
    className: null,
  }

  render() {
    const {
      classes,
      width,
      height,
      buttonText,
      ButtonImg,
      onClick,
      ...rest
    } = this.props;

    return (
      <MuiButton
        className={classes.button}
        style={{ width, height }}
        variant="outlined"
        onClick={onClick}
      >
        {(ButtonImg !== undefined) ? (
          <ButtonImg className={classes.icon} {...rest} />
        ) : null}
        <div className={classes.text}>
          {buttonText}
        </div>
      </MuiButton>
    );
  }
}

export default withStyles(styles)(ClassicButton);
