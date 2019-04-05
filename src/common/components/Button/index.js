import React, { Component } from 'react';

import ClassicButton from './ClassicButton';
import RoundButton from './RoundButton';

const getButtonCompByType = (getProps) => {
  const { buttonText, ButtonImg } = getProps;
  if (buttonText) {
    return ClassicButton;
  } if (ButtonImg) {
    return RoundButton;
  }
  return null;
};

class Button extends Component {
  render() {
    const ButtonComp = getButtonCompByType(this.props);
    return (
      <ButtonComp {...this.props} />
    );
  }
}

export default Button;
