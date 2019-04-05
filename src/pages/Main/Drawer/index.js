import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DrawerMUI from '@material-ui/core/Drawer';
import Menu from './Menu';

const styles = {
  menu: {
    width: 300,
  },
};

class Drawer extends React.Component {
  render() {
    const {
      classes,
      open,
      ...rest
    } = this.props;

    return (
      <DrawerMUI
        open={open}
        {...rest}
      >
        <div className={classes.menu}>
          <Menu />
        </div>
      </DrawerMUI>
    );
  }
}

export default withStyles(styles)(Drawer);
