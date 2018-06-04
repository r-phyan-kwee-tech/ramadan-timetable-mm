import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { isLocalStorageSupported, MockStorage } from '../../utils/utils'
import { FONT_SELECTION } from '../../constants/ActionTypes';
const storage = isLocalStorageSupported() ? localStorage : new MockStorage();
const styles = theme => ({

  cardDesc: {
    float: `right`,
    fontSize: `20px`,
    flexGrow: `1`,
    textAlign: `center`,
    fontFamily: `Roboto, Helvetica, Arial, sans-serif`
  },
  switchContainer: {
    display: `flex`,
    alignItems: `center`
  },
  cardTitle: {
    alignSelf: `center`,
    textAlign: `center`,
    flexGrow: `1`,
    fontFamily: `Roboto, Helvetica, Arial, sans-serif`
  },
  formControl: {
    margin: theme.spacing.unit,
    flexGrow: `1`
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class FontSelectorFragment extends React.Component {

  state = {
    checked: !(storage.getItem(FONT_SELECTION) === 'true')
  };

  handleChange = name => event => {

    console.log(storage.getItem(FONT_SELECTION));
    this.setState({ [name]: event.target.checked });
    // storage.setItem(FONT_SELECTION, event.target.checked)
    // console.log(storage.getItem(FONT_SELECTION))
    // storage.setItem(FONT_SELECTION, !event.target.checked)


  };

  render() {
    const { classes } = this.props;
    console.log(this.state)
    return (
      <div>
        <Card className="time-table-card">
          <CardContent>
            <div className={classes.cardTitle}>
              Please Select font
          </div>
            <div className={classes.switchContainer}>
              <Typography className={classes.cardDesc} component="div">
                ျမန္မာ
          </Typography>
              <Typography className={classes.cardDesc} component="div">
                <Switch
                  checked={this.state.isZawgyi}
                  onChange={this.handleChange("checked")}
                  value="checked"
                />
              </Typography>
              <Typography className={classes.cardDesc} component="div">
                မြန်မာ
          </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(FontSelectorFragment);