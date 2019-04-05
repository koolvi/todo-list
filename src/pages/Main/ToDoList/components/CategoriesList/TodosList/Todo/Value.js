import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';


class Value extends Component {
  render() {
    const { classes, completed, price } = this.props;
    const resClass = completed === true
      ? cn(classes.value, classes.valueActive)
      : classes.value;

    return (
      <div className={resClass}>
        {`${price} ₽`}
      </div>
    );
  }
}

const styles = {
  valueActive: {
    color: 'gray',
    textDecoration: 'line-through',
  },
  value: {
    fontSize: '13px',
    width: '50px',
    height: '14px',
    textAlign: 'center',
    userSelect: 'none',
  },
};

export default withStyles(styles)(Value);
