import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

class ButtonBlock extends Component {
  static defaultProps = {
    buttonMargin: '10px',
  }

  renderChild = (Child, indexCurrent) => {
    const { buttonMargin } = this.props;
    return (
      <Fragment key={indexCurrent}>
        {indexCurrent ? (
          <div style={{ width: buttonMargin }} />
        ) : null}
        {Child}
      </Fragment>
    );
  };

  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.container}>
        {children.map(this.renderChild)}
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'inline-flex',
  },
};

export default withStyles(styles)(ButtonBlock);
