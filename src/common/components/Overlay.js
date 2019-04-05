import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';


class Overlay extends Component {
  render() {
    const {
      open,
      children,
      containerClass,
      classes,
    } = this.props;

    return open ? (
      <div className={classnames(classes.container, containerClass)}>
        {/* во втором аргументе видимо передаем overlayContainer */}
        {/* если один аргумент: */}
        {/* <div className={classes.container}> */}
        {children}
      </div>
    ) : null;
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)',
    zIndex: 9,
  },
};

export default withStyles(styles)(Overlay);
