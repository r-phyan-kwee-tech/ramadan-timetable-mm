
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getTimetableList } from './actions/TimetableListAction'

export class TimetableList extends React.Component {

    componentWillMount() {
        // console.log(this.props.route.push('/'))
        this.props.getTimetableList(30,1,"18ce910e6ff14db4a6348b35a85357b0")
    }

    componentWillReceiveProps(props){
        console.log(props)
    }

    render() {
        return (<div>
            Timetable List
        </div>)
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTimetableList
    }, dispatch);
}

export default connect(state => ({ items: state.TimetableListReducer.items, paging: state.TimetableListReducer.paging, error: state.TimetableListReducer.error }), mapDispatchToProps)(TimetableList);
