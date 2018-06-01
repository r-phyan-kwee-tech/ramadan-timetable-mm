import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getCountryList, getStateList, getOfflineCountries} from './actions/SettingsAction'
class CountrySelectorFragment extends React.Component {

  componentWillMount() {
    this
      .props
      .getOfflineCountries(50, 1);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
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
    getOfflineCountries
  }, dispatch);
}

export default connect(state => ({items: state.SettingsReducer.items, error: state.TimetableListReducer.error}), mapDispatchToProps)(CountrySelectorFragment);
