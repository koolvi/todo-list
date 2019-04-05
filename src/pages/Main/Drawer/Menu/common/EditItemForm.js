import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '../../../../../common/components/Button';
import IconCheckMark from '../../../../../common/components/Button/image/IconCheckMark';
import IconCancel from '../../../../../common/components/Button/image/IconCancel';
import Input from '../../../../../common/components/Input';
import ButtonBlock from '../../../../../common/components/ButtonBlock';


class EditItemForm extends Component {
  static defaultProps = {
    placeholder: null,
  }

  checkError = () => {
    const { name, onClickSave, assignErrorText } = this.props;
    if (name.length === 0) {
      assignErrorText(true);
      setTimeout(() => {
        assignErrorText(false);
      }, 1000);
    } else {
      onClickSave();
    }
  };

  render() {
    const {
      classes,
      name,
      onClickCancel,
      onChange,
      placeholder,
      hasErrorText,
    } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.smallContainerForIonAndInput}>
          <Input
            inputType="text"
            maxLength="20"
            placeholder={placeholder}
            onChange={onChange}
            value={name}
            hasError={hasErrorText}
            autoFocus
          />
        </div>
        <ButtonBlock>
          <Button
            ButtonImg={IconCheckMark}
            onClick={this.checkError}
          />
          <Button
            ButtonImg={IconCancel}
            onClick={onClickCancel}
          />
        </ButtonBlock>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  smallContainerForIonAndInput: {
    fontSize: '15px',
    fontFamily: 'sans-serif',
    height: '32px',
    flex: 1,
    paddingRight: '10px',
  },
};

export default withStyles(styles)(EditItemForm);
