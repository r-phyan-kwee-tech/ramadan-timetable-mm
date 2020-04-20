import React from "react";
import PropTypes from "prop-types";

import { createStructuredSelector, createSelector } from "reselect";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as CounterActions from "actions/counter";

class CounterContainer extends React.Component {
  state = {
    bottom: false
  };
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  incrementIfOdd = () => {
    this.props.incrementIfOdd();
  };

  onMenuClick = () => {
    //TODO implement OnMenu click Here
    this.setState({ bottom: true });
  };

  render() {
    return (
      <div>
        {/* <AppCompatToolbar onMenuClick={this.onMenuClick} />  */}
        {/* <Counter
          counter={this.props.counter}
          increment={this.increment}
          decrement={this.decrement}
          incrementIfOdd={this.incrementIfOdd}/> */}
        {/* <BottomDrawer isOpen={bottom} /> */}
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  counter: createSelector(
    state => state.counter,
    counterState => counterState
  )
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

CounterContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
