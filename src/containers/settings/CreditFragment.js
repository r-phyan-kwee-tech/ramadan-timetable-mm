import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
const styles = theme => ({
  root: {

    display: `flex`,
    flexDirection: `column`
  },
  img: {
    alignSelf: `center`
  },
  appName: {
    alignSelf: `center`,
    fontWeight: `bold`,
    padding: `1em 0`
  },
  version: {
    alignSelf: `center`,
    padding: `0.2em 0`
  },
  commonText: {
    alignSelf: `center`,
    padding: `0.2em 0.5em`,
    textAlign: `center`
  },
  ul: {
    alignSelf: `center`,
    listStyle: `none`,
    padding: `0`
  },
  li: {
    textAlign: `center`
  }
});
const CreditFragment = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <img className={classes.img} src="/apple-touch-icon-120x120.png" width="80" height="80" />
      <Typography className={classes.appName} component="div">
        Ramadan Timetable
          </Typography>
      <Typography className={classes.version} component="div">
        Version 1.0
          </Typography>
      <Typography className={classes.commonText} component="div">
        With the beginning of Ramadan, may your home be filled with the atmosphere of love and mirth. May your life be as wonderful as you are throughout the year. Ramadan Mubarak!
          </Typography>
      <ul className={classes.ul} >
        <Typography className={classes.li} component="li">With Spcial Thanks To</Typography>
        <Typography className={classes.li} component="li">Aung Myo Lwin</Typography>
        <Typography className={classes.li} component="li">Win Htaik Aung</Typography>
        <Typography className={classes.li} component="li">Khin Thin Zar(Translation)</Typography>
      </ul>
      <Typography className={classes.commonText} component="div">
        Made With Love
      </Typography>
      <Typography className={classes.commonText} component="div">
        Developed By R Phyan Kwees
      </Typography>
      <Link target="_blank" to="https://github.com/r-phyan-kwee-tech/ramdhan-android">
        <Typography className={classes.commonText} component="p">
        Android Source
        </Typography>
      </Link>
      <Link target="_blank" to="https://github.com/r-phyan-kwee-tech/ramadan-timetable-mm">
        <Typography className={classes.commonText} component="p">
        Web App (PWA) Source
        </Typography>
      </Link>
      <Link target="_blank" to="https://github.com/r-phyan-kwee-tech/ramdhan-api">
        <Typography className={classes.commonText} component="p">
        Api Source
        </Typography>
      </Link>
    </div>
  )
};

export default withStyles(styles)(CreditFragment);