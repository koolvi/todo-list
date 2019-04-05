import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class ErrorBox extends Component {
  render() {
    const { text, classes } = this.props;
    return (
      <div className={classes.errorBox}>
        {text}
      </div>
    );
  }
}

const styles = {
  errorBox: {
    color: 'red',
    fontSize: '12px',
    fontFamily: 'sans-serif',
    width: '100%',
    padding: '5px 0px',
    textAlign: 'center',
  },
};

export default withStyles(styles)(ErrorBox);
