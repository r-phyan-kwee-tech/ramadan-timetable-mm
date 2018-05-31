import React from 'react';
import {AppCompatToolbar} from 'components'
import {Route} from 'react-router-dom'
import _ from 'lodash'
import FontSelectorFragment from './FontSelectorFragment';
import CountrySelectorFragment from './CountrySelectorFragment';
import LicenseFragment from './LicenseFragment';
import CreditFragment from './CreditFragment';
class SettingsContainer extends React.Component {
  state = {
    title: "Settings"
  }

  componentWillMount() {
    this.setState({
      title: `${_.startCase(this.props.location.pathname.split("/")[2])} `
    })
  }

  render() {
    const {match} = this.props
    const {title} = this.state
    return (
      <div>
        <AppCompatToolbar
          onMenuClick={(a) => {
          console.log("a")
        }}
          onBackButtonClick={() => {
          this
            .props
            .history
            .goBack()
        }}
          isDisplayHomeEnabled={true}
          title={title}/> {/*https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4*/}

        <Route path={`${match.url}/fontSettings`} component={FontSelectorFragment}/>
        <Route
          path={`${match.url}/locationSettings`}
          component={CountrySelectorFragment}/>
        <Route path={`${match.url}/license`} component={LicenseFragment}/>
        <Route path={`${match.url}/credits`} component={CreditFragment}/>
      </div>
    )
  }
}

export default SettingsContainer;