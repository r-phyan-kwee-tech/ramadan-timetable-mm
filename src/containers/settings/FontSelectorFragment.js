import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

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
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className="time-table-card">
          <CardContent classes="card-content">
            <div className={classes.cardTitle}>
              Please Select font
          </div>
            <div className={classes.switchContainer}>
              <Typography className={classes.cardDesc} component="div">
                ျမန္မာ
          </Typography>
              <Typography className={classes.cardDesc} component="div">
                <Switch

                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA"
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