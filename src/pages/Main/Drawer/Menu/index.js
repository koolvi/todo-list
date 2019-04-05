import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import ListsSection from './ListsSection';
import CategoriesSection from './CategoriesSection';


class Menu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.containerClass}>
        <ListsSection />
        <CategoriesSection />
      </div>
    );
  }
}

const styles = {
  containerClass: {
    userSelect: 'none',
  },
};

export default withStyles(styles)(Menu);
