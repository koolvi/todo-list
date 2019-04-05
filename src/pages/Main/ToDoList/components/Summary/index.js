import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Count from './Count';
import SumValue from './SumValue';

class Summary extends Component {
  getSumPrice = () => {
    const { todos } = this.props;
    const result = todos.reduce((sum, sector) => sum + sector.price, 0);
    return result;
  }

  getActiveSectorCount = () => {
    const { todos } = this.props;
    const result = todos.reduce(
      (count, sector) => !sector.completed ? count + 1 : count,
      0,
    );
    return result;
  }

  render() {
    const { classes, todos } = this.props;

    return (
      <div className={classes.summary}>
        <SumValue sumPrice={this.getSumPrice()} />
        <Count
          countActiveSector={this.getActiveSectorCount()}
          countSectors={todos.length}
        />
      </div>
    );
  }
}

const styles = {
  summary: {
    width: '90%',
    marginBottom: '15px',
    padding: '0px 20px 0px 10px',
  },
};

const mapStateToProps = state => ({
  todos: state.todos.main.todos,
});

const styled = withStyles(styles)(Summary);
export default connect(mapStateToProps, null)(styled);
