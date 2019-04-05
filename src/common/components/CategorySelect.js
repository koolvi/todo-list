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
    // marginTop: '10px',
    marginBottom: '10px',
    // height: '30px',
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

class SimpleSelect extends React.Component {
  renderCategoryInSelect = () => {
    const { allCategory } = this.props;
    return allCategory.map((item) => {
      return (
        <MenuItem value={item._id}>
          {item.name}
        </MenuItem>
      );
    });
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

const mapStateToProps = (state) => {
  return {
    allCategory: state.categories.main.categories,
  };
};

const mapDispatchToProps = {
  // updateField: actionCreators.updateField,
  // reset: actionCreators.reset,
};

const styled = withStyles(styles)(SimpleSelect);
export default connect(mapStateToProps, mapDispatchToProps)(styled);
