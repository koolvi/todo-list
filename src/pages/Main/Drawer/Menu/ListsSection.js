import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreatorsCurrentList from '../../../../store/modules/lists/current/actionCreators';
import * as actionCreatorsMainList from '../../../../store/modules/lists/main/actionCreators';

import EditItemForm from './common/EditItemForm';
import MenuSection from './common/MenuSection';
import apiService from '../../../../utils/services/api';
import deleteLastSpaceInStr from '../../../../utils/deleteLastSpaceInStr';


class ListsSection extends Component {
  componentWillMount = async () => {
    this.reloadLists();
  }

  reloadLists = async () => {
    const { onUpdateLists } = this.props;
    const responseGetAllLists = await apiService.lists.getAllLists();
    onUpdateLists(responseGetAllLists.data);
  }

  handleListDelete = async (list) => {
    try {
      await apiService.lists.deleteList(list._id);
      this.reloadLists();
    } catch (error) { global.alert(error.message); }
  }

  handleListSave = async () => {
    const { currentListData, onSetCurrentListData } = this.props;
    const { id, name } = currentListData;
    const correctName = deleteLastSpaceInStr(name);
    const response = id
      ? await apiService.lists.updateList(id, correctName)
      : await apiService.lists.createList(correctName);

    if (response.data) {
      onSetCurrentListData(null);
      this.reloadLists();
    } else {
      global.alert('ошибка! создать новый список не получилось');
    }
  }

  render() {
    const {
      lists,
      selectedList,
      currentListData,

      onSetCurrentListData,
      onSetSelectedList,
    } = this.props;

    return (
      <MenuSection
        sectionTitle="Мои списки"
        arrContent={lists}
        itemForEdit={currentListData}
        selectedItem={selectedList}
        textForEmptyBlock="У Вас нет списков"

        onEdit={itemData => onSetCurrentListData(itemData)}
        onDelete={list => this.handleListDelete(list)}
        onSelect={item => onSetSelectedList(item)}
        onCreateNew={() => onSetCurrentListData({ id: null, name: '' })}
        EditItemComp={(
          <EditItemForm
            name={!currentListData ? '' : currentListData.name}
            onClickCancel={() => onSetCurrentListData(null)}
            placeholder="Введите название"
            onChange={name => onSetCurrentListData({ ...currentListData, name })}
            onClickSave={() => this.handleListSave()}
          />
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists.main.lists,
  currentListData: state.lists.current.data,
  selectedList: state.lists.main.selectedList,
});

const mapDispatchToProps = {
  onSetCurrentListData: actionCreatorsCurrentList.setData,
  onUpdateLists: actionCreatorsMainList.updateLists,
  onSetSelectedList: actionCreatorsMainList.setSelectedList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListsSection);
