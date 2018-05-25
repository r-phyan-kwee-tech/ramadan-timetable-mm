import React from 'react'
import PropTypes from 'prop-types'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AppCompatToolbar} from 'components'
import {createStructuredSelector, createSelector} from 'reselect'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as CounterActions from 'actions/counter'
import Drawer from '@material-ui/core/Drawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import GroupIcon from "@material-ui/icons/Group";
import FontDownloadIcon from "@material-ui/icons/FontDownload";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import Divider from "@material-ui/core/Divider";

injectTapEventPlugin();
class CounterContainer extends React.Component {
  state = {
    bottom: false
  }
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  }

  toggleDrawer = (side, open) => () => {
    this.setState({[side]: open});
  };

  increment = () => {
    this
      .props
      .increment()
  }

  decrement = () => {
    this
      .props
      .decrement()
  }

  incrementIfOdd = () => {
    this
      .props
      .incrementIfOdd()
  }

  onMenuClick = () => {
    //TODO implement OnMenu click Here
    this.setState({bottom: true})
  }

  render() {
    const {bottom} = this.state;
    return (
      <div>
        <AppCompatToolbar onMenuClick={this.onMenuClick}/> {/* <Counter
          counter={this.props.counter}
          increment={this.increment}
          decrement={this.decrement}
          incrementIfOdd={this.incrementIfOdd}/> */}
        <Drawer
          open={bottom}
          onClose={this.toggleDrawer('bottom', false)}
          anchor="bottom">
          <div
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}>
            <List >
              <ListItem button>

                <MyLocationIcon/>

                <ListItemText primary="Change Locations"/>
              </ListItem>

              <ListItem button>

                <FontDownloadIcon/>

                <ListItemText primary="Font Settings"/>
              </ListItem>
              <ListItem button>

                <GroupIcon/>

                <ListItemText primary="Credits"/>
              </ListItem>
              <ListItem button>

                <LocalLibraryIcon/>

                <ListItemText primary="Licenses"/>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  counter: createSelector((state) => state.counter, (counterState) => counterState)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

CounterContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
