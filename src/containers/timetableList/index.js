import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { AppCompatToolbar } from 'components'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import BottomDrawer from '../../components/BottomDrawer'
import Typography from '@material-ui/core/Typography';
import { getTimetableList, getOfflineTimetableList } from './actions/TimetableListAction'

const styles = theme => ({
    progress: {

        top: `calc(100vh/2)`,
        left: `calc(100vw/2.1)`,
        position: `fixed`
    }
});

export class TimetableList extends React.Component {
    state = {
        days: [],
        bottom: false,
        loading: true
    };
    componentWillMount() {
        this
            .props
            .getOfflineTimetableList(30, 1, "2b8327dd7a094ba4a1eba90c4e426c09")
    }

    componentWillReceiveProps(props) {

        const { items, isLoading } = props
        if (items) {
            if (items.length === 0 && isLoading) {
                this
                    .props
                    .getTimetableList(30, 1, "2b8327dd7a094ba4a1eba90c4e426c09")
            } else if (items.length != 0 && isLoading) {
                this.setState({ days: items, loading: false });
            }
        }

    }

    onMenuClick = () => {
        //TODO implement OnMenu click Here
        this.setState({ bottom: true })
    }


    render() {
        const { bottom, loading } = this.state;
        const { classes } = this.props;
        let list = this
            .state
            .days
            .map((items, index) => {
                return (
                    <Card key={index} className="time-table-card">
                        <CardContent className="card-content">
                            <Typography className="card-day" component="div">
                                Day {items.day}
                            </Typography>
                            <Typography className="sehri-container" color="textSecondary" component="div">
                                <Typography className="sehri-description">
                                    {items.sehriTimeDesc}
                                </Typography>
                                <Typography className="sehri-time">
                                    {items.sehriTime}
                                </Typography>
                            </Typography>

                            <Typography className="iftari-container" color="textSecondary" component="div">
                                <Typography className="iftari-description">
                                    {items.iftariTimeDesc}
                                </Typography>
                                <Typography className="iftari-time">
                                    {items.iftariTime}
                                </Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })

        return (
            <div>
                <AppCompatToolbar
                    onMenuClick={this.onMenuClick}
                    hasMenuButton={true}
                    title="ရန်ကုန်တိုင်: အချိန်ဇယား" /> {loading && <CircularProgress className={classes.progress} color="secondary" size={50} />
                }
                {!loading && <div>{list}</div>
                }

                <BottomDrawer isOpen={bottom} />
            </div>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTimetableList,
        getOfflineTimetableList
    }, dispatch);
}

export default connect(state => ({ items: state.TimetableListReducer.items, isLoading: state.TimetableListReducer.isFetching, paging: state.TimetableListReducer.paging, error: state.TimetableListReducer.error }), mapDispatchToProps)(withStyles(styles)(TimetableList));
