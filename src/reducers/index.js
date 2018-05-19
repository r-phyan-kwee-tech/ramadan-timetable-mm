import { combineReducers } from 'redux'
import counter from './counter'
import TimetableListReducer from '../containers/timetableList/reducers/TimetableListReducer'
import CountryStateSelectListReducer from '../containers/countryStateselectList/reducers/CountryStateSelectListReducer'
import TimeTableDetailReducer from '../containers/timetableDetail/reducers/TimeTableDetailReducer'

import { routerReducer } from 'react-router-redux'
const rootReducer = combineReducers({ counter, TimeTableDetailReducer, CountryStateSelectListReducer, TimetableListReducer, routerReducer })

export default rootReducer
