import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../../styles/colors';
import removeUnnecessarySpaces from '../../../utils/removeUnnecessarySpaces';


class TextInput extends Component {
  render() {
    const { classes, onChange, ...rest } = this.props;

    return (
      <input
        className={classes.inputComponent}
        onChange={(e) => {
          const textWithoutSpaces = removeUnnecessarySpaces(e.target.value);
          onChange(textWithoutSpaces);
        }}
        {...rest}
      />
    );
  }
}

const styles = {
  inputComponent: {
    width: '100%',
    height: '100%',
    border: '0px',
    fontFamily: 'sans-serif',
    fontSize: '15px',
    padding: 0,
    color: colors.textSecondary,
  },
};

export default withStyles(styles)(TextInput);
