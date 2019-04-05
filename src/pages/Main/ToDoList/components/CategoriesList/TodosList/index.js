import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Todo from './Todo';
import LineGradient from '../../../../../../common/components/LineGradient';


class TodosList extends Component {
  checkNameCategoryIsNone = () => {
    const { nameCategory } = this.props;
    const nameCategoryAfterChech = (nameCategory === 'no name')
      ? 'БЕЗ КАТЕГОРИИ'
      : nameCategory;
    return nameCategoryAfterChech;
  };

  render() {
    let id = 0;
    const {
      classes,
      content,
      clicDel,
      clickSector,
      clicEdit,
    } = this.props;

    return (
      <div className={classes.categoryList}>
        <div className={classes.nameCategory}>
          <LineGradient type="miniLeft" otherClass={classes.miniLeftLine} />
          {this.checkNameCategoryIsNone()}
          <LineGradient type="miniRight" otherClass={classes.miniRightLine} />
        </div>

        <div className="sectorsThisCategory">
          {content.map(item => (
            <Todo
              key={id++}
              text={item.text}
              price={item.price}
              clicDel={() => clicDel(item)}
              completed={item.completed}
              clickSector={() => clickSector(item)}
              clicEdit={() => clicEdit(item)}
            />))
          }
        </div>
      </div>
    );
  }
}

const styles = {
  categoryList: {
    margin: '20px 0px 10px 0px',
  },
  nameCategory: {
    textTransform: 'uppercase',
    padding: '4px',
    fontWeight: 800,
    color: 'rgba(51, 51, 51, 0.281)',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniLeftLine: {
    marginRight: '2px',
  },
  miniRightLine: {
    marginLeft: '2px',
  },
};

export default withStyles(styles)(TodosList);
