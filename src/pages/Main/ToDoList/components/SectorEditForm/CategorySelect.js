import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import { connect } from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  newCategory: {
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    alignItems: 'flex-end',
  },
  textForNewCategory: {
    marginRight: '10px',
    paddingBottom: '15px',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    color: 'rgb(24,24,24)',
    flex: 1,
  },
});

class CategorySelect extends React.Component {
  renderCategoryInSelect = () => {
    const { allCategory } = this.props;
    return allCategory.map(item => (
      <MenuItem
        key={item._id}
        value={item._id}
      >
        {item.name}
      </MenuItem>
    ));
  };

  render() {
    const { classes, clickCategory, categoryCurrentEditTodo } = this.props;
    return (
      <div className={classes.newCategory}>
        <div className={classes.textForNewCategory}>
          Выберите категорию:
        </div>
        <form className={classes.root} autoComplete="off">

          <FormControl className={classes.formControl}>
            <Select
              value={categoryCurrentEditTodo}
              onChange={clickCategory}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="none">
                <em>
                  Без категории
                </em>
              </MenuItem>
              {this.renderCategoryInSelect()}
            </Select>
          </FormControl>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allCategory: state.categories.main.categories,
});

const styled = withStyles(styles)(CategorySelect);
export default connect(mapStateToProps, null)(styled);
