import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';

class LineGradient extends Component {
  static defaultProps = {
    type: 'big',
  }

  getLineByType = (type) => {
    const { classes, otherClass } = this.props;
    switch (type) {
      case 'big': return (
        <hr className={classes.bigLine} />
      );
      case 'miniRight': return (
        <hr className={cn(classes.miniLine, classes.rightMiniLine, otherClass)} />
      );
      case 'miniLeft': return (
        <hr className={cn(classes.miniLine, classes.leftMiniLine, otherClass)} />
      );
      default: return null;
    }
  };

  render() {
    const { type } = this.props;
    return (
      this.getLineByType(type)
    );
  }
}

const styles = {
  bigLine: {
    height: '1px',
    border: '0px',
    backgroundImage: '-moz-linear-gradient(left, rgba(255,255,255,0), rgb(10, 10, 10), rgba(255,255,255,0))',
  },
  miniLine: {
    height: '1px',
    border: '0px',
    flex: 1,
  },
  rightMiniLine: {
    backgroundImage: 'linear-gradient(to left, rgba(120, 153, 30, 0), rgb(146, 146, 146), rgb(70, 70, 70))',
  },
  leftMiniLine: {
    backgroundImage: 'linear-gradient(to right, rgba(120, 153, 30, 0), rgb(146, 146, 146), rgb(70, 70, 70))',
  },
};

export default withStyles(styles)(LineGradient);
