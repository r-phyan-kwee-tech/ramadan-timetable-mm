import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DuaComponent from "./DuaComponent";
const styles = theme => ({
  root: {
    display: `flex`,
    flexDirection: `column`
  },
  columnWrapper: {
    display: `flex`,
    flexDirection: `row`,
    marginBottom: `1em`,
    alignItems: `center`
  },
  dayText: {
    flexGrow: `1`,
    fontSize: "20px",
    textAlign: `center`
  },
  descriptionText: {
    flexGrow: `1`,
    fontSize: "15px",
    textAlign: `center`
  },
  divider: {
    height: `3em`,
    flexGrow: `0`
  }
});

const DetailHeader = props => {
  const {
    classes,
    sehriTimeDescMmUni,
    sehriTimeDescMmZawgyi,
    isZawgyi,
    day,
    iftariTimeDescMmUni,
    iftariTimeDescMmZawgyi,
    calendarDay,
    sehriTime,
    iftariTime
  } = props;
  return (
    <div className={classes.root}>
      <div className={classes.columnWrapper}>
        <Typography className={classes.dayText} component="div">
          {day && `Day ${day}`}
        </Typography>
        <Typography className={classes.dayText} component="div">
          {calendarDay}
        </Typography>
      </div>
      <div
        className={classes.columnWrapper}
        style={{ paddingLeft: `2em`, paddingRight: `2em` }}
      >
        <Typography className={classes.descriptionText} component="div">
          {!isZawgyi ? sehriTimeDescMmZawgyi : sehriTimeDescMmUni}
        </Typography>
        <Typography className={classes.divider} component="div">
          <div
            style={{ background: `#000`, width: `2px`, height: `3em` }}
          ></div>
        </Typography>
        <Typography className={classes.descriptionText} component="div">
          {!isZawgyi ? iftariTimeDescMmZawgyi : iftariTimeDescMmUni}
        </Typography>
      </div>
      <div
        className={classes.columnWrapper}
        style={{ paddingLeft: `2em`, paddingRight: `2em` }}
      >
        <Typography className={classes.descriptionText} component="div">
          {sehriTime}
        </Typography>
        <Typography className={classes.divider} component="div">
          <div style={{ height: `3em` }}></div>
        </Typography>
        <Typography className={classes.descriptionText} component="div">
          {iftariTime}
        </Typography>
      </div>
      <DuaComponent isZawgyi={isZawgyi} />
    </div>
  );
};
export default withStyles(styles)(DetailHeader);
