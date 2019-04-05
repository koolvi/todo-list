import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class SumValue extends Component {
  render() {
    const { classes, sumPrice } = this.props;
    return (
      <div className={classes.sumValue}>
        {`Всего на сумму: ${sumPrice} ₽`}
      </div>
    );
  }
}

const styles = {
  sumValue: {
    userSelect: 'none',
    fontSize: '19px',
    fontWeight: 700,
    padding: '8px 0px 2px 0px',
  },
};

export default withStyles(styles)(SumValue);
