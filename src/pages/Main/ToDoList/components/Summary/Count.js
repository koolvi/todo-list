import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Count extends Component {
  render() {
    const { classes, countActiveSector, countSectors } = this.props;
    return (
      <div className={classes.count}>
        {`Осталось: ${countActiveSector} из ${countSectors} позиций`}
      </div>
    );
  }
}

const styles = {
  count: {
    userSelect: 'none',
    fontSize: '13px',
    padding: '2px 0px 8px 0px',
    color: 'rgb(44, 44, 44)',
  },
};

export default withStyles(styles)(Count);
