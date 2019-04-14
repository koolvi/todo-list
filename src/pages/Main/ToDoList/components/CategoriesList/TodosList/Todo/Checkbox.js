import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CheckboxMUI from '@material-ui/core/Checkbox';
import colors from '../../../../../../../styles/colors';

const styles = {
  root: {
    color: colors.primary,
    '&$checked': {
      color: colors.secondary,
    },
  },
  checked: {},
};

class Checkbox extends React.Component {
  render() {
    const { classes, onClick, completed } = this.props;

    return (
      <CheckboxMUI
        onChange={onClick}
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
        checked={completed}
      />
    );
  }
}

export default withStyles(styles)(Checkbox);
