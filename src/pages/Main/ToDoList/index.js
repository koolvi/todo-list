import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actionCreatorsTodos from '../../../store/modules/todos/main/actionCreators';
import * as actionCreatorsCurrentTodo from '../../../store/modules/todos/current/actionCreators';
import apiService from '../../../utils/services/api';

import CardWithTitle from '../../../common/components/CardWithTitle';
import CategoriesList from './components/CategoriesList';
import Button from '../../../common/components/Button';
import LineGradient from '../../../common/components/LineGradient';
import Summary from './components/Summary/index';

import Overlay from './components/Overlay';
import SectorEditForm from './components/SectorEditForm';
import IconNewItem from '../../../common/components/Button/image/IconNewItem';

class ToDoList extends Component {
  componentWillMount = async () => {
    const { currentList } = this.props;
    this.updateViewList(currentList._id);
  }

  componentWillReceiveProps = async (newProps) => {
    const { currentList } = this.props;
    if (newProps.currentList._id !== currentList._id) {
      this.updateViewList(newProps.currentList._id);
    }
  }

  updateViewList = async (listId) => {
    const allSectors = await apiService.todos.getToDos(listId);
    const { setTodosList } = this.props;
    setTodosList(allSectors);
  }

  handleCreateTodo = () => {
    const { onSetTodoData } = this.props;
    onSetTodoData({
      id: null,
      text: '',
      price: 0,
      category: 'none',
    });
  }

  handleCurrentTodoSave = async () => {
    const { currentTodoData, currentList, reset } = this.props;
    if (currentTodoData.id !== null) {
      await apiService.todos.updateTodo(currentList._id, currentTodoData);
    } else {
      await apiService.todos.createNewTodo(currentList._id, currentTodoData);
    }
    this.updateViewList(currentList._id);
    reset();
  }

  renderTodoEditForm = () => {
    const { currentTodoData } = this.props;
    return (
      <Overlay open={currentTodoData !== null}>
        <SectorEditForm onClickConfirm={this.handleCurrentTodoSave} />
      </Overlay>
    );
  }

  render() {
    const { classes, currentList } = this.props;

    return (
      <CardWithTitle title={currentList.name} className={classes.container}>
        <div className={classes.content}>
          {this.renderTodoEditForm()}
          <CategoriesList />
          <Button
            buttonText="Добавить"
            ButtonImg={IconNewItem}
            width="170px"
            onClick={this.handleCreateTodo}
          />
          <div className={classes.containerLine}>
            <LineGradient type="big" />
          </div>
          <Summary />
        </div>
      </CardWithTitle>
    );
  }
}

const styles = {
  container: {
    width: '500px',
  },
  content: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerLine: {
    width: '90%',
    marginTop: '20px',
  },
};

const mapStateToProps = state => ({
  currentList: state.lists.main.selectedList,
  currentTodoData: state.todos.current.data,
});

const mapDispatchToProps = {
  setTodosList: actionCreatorsTodos.setTodosList,
  onSetTodoData: actionCreatorsCurrentTodo.setData,
  reset: actionCreatorsCurrentTodo.reset,
};

const styled = withStyles(styles)(ToDoList);
export default connect(mapStateToProps, mapDispatchToProps)(styled);
