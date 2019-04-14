import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';


class SvgIcon extends Component {
  render() {
    const {
      classes,
      src,
      className,
      imageClassName,
    } = this.props;
    return (
      <div className={cn(classes.container, className)}>
        <img
          src={src}
          alt="Изображение"
          className={imageClassName}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default withStyles(styles)(SvgIcon);
