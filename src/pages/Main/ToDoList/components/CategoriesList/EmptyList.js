import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class EmptyList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.emptyList}>
        Список пуст
      </div>
    );
  }
}

const styles = {
  emptyList: {
    color: 'rgba(44, 44, 44, 0.137)',
    fontSize: '40px',
    textAlign: 'center',
    height: '77px',
    padding: '40px 0px 0px 30px',
  },
};

export default withStyles(styles)(EmptyList);
