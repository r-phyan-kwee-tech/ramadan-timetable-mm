import { GET_TIME_TABLE_DETAIL_REQUEST, GET_TIME_TABLE_DETAIL_SUCCESS, GET_TIME_TABLE_DETAIL_FAILED } from '../../../constants/ActionTypes'
import db from '../../../utils/db'
const initialState = {
    isFetching: false,
    item: {},
    error: {}
};

export default function timetableDetailReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TIME_TABLE_DETAIL_REQUEST:
            return Object.assign({}, state, {
                isFetching: false,
                item: {}
            });
        case GET_TIME_TABLE_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                item: saveTimeTableDay(action.response.data.day)

            });
        case GET_TIME_TABLE_DETAIL_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                item: {}
            });
        default:
            return initialState;
    }
}


function saveTimeTableDay(day) {
    db.days.add(day).then((resolve, reject) => { }).catch((err) => { });
    return day
}