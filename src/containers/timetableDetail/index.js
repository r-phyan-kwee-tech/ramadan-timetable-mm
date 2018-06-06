import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import { AppCompatToolbar } from 'components'
import { getTimetableDetail, getOfflineTimetableDetail } from './actions/TimeTableDetailActions'
import TimeTableDetailsFragment from './TimetableDetailFragment';


const styles = theme => ({
  progress: {
    top: `calc(100vh/2)`,
    left: `calc(100vw/2.1)`,
    position: `fixed`
  }
});

class TimeTableDetails extends React.Component {

  state = {
    title: "",
    dayItem: {}
  }

  componentWillMount() {
    // 14de8a9a317d4beba5488c2266d0b95b
    const { match } = this.props;
    this.props.getOfflineTimetableDetail(match.params.dayId)
  }

  componentWillReceiveProps(nextProps) {
    const { item, isLoading, match } = nextProps

    if (!item && isLoading) {
      this
        .props
        .getTimetableDetail(match.params.dayId)
    } else if (item && isLoading) {
      this.setState({ dayItem: item, loading: false, title: `Day ${item.day}` });
    }

  }

  render() {
    const { match } = this.props
    const { title, dayItem } = this.state
    return (<div>
      <AppCompatToolbar

        onBackButtonClick={() => {
          this.props.history.goBack()
        }}
        isDisplayHomeEnabled={true}
        title={title} />
      {
        dayItem &&
        <TimeTableDetailsFragment {...dayItem} />
      }
    </div>)
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getOfflineTimetableDetail,
    getTimetableDetail
  }, dispatch)
}
export default connect(state => ({ item: state.TimeTableDetailReducer.item, isLoading: state.TimeTableDetailReducer.isFetching, error: state.TimeTableDetailReducer.error }), mapDispatchToProps)(withStyles(styles)(TimeTableDetails));




