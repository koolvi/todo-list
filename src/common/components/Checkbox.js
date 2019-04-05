import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import colors from '../../styles/colors';

const styles = {
  root: {
    color: colors.primary,
    '&$checked': {
      color: colors.secondary,
    },
  },
  checked: {},
};

class CheckboxLabels extends React.Component {
  render() {
    const { classes, clic, completed } = this.props;

    return (
      <Checkbox
        onChange={clic}
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
        checked={completed}
      />
    );
  }
}

export default withStyles(styles)(CheckboxLabels);
