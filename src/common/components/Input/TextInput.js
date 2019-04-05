import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../../styles/colors';
import removeSpaces from '../../../utils/removeSpaces';


class TextInput extends Component {
  getCorrectText = (text) => {
    // console.log(text);
    const textWithoutSpaces = removeSpaces(text);
    // const lastSimbol = textWithoutSpaces.length - 1;
    // if ((textWithoutSpaces[lastSimbol] === ' ') && (textWithoutSpaces[lastSimbol + 1] === undefined)) {
    //   console.log('1235');
    //   const correctStr = textWithoutSpaces.substr(0, lastSimbol);
    //   return correctStr;
    // }
    return textWithoutSpaces;
  };

  render() {
    const { classes, onChange, ...rest } = this.props;

    return (
      <input
        className={classes.inputComponent}
        onChange={(e) => {
          const goodText = this.getCorrectText(e.target.value);
          // onChange(e.target.value);
          onChange(goodText);
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
