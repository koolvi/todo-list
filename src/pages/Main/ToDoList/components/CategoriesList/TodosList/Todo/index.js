import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import colors from '../../../../../../../styles/colors';

import NameBoxes from './NameBoxes';
import Checkbox from './Checkbox';
import Value from './Value';
import Button from '../../../../../../../common/components/Button';
import IconEdit from '../../../../../../../common/components/Button/image/IconEdit';
import IconDelete from '../../../../../../../common/components/Button/image/IconDelete';
import ButtonBlock from '../../../../../../../common/components/ButtonBlock';


class Todo extends Component {
  render() {
    const {
      classes,
      clickSector,
      completed,
      text,
      price,
      clicDel,
      clicEdit,
    } = this.props;

    const resClass = completed === true
      ? cn(classes.sector, classes.sectorActive)
      : cn(classes.sector, classes.sectorNoActive);

    return (
      <div className={resClass}>
        <Checkbox
          onClick={clickSector}
          completed={completed}
        />
        <NameBoxes
          text={text}
          completed={completed}
        />
        <Value
          price={price}
          completed={completed}
        />
        <ButtonBlock>
          {completed === false ? (
            <Button
              ButtonImg={IconEdit}
              onClick={clicEdit}
            />
          ) : null}
          <Button
            ButtonImg={IconDelete}
            onClick={clicDel}
          />
        </ButtonBlock>
      </div>
    );
  }
}

const styles = {
  sector: {
    minHeight: '35px',
    display: 'flex',
    alignItems: 'center',
    margin: '8px 0px',
    borderRadius: '5px',
    paddingRight: '15px',
    boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.23)',
  },
  sectorActive: {
    background: colors.selected,
  },
  sectorNoActive: {
    background: 'white',
  },
};

export default withStyles(styles)(Todo);
