import {combineReducers} from 'redux'
import counter from './counter'
import TimetableListReducer from '../containers/timetableList/reducers/TimetableListReducer'
import SettingsReducer from '../containers/settings/reducers/SettingsReducer'
import TimeTableDetailReducer from '../containers/timetableDetail/reducers/TimeTableDetailReducer'

import {routerReducer} from 'react-router-redux'
const rootReducer = combineReducers({counter, TimeTableDetailReducer, SettingsReducer, TimetableListReducer, routerReducer})

export default rootReducer
