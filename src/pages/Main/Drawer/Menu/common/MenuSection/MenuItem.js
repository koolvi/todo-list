import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import cn from 'classnames';
import colors from '../../../../../../styles/colors';

import Button from '../../../../../../common/components/Button';
import IconEdit from '../../../../../../common/components/Button/image/IconEdit';
import IconDelete from '../../../../../../common/components/Button/image/IconDelete';
import ButtonBlock from '../../../../../../common/components/ButtonBlock';


class MenuItem extends Component {
  render() {
    const {
      classes,
      name,
      onClickEdit,
      clickDel,
      onSelect,
      selected,
    } = this.props;

    const containerClassName = selected
      ? cn(classes.container, classes.containerSelected)
      : classes.container;

    return (
      <ListItem
        button
        className={containerClassName}
        onClick={onSelect}
      >
        <div className={classes.content}>
          {name}
        </div>
        <ButtonBlock>
          <Button
            ButtonImg={IconEdit}
            onClick={onClickEdit}
          />
          <Button
            ButtonImg={IconDelete}
            onClick={clickDel}
          />
        </ButtonBlock>
      </ListItem>
    );
  }
}

const styles = {
  container: {
    padding: '0px 20px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px ${colors.secondary} solid`,
    '&:hover': {
      background: colors.hover,
    },
  },
  containerSelected: {
    background: colors.selected,
  },
  content: {
    color: colors.textSecondary,
    flex: 1,
  },
};

export default withStyles(styles)(MenuItem);
