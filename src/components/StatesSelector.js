import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Rabbit from '../utils/rabbit';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { isLocalStorageSupported, MockStorage, isZawgyi } from '../utils/utils'
import { STATE_ID, STATE_NAME } from '../constants/ActionTypes';
const storage = isLocalStorageSupported() ? localStorage : new MockStorage();
const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: `100`,
        flexBasics: `0`
    },

    cardDesc: {
        float: `right`,
        padding: `2.5em 0em`,
        fontSize: `13px`,
        flexGrow: `1`
    },
    formControl: {
        margin: theme.spacing.unit,
        flexGrow: `1`
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class StatesSelector extends React.Component {
    state = {
        countries: [],
        states: [],
        country: "",
        stateId: ''

    };

    componentWillReceiveProps(nextProps) {

        const { states, isLoading, countryId, countries } = nextProps;

        if (this.props.states.length === states.length && isLoading == this.props.isLoading && countries.length == this.props.countries.length && countryId === this.props.countryId) {
            this
                .props
                .getStateList(50, 1, nextProps.countryId)
        } else {
            if (states.length != 0) {
                this.setState({ states: states })
            }
        }
    }



    handleChange = event => {
        storage.setItem(STATE_ID, event.target.value.split(",")[0])
        storage.setItem(STATE_NAME, event.target.value.split(",")[1])
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        const { classes } = this.props;
        const { states } = this.state;

        return (
            <Card className="time-table-card">
                <CardContent className="card-content">
                    <Typography className={classes.cardDesc} component="div">
                        State & Region
                            </Typography>
                    <Typography className={classes.root} color="textSecondary" component="div">
                        <FormControl className={classes.formControl}>
                            <Select
                                value={this.state.stateId}
                                onChange={this.handleChange}
                                displayEmpty
                                name="stateId"
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    states &&
                                    states.map((item, index) => {
                                        return (<MenuItem key={index} value={`${item.objectId},${item.nameMmUni}`}>{isZawgyi() ? item.nameMmUni : item.nameMmZawgyi}</MenuItem>)
                                    })
                                }
                            </Select>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(StatesSelector)