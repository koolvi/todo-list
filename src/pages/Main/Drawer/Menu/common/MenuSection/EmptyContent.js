import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class EmptyContent extends Component {
  render() {
    const { classes, text } = this.props;
    return (
      <div className={classes.emptyContent}>
        {text}
      </div>
    );
  }
}

const styles = {
  emptyContent: {
    color: 'rgb(190, 190, 190)',
    fontSize: '15px',
    textAlign: 'center',
    height: '47.4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default withStyles(styles)(EmptyContent);
