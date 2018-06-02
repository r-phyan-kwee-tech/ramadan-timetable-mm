import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getCountryList, getStateList, getOfflineCountries, getOfflineStates } from './actions/SettingsAction'
class CountrySelectorFragment extends React.Component {

  componentWillMount() {
    this
      .props
      .getCountryList(50, 1);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  render() {
    return (
      <div>
        Country Selector
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCountryList,
    getStateList,
    getOfflineCountries,
    getOfflineStates
  }, dispatch);
}

export default connect(state => ({ countries: state.SettingsReducer.countries,states: state.SettingsReducer.states, error: state.TimetableListReducer.error }), mapDispatchToProps)(CountrySelectorFragment);
