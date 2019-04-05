import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../../../../../styles/colors';

class MenuSectionContainer extends Component {
  render() {
    const { classes, title, children } = this.props;
    return (
      <div className={classes.main}>

        <div className={classes.title}>
          {title}
        </div>

        {children}

      </div>
    );
  }
}

const styles = {
  main: {
    marginBottom: '20px',
  },
  title: {
    background: colors.primary,
    color: colors.textPrimary,
    height: '63px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
  },
};

export default withStyles(styles)(MenuSectionContainer);
