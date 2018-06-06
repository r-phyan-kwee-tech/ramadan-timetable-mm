import React from 'react';
import Rabbit from 'rabbit-node';
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
  const { classes, isZawgyi } = props;
  return (<div className={classes.root}>
    <Typography className={classes.descriptionText} component="div">
      {!isZawgyi ? Rabbit.uni2zg("ဝါချည်ချိန်ဖတ်ရန် ဒိုအာ") : "ဝါချည်ချိန်ဖတ်ရန် ဒိုအာ"}
    </Typography>
    <Typography className={classes.duaText} component="div">
      {!isZawgyi ? Rabbit.uni2zg("နဝိုင်း သိုအန် အစူးမာကဒန် မင်န် ရှိုင်ရန် ရမ်ဇမ်") : "နဝိုင်း သိုအန် အစူးမာကဒန် မင်န် ရှိုင်ရန် ရမ်ဇမ်"}

    </Typography>
    <Typography className={classes.descriptionText} component="div">
      {!isZawgyi ? Rabbit.uni2zg("ဝါဖြေချိန်ဖတ်ရန် ဒိုအာ") : "ဝါဖြေချိန်ဖတ်ရန် ဒိုအာ"}

    </Typography>
    <Typography className={classes.duaText} component="div">
      {!isZawgyi ? Rabbit.uni2zg("အလာဟ်ဟွန်းမာ လကာဆွန်းသို ဝဘေကာ အာ့မန်းသို ဝါ့အလဟ် ရစ်ဇ်တေကာ အပ်ဖ်တရ်သို") : "အလာဟ်ဟွန်းမာ လကာဆွန်းသို ဝဘေကာ အာ့မန်းသို ဝါ့အလဟ် ရစ်ဇ်တေကာ အပ်ဖ်တရ်သို"}
    </Typography>
  </div >)
}
export default withStyles(styles)(DuaComponent);
