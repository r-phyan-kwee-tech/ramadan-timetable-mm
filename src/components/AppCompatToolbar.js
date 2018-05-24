import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

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
  const {classes} = props;
  return (
    <div className="app-toolbar">
      <AppBar position="static" color="default">
        <Toolbar className="mytoolbar">
          <Typography variant="title" color="inherit" className={classes.flex}>
            ရန်ကုန်တိုင်: အချိန်ဇယား
          </Typography>
          <div className={classes.iconContainer}>
            <IconButton className={classes.button} aria-label="Delete">
              <Icon>more_vert</Icon>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppCompatToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppCompatToolbar);