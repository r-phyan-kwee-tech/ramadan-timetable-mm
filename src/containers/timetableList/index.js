import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getTimetableList, getOfflineTimetableList} from './actions/TimetableListAction'

export class TimetableList extends React.Component {

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
                        console.log(days);
                    }
                }))
                .catch((error) => {
                    console.log(error)
                })
        } else {}
        //TODO Work with other props here

    }

    render() {
        return (
            <div>
                Timetable List
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
