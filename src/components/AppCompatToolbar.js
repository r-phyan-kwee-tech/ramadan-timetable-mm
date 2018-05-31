import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TuneIcon from "@material-ui/icons/Tune";
import IconButton from '@material-ui/core/IconButton';

import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  root: {
    flexGrow: 0,
    flexDirection: `row`
  },
  flex: {
    flex: 1,
    flexDirection: `row`,
    textAlign: `left`

  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  iconContainer: {
    flex: 0,
    justifyContent: `flex-end`
  },
  button: {
    margin: theme.spacing.unit,
    flex: 0
  }
});

const AppCompatToolbar = (props) => {
  const {classes, isDisplayHomeEnabled, hasMenuButton, title} = props;
  return (
    <div className="app-toolbar">
      <AppBar position="static" color="default">
        <Toolbar className="mytoolbar">
          {isDisplayHomeEnabled && <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => props.onBackButtonClick()}>
            <Icon>arrow_back_ios</Icon>
          </IconButton>}

          <Typography variant="title" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          <div className={classes.iconContainer}>
            {hasMenuButton && <IconButton
              className={classes.button}
              aria-label="Delete"
              onClick={() => props.onMenuClick()}>
              <TuneIcon/>
            </IconButton>}

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppCompatToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  onBackButtonClick: PropTypes.func,
  onMenuClick: PropTypes.func,
  isDisplayHomeEnabled: PropTypes.bool,
  title: PropTypes.string
};

export default withStyles(styles)(AppCompatToolbar);