import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';

class NameBoxes extends Component {
  render() {
    const { classes, completed, text } = this.props;
    const resClass = completed === true
      ? cn(classes.nameBoxes, classes.nameBoxesActive)
      : cn(classes.nameBoxes, classes.nameBoxesNoActive);

    return (
      <div className={resClass}>
        {text}
      </div>
    );
  }
}

const styles = {
  nameBoxes: {
    flex: 1,
    margin: '2px 2px 2px 2px',
    userSelect: 'none',
    overflow: 'hidden',
    wordWrap: 'break-word',
  },
  nameBoxesNoActive: {
    color: 'black',
  },
  nameBoxesActive: {
    color: 'gray',
    textDecoration: 'line-through',
  },
};

export default withStyles(styles)(NameBoxes);
