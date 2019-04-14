import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import Header from './Header';
import Drawer from './Drawer';
import ToDoList from './ToDoList';


class Main extends Component {
  state = {
    drawerOpen: false,
  }

  drawerOpen = () => {
    this.setState({ drawerOpen: true });
  }

  drawerClose = () => {
    this.setState({ drawerOpen: false });
  }

  render() {
    const { drawerOpen } = this.state;
    const { classes, currentList } = this.props;

    return (
      <div className={classes.container}>
        <Header onClickBtn={this.drawerOpen} />
        <Drawer
          open={drawerOpen}
          ModalProps={{
            onBackdropClick: this.drawerClose,
          }}
        />
        <div className={classes.content}>
          {(currentList === null) ? null : <ToDoList />}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
  },
  content: {
    height: '85%',
    minWidth: '465px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 5px 15px 5px',
  },
};

const mapStateToProps = state => ({
  currentList: state.lists.main.selectedList,
});

const styled = withStyles(styles)(Main);
export default connect(mapStateToProps)(styled);
