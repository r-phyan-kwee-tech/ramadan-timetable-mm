import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CountrySelector, StatesSelector } from "../../components";
import {
  getCountryList,
  getStateList,
  getOfflineCountries,
  getOfflineStates
} from "./actions/SettingsAction";

class CountrySelectorFragment extends React.Component {
  state = {
    countries: [],
    states: [],
    country: "",
    stateId: ""
  };

  componentWillMount() {
    this.props.getOfflineCountries(50, 1);
  }

  countrySelected = selectedItem => {
    if (selectedItem.country) {
      this.setState({ ...selectedItem });
      this.props.getOfflineStates(50, 1, selectedItem.country);
    }
  };

  render() {
    return (
      <div>
        <CountrySelector
          {...this.props}
          onCountrySelected={this.countrySelected}
        />
        <StatesSelector {...this.props} countryId={this.state.country} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getCountryList,
      getStateList,
      getOfflineCountries,
      getOfflineStates
    },
    dispatch
  );
}

export default connect(
  state => ({
    countries: state.SettingsReducer.countries,
    states: state.SettingsReducer.states,
    isLoading: state.SettingsReducer.isFetching,
    error: state.TimetableListReducer.error
  }),
  mapDispatchToProps
)(CountrySelectorFragment);
