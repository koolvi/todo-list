import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreatorsMainCategories from '../../../../store/modules/categories/main/actionCreators';
import * as actionCreatorsCurrentCategory from '../../../../store/modules/categories/current/actionCreators';

import EditItemForm from './common/EditItemForm';
import MenuSection from './common/MenuSection';
import apiService from '../../../../utils/services/api';
import deleteLastSpaceInStr from '../../../../utils/deleteLastSpaceInStr';


class CategoriesSection extends Component {
  componentWillMount = async () => {
    this.reloadCategories();
  }

  reloadCategories = async () => {
    const { onUpdateCategories } = this.props;
    const responseGetAllCategories = await apiService.categories.getAllCategories();
    onUpdateCategories(responseGetAllCategories.data);
  }

  handleCategoryDelete = async (category) => {
    try {
      await apiService.categories.deleteCategory(category._id);
      this.reloadCategories();
    } catch (error) { global.alert(error.message); }
  }

  handleCategorySave = async () => {
    const { currentCategoryData, onSetCurrentCategoryData } = this.props;
    const { id, name } = currentCategoryData;
    const correctName = deleteLastSpaceInStr(name);
    const response = id
      ? await apiService.categories.updateCategory(id, correctName)
      : await apiService.categories.createCategory(correctName);

    if (response.data) {
      onSetCurrentCategoryData(null);
      this.reloadCategories();
    } else {
      global.alert('ошибка! создать новый список не получилось');
    }
  }

  render() {
    const {
      categories,
      currentCategoryData,

      onSetCurrentCategoryData,
    } = this.props;

    return (
      <MenuSection
        sectionTitle="Мои категории"
        arrContent={categories}
        itemForEdit={currentCategoryData}
        textForEmptyBlock="У Вас нет категорий"

        onEdit={itemData => onSetCurrentCategoryData(itemData)}
        onDelete={category => this.handleCategoryDelete(category)}
        onCreateNew={() => onSetCurrentCategoryData({ id: null, name: '' })}
        EditItemComp={(
          <EditItemForm
            name={!currentCategoryData ? '' : currentCategoryData.name}
            onClickCancel={() => onSetCurrentCategoryData(null)}
            placeholder="Введите название"
            onChange={name => onSetCurrentCategoryData({ ...currentCategoryData, name })}
            onClickSave={() => this.handleCategorySave()}
          />
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.main.categories,
  currentCategoryData: state.categories.current.data,
});

const mapDispatchToProps = {
  onSetCurrentCategoryData: actionCreatorsCurrentCategory.setData,
  onUpdateCategories: actionCreatorsMainCategories.updateCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesSection);
