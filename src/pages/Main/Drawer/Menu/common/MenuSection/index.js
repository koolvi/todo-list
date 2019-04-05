import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import MenuSectionContainer from './MenuSectionContainer';
import Button from '../../../../../../common/components/Button';
import IconNewItem from '../../../../../../common/components/Button/image/IconNewItem';
import EmptyContent from './EmptyContent';
import List from './MenuItem';
import colors from '../../../../../../styles/colors';


class MenuSection extends Component {
  renderContentForMenu = () => {
    const { itemForEdit, arrContent, textForEmptyBlock } = this.props;
    if (arrContent.length === 0) {
      return <EmptyContent text={textForEmptyBlock} />;
    }
    return arrContent.map(item => itemForEdit && (item._id === itemForEdit.id)
      ? this.renderItemEdit(item)
      : this.renderItemView(item));
  }

  renderItemEdit = (item) => {
    const { classes, EditItemComp } = this.props;
    return (
      <div className={classes.editItemInContent} key={item._id}>
        {EditItemComp}
      </div>
    );
  }

  renderItemView = (item) => {
    const {
      onEdit,
      onDelete,
      onSelect,
      selectedItem,
    } = this.props;

    return (
      <List
        key={item._id}
        name={item.name}
        clickDel={() => onDelete(item)}
        onClickEdit={() => onEdit({ id: item._id, name: item.name })}
        onSelect={() => onSelect ? onSelect(item) : null}
        selected={item === selectedItem}
      />
    );
  }

  render() {
    const {
      classes,
      sectionTitle,
      onCreateNew,
      itemForEdit,
      EditItemComp,
    } = this.props;

    return (
      <MenuSectionContainer title={sectionTitle}>
        <div className={classes.content}>
          {this.renderContentForMenu()}
        </div>

        <div className={classes.newList}>
          {(itemForEdit && !itemForEdit.id) ? (
            EditItemComp
          ) : (
            <Button
              buttonText="Добавить"
              ButtonImg={IconNewItem}
              width="200px"
              onClick={() => onCreateNew()}
            />
          )}
        </div>
      </MenuSectionContainer>
    );
  }
}

const styles = {
  content: {
    fontSize: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  newList: {
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px 20px',
  },
  editItemInContent: {
    padding: '0px 20px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px ${colors.secondary} solid`,
  },
};

export default withStyles(styles)(MenuSection);
