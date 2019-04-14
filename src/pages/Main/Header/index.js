import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { history } from '../../../utils/services/navigation';
import apiService from '../../../utils/services/api';
import colors from '../../../styles/colors';


const styles = {
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  topBar: {
    backgroundColor: colors.primary,
  },
};

const onClickLogout = async () => {
  const response = await apiService.auth.logout();
  if (response) {
    global.localStorage.removeItem('sessionId');
    history.push('/login');
  }
};

function Header(props) {
  const { classes, onClickBtn } = props;
  return (
    <AppBar
      className={classes.topBar}
      position="static"
    >
      <Toolbar>
        <IconButton
          onClick={onClickBtn}
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="title"
          color="inherit"
          className={classes.flex}
        >
          ToDoList
        </Typography>

        <Button
          color="inherit"
          onClick={onClickLogout}
        >
          Выход
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
