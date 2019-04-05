import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actionCreatorsTodos from '../../../../../store/modules/todos/main/actionCreators';

import apiService from '../../../../../utils/services/api';


class ClearButtonBlock extends Component {
  updateViewList = async (listId) => {
    const allSectors = await apiService.todos.getToDos(listId);
    const { setTodosList } = this.props;
    setTodosList(allSectors);
  }

  clearList = async () => {
    const { currentList } = this.props;
    await apiService.todos.deleteAllTodo(currentList._id);
    this.updateViewList(currentList._id);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.button} onClick={() => this.clearList()}>
          Очистить список
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  button: {
    width: '30%',
    fontSize: '13px',
    color: 'gray',
    cursor: 'pointer',
    textDecoration: 'underline',
    '&:hover': {
      color: 'rgb(85, 85, 85)',
    },
    '&:active': {
      color: 'rgb(172, 172, 172)',
    },
  },
  containerLine: {
    width: '90%',
    marginTop: '20px',
  },
};

const mapStateToProps = state => ({
  currentList: state.lists.main.selectedList,
});

const mapDispatchToProps = {
  setTodosList: actionCreatorsTodos.setTodosList,
};

const styled = withStyles(styles)(ClearButtonBlock);
export default connect(mapStateToProps, mapDispatchToProps)(styled);
