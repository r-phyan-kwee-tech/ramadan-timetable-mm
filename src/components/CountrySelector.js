import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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



class CountrySelector extends React.Component {

    state = {
        countries: [],
        states: [],
        country: "",
        stateId: ''

    };

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {

        const { countries, isLoading } = nextProps;

        if (countries.length === 0 && isLoading && nextProps.states.length === 0) {
            this
                .props
                .getCountryList(50, 1)
        }

        if (this.props.countries.length !== 0) {

            this.setState({ countries: this.props.countries })
        }

        if (countries.length != 0) {
            this.setState({ countries: countries })
        }

    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        this.props.onCountrySelected({ [event.target.name]: event.target.value })
        
    }

    render() {
        const { classes } = this.props;
        const { countries } = this.state;

        return (


            <Card className="time-table-card">
                <CardContent className="card-content">
                    <Typography className={classes.cardDesc} component="div">
                        Select Country
                          </Typography>
                    <Typography className={classes.root} color="textSecondary" component="div">
                        <FormControl className={classes.formControl}>
                            <Select
                                value={this.state.country}
                                onChange={this.handleChange}
                                displayEmpty
                                name="country"
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    countries &&
                                    countries.map((item, index) => {
                                        return (<MenuItem key={index} value={item.objectId}>{item.name}</MenuItem>)
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

export default withStyles(styles)(CountrySelector)