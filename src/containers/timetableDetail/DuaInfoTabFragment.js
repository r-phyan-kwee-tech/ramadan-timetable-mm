import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
const styles = theme => ({
  titleText: {
    textAlign: `center`,
    padding: `1em 0`
  },
  card: {
    margin: `0.2em 0.5em`,

  },
  cardContent: {
    textAlign: `center`,
    padding: `1em 1em`,
    wordWrap: `break-word`
  }
});
const DuaInfoTabFragment = (props) => {
  const { classes } = props;

  return (<div>

    <Card className={classes.card}>
      <Typography className={classes.titleText} component="div">
        {props.title}
      </Typography>
      <Typography className={classes.cardContent} component="div">
        {props.duaInfo}
      </Typography></Card>
  </div>)
}

export default withStyles(styles)(DuaInfoTabFragment);