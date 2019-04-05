import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actionCreatorsTodos from '../../../../../store/modules/todos/main/actionCreators';
import * as actionCreatorsCurrentTodo from '../../../../../store/modules/todos/current/actionCreators';
import apiService from '../../../../../utils/services/api';

import EmptyList from './EmptyList';
import TodosList from './TodosList';
import ClearButtonBlock from './ClearButtonBlock';


class CategoriesList extends Component {
  getUnicCategory = () => {
    const { todos } = this.props;
    const result = todos.reduce((unicCategory, sector) => {
      if (unicCategory.indexOf(sector.category) === -1) {
        unicCategory.push(sector.category);
      }
      return unicCategory;
    }, []);
    return result;
  };

  getNameCategoryByID = (idCategory) => {
    if (idCategory === 'none') return 'no name';
    const { allCategory } = this.props;
    const foundCategory = allCategory.find(category => category._id === idCategory);
    return foundCategory.name;
  };

  getSectorsInCategory = () => {
    const unicIdCategory = this.getUnicCategory();
    const { todos } = this.props;
    const sectorsInCategory = unicIdCategory.map((idCategory) => {
      const sectorsCategory = todos.filter(sector => sector.category === idCategory);
      return {
        id: idCategory,
        nameCategory: this.getNameCategoryByID(idCategory),
        sectorsThisCategory: sectorsCategory,
      };
    });
    return sectorsInCategory;
  }

  updateViewList = async (listId) => {
    const allSectors = await apiService.todos.getToDos(listId);
    const { setTodosList } = this.props;
    setTodosList(allSectors);
  }


  deleteItem = async (item) => {
    const { currentList } = this.props;
    await apiService.todos.deleteByIdTodoInList(currentList._id, item.id);
    this.updateViewList(currentList._id);
  }

  clickSector = async (item) => {
    const { todos, currentList } = this.props;
    const index = todos.indexOf(item); // индекс итема(выбранный товар) в массиве всех товаров
    const newcompleted = !todos[index].completed; // новый статус чекбокса = НЕ текущий статус
    await apiService.todos.chekedTodo(currentList._id, item, newcompleted);
    this.updateViewList(currentList._id);
  }

  handleEditTodo = (todo) => {
    const { onSetTodoData } = this.props;
    onSetTodoData({
      id: todo.id,
      text: todo.text,
      price: todo.price,
      category: todo.category,
    });
  }

  renderContent = (sectorsInCategory) => {
    if (sectorsInCategory.length === 0) {
      return <EmptyList />;
    }
    return sectorsInCategory.map(item => (
      <TodosList
        key={item.id}
        nameCategory={item.nameCategory}
        content={item.sectorsThisCategory}
        clicDel={this.deleteItem}
        clickSector={this.clickSector}
        clicEdit={this.handleEditTodo}
      />
    ));
  }

  render() {
    const { classes } = this.props;
    const sectorsInCategory = this.getSectorsInCategory();

    return (
      <div className={classes.todos}>
        {this.renderContent(sectorsInCategory)}
        {(sectorsInCategory.length !== 0) ? <ClearButtonBlock /> : null}
      </div>
    );
  }
}

const styles = {
  todos: {
    width: '90%',
    padding: '5px 20px 0px 10px',
    marginBottom: '10px',
    minHeight: '117px',
    maxHeight: '390px',
    overflowY: 'scroll', /* Добавляем полосы прокрутки */
  },
};

const mapStateToProps = state => ({
  todos: state.todos.main.todos,
  allCategory: state.categories.main.categories,
  currentList: state.lists.main.selectedList,
});

const mapDispatchToProps = {
  setTodosList: actionCreatorsTodos.setTodosList,
  onSetTodoData: actionCreatorsCurrentTodo.setData,
};

const styled = withStyles(styles)(CategoriesList);
export default connect(mapStateToProps, mapDispatchToProps)(styled);
