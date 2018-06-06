import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: `flex`,
    flexDirection: `column`,
    padding: `0 1em`
  }, descriptionText: {
    flexGrow: `1`,
    fontSize: '18px',
    textAlign: `left`,
    marginBottom: `0.5em`,

  },
  duaText: {
    flexGrow: `1`,
    fontSize: '15px',
    textAlign: `left`,
    paddingLeft: `1em`,
    marginBottom: `0.5em`,
    wordWrap: `break-word`

  }
});

const DuaComponent = (props) => {
  const { classes } = props;
  return (<div className={classes.root}>
    <Typography className={classes.descriptionText} component="div">
      ဝါချည်ချိန်ဖတ်ရန် ဒိုအာ
    </Typography>
    <Typography className={classes.duaText} component="div">
      နဝိုင်း သိုအန် အစူးမာကဒန် မင်န် ရှိုင်ရန် ရမ်ဇမ်
    </Typography>
    <Typography className={classes.descriptionText} component="div">
      ဝါဖြေချိန်ဖတ်ရန် ဒိုအာ
</Typography>
    <Typography className={classes.duaText} component="div">
      အလာဟ်ဟွန်းမာ လကာဆွန်းသို ဝဘေကာ အာ့မန်းသို ဝါ့အလဟ် ရစ်ဇ်တေကာ အပ်ဖ်တရ်သို
    </Typography>
  </div >)
}
export default withStyles(styles)(DuaComponent);
