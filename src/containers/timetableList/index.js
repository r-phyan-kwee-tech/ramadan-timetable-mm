import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {AppCompatToolbar} from 'components'
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getTimetableList, getOfflineTimetableList} from './actions/TimetableListAction'

export class TimetableList extends React.Component {
    state = {
        days: []
    };
    componentWillMount() {
        // console.log(this.props.route.push('/'))
        this
            .props
            .getOfflineTimetableList(30, 1, "2b8327dd7a094ba4a1eba90c4e426c09")
    }

    componentWillReceiveProps(props) {
        if (!Array.isArray(props.items)) {
            props
                .items
                .then((items => {
                    if (items.length === 0) {
                        this
                            .props
                            .getTimetableList(30, 1, "2b8327dd7a094ba4a1eba90c4e426c09")
                    } else {
                        let days = items.filter((item) => {
                            if (new Date(item.calendarDay.split("/")[0], item.calendarDay.split("/")[1] - 1, item.calendarDay.split("/")[2]).addDays(1).getTime() >= new Date().getTime() && new Date(item.calendarDay.split("/")[0], item.calendarDay.split("/")[1] - 1, item.calendarDay.split("/")[2]).getTime() < new Date().addDays(365).getTime()) {
                                return item
                            }
                        });
                        this.setState({days: days});
                    }
                }))
                .catch((error) => {
                    console.log(error)
                })
        } else {}
        //TODO Work with other props here

    }

    render() {

        let list = this
            .state
            .days
            .map((items, index) => {
                return (
                    <Card key={index} className="time-table-card">
                        <CardContent>{items.dayMm}</CardContent>
                    </Card>
                )
            })

        console.log(list)
        return (
            <div>
                <AppCompatToolbar/>
                <div>{list}</div>
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

export default connect(state => ({items: state.TimetableListReducer.items, paging: state.TimetableListReducer.paging, error: state.TimetableListReducer.error}), mapDispatchToProps)(TimetableList);
