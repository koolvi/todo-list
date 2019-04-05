import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import noSpaces from '../../../utils/noSpaces';


class NumInput extends Component {
  render() {
    const { classes, onChange, ...rest } = this.props;
    return (
      <input
        className={classes.inputComponent}
        onChange={(e) => {
          const correctStr = noSpaces(e.target.value);
          const last = correctStr.slice(-1);
          if (!isNaN(last)) {
            onChange(correctStr);
          }
        }}
        {...rest}
      />
    );
  }
}

/* === убрать стрелки у ИНПУТА для ввода новой суммы, только firefox === */
// input[type='number'] {
//   -moz-appearance: textfield;
// }

const styles = {
  inputComponent: {
    width: '100%',
    textAlign: 'center',
    height: '100%',
    padding: '0px',
    border: '0px',
  },
};

export default withStyles(styles)(NumInput);
