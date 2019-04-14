import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import * as actionCreatorsCurrentTodo from '../../../../../store/modules/todos/current/actionCreators';

import colors from '../../../../../styles/colors';

import Button from '../../../../../common/components/Button';
import IconCancel from '../../../../../common/components/Button/image/IconCancel';
import Input from '../../../../../common/components/Input';
import CategorySelect from './CategorySelect';
import deleteLastSpaceInStr from '../../../../../utils/deleteLastSpaceInStr';
import IconCheckMark from '../../../../../common/components/Button/image/IconCheckMark';


class SectorEditForm extends Component {
  changeText = (text) => {
    const { updateField } = this.props;
    updateField('text', text);
    updateField('hasErrorText', false);
  }

  changePrice = (price) => {
    const { updateField } = this.props;
    updateField('price', price);
  }

  changeCategory = (event) => {
    const { updateField } = this.props;
    updateField('category', event.target.value);
  }

  handleAdd = () => { // обработать добавленный текст в поле название нового продукта
    const { todoData, updateField, onClickConfirm } = this.props;
    const correctStr = deleteLastSpaceInStr(todoData.text);
    if (correctStr.length === 0) {
      updateField('hasErrorText', true);
      setTimeout(() => {
        updateField('hasErrorText', false);
      }, 1000);
    } else {
      onClickConfirm({
        ...todoData,
        text: correctStr,
        price: todoData.price,
        category: todoData.category,
        completed: todoData.completed,
      });
    }
  }

  render() {
    const {
      classes,
      currentTodoData,
      todoData,
      hasErrorText,
      reset,
    } = this.props;

    return (
      <div className={classes.newSector}>
        <div className={classes.nameNewSector}>
          {(currentTodoData && currentTodoData.id !== null) ? 'Редактирование товара' : 'Новый товар'}
        </div>
        <div className={classes.newInfa}>
          <div className={classes.nameAndPrice}>
            <div className={classes.containerText}>
              <Input
                inputType="text"
                maxLength="30"
                placeholder="Введите название..."
                onChange={this.changeText}
                value={todoData.text}
                autoFocus
                hasError={hasErrorText}
              />
            </div>
            <div className={classes.containerPrice}>
              <Input
                inputType="number"
                maxLength="5"
                max="99999"
                placeholder="0"
                onChange={this.changePrice}
                value={todoData.price || ''}
                hasError={hasErrorText}
              />
            </div>
            <div className={classes.currencyValue}>
              ₽
            </div>
          </div>
          <CategorySelect
            clickCategory={this.changeCategory}
            categoryCurrentEditTodo={todoData.category}
          />
        </div>

        <div className={classes.controlPanelNewSector}>
          <div className={classes.buttonsNewSector}>
            <Button
              buttonText={(currentTodoData && currentTodoData.id !== null) ? 'Сохранить' : 'Добавить'}
              ButtonImg={IconCheckMark}
              width="150px"
              onClick={this.handleAdd}
            />
            <Button
              buttonText="Отменить"
              ButtonImg={IconCancel}
              width="150px"
              onClick={reset}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  newSector: {
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    borderRadius: '5px',
    boxShadow: '0px 1px 11px 1px rgba(0,0,0,0.44)',
  },
  nameNewSector: {
    background: colors.primary,
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    textAlign: 'center',
    padding: '10px 0px',
    width: '100%',
    fontSize: '16px',
    color: 'white',
  },
  newInfa: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  nameAndPrice: {
    display: 'flex',
    marginTop: '15px',
  },
  currencyValue: {
    fontFamily: 'sans-serif',
    fontSize: '15px',
    userSelect: 'none',
    paddingTop: '8px',
    height: '29px',
  },
  controlPanelNewSector: {
    background: 'rgb(255, 255, 255)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px',
    width: '100%',
  },
  buttonsNewSector: {
    display: 'flex',
    margin: '10px 0px 15px 0px',
  },
  cancelIcon: {
    height: '25px',
    width: '25px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(\'./images/icon-cancel.svg\')',
  },
  containerText: {
    width: '80%',
    marginRight: '15px',
  },
  containerPrice: {
    width: '15%',
    marginRight: '5px',
  },
};

const mapStateToProps = state => ({
  todoData: state.todos.current.data,
  hasErrorText: state.todos.current.hasErrorText,
  currentTodoData: state.todos.current.data,
});

const mapDispatchToProps = {
  updateField: actionCreatorsCurrentTodo.updateField,
  reset: actionCreatorsCurrentTodo.reset,
};

const styled = withStyles(styles)(SectorEditForm);
export default connect(mapStateToProps, mapDispatchToProps)(styled);
