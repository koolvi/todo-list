import React, { Component } from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../styles/colors';

class FormContainer extends Component {
  render() {
    const {
      classes,
      className,
      title,
      children,
    } = this.props;

    return (
      <div className={cn(classes.containerForm, className)}>
        <div className={classes.containerTitle}>
          <div className={classes.title}>
            {title}
          </div>
        </div>

        <div className={classes.main}>
          {children}
        </div>
      </div>
    );
  }
}

const styles = {
  containerForm: {
    width: '340px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 1px rgba(184,184,184,1)',
    userSelect: 'none',
    overflow: 'hidden',
  },
  containerTitle: {
    width: '100%',
    background: colors.primary,
    textAlign: 'center',
    color: colors.textPrimary,
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: '3px',
    margin: '15px 0px',
  },
  main: {
    width: '100%',
  },
};

export default withStyles(styles)(FormContainer);
