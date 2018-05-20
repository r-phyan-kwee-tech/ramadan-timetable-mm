import React from 'react'
import PropTypes from 'prop-types'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Counter, AppCompatToolbar } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from 'actions/counter'
import Drawer from '@material-ui/core/Drawer';

injectTapEventPlugin();
class CounterContainer extends React.Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  }

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

  render() {
    return (
      <div>
        <AppCompatToolbar />
        {/* <Counter
          counter={this.props.counter}
          increment={this.increment}
          decrement={this.decrement}
          incrementIfOdd={this.incrementIfOdd}/> */}
        <Drawer
          anchor="bottom"
          open={false}
        >
          <div
            tabIndex={0}
            role="button"
          >
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
