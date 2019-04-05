import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

class BottomPart extends Component {
  render() {
    const {
      textBottomPart,
      adressLink,
      textLink,
      classes,
    } = this.props;

    return (
      <div className={classes.container}>
        <p className={classes.text}>
          {textBottomPart}
        </p>
        <Link className={classes.link} to={adressLink}>
          {textLink}
        </Link>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    marginTop: '20px',
    fontSize: '14px',
  },
  text: {
    margin: '0px',
    marginRight: '10px',
  },
  link: {
    color: 'rgb(26, 3, 158)',
    textDecoration: 'underline',
    '&:hover': {
      color: 'rgb(59, 130, 197)',
      cursor: 'pointer',
    },
  },
};

export default withStyles(styles)(BottomPart);
