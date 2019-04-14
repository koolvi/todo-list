import React, { Component } from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../../styles/colors';

import SvgIcon from './SvgIcon';
import TextInput from './TextInput';
import NumInput from './NumInput';

class Input extends Component {
  static defaultProps = {
    inputType: 'text',
  }

  state = {
    isFocused: false,
  };

  getResContainerClass = () => {
    const { isFocused } = this.state;
    const { classes, hasError } = this.props;

    if (hasError) return classes.containerHasError;
    if (isFocused) return classes.containerFocused;
    return '';
  }

  getInputCompByType = (inputType) => {
    switch (inputType) {
      case 'number': return NumInput;
      case 'text': return TextInput;
      default: return null;
    }
  }

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const {
      classes,
      iconSrc,
      inputType,
      hasError,
      ...rest
    } = this.props;

    const InputComp = this.getInputCompByType(inputType);

    return (
      <div className={cn(classes.container, this.getResContainerClass())}>
        {(iconSrc) && (
          <div className={classes.iconContainer}>
            <SvgIcon src={iconSrc} />
          </div>
        )}
        <div className={classes.inputContainer}>
          <InputComp
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            {...rest}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    border: `1px ${colors.primary} solid`,
    overflow: 'hidden',
  },
  containerFocused: {
    boxShadow: '0px 0px 2px 0px rgba(0,30,255,1)',
    border: '1px rgba(68, 81, 182, 0.705) solid',
  },
  containerHasError: {
    boxShadow: '0px 0px 2px 0px rgb(255, 53, 53)',
    border: '1px rgb(255, 53, 53) solid',
  },
  iconContainer: {
    width: '30px',
    background: colors.secondary,
  },
  inputContainer: {
    flex: 1,
    padding: '0px 5px',
  },
};

export default withStyles(styles)(Input);
