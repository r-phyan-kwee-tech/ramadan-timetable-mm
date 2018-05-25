import {GET_TIME_TABLE_LIST_REQUEST, GET_TIME_TABLE_LIST_SUCCESS, GET_TIME_TABLE_LIST_FAILED} from '../../../constants/ActionTypes'
import db from '../../../utils/db'
const initialState = {
    isFetching: false,
    items: [],
    error: {}
};

export default function timetableListReducer(state = initialState, action, payload) {
    switch (action.type) {
        case GET_TIME_TABLE_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: false,
                items: []
            });
        case GET_TIME_TABLE_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                items: saveTimeTableDays(action.response.data.days.data)

            })
        case GET_TIME_TABLE_LIST_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                items: []
            });

        default:
            return initialState;
    }
}

async function saveTimeTableDays(days) {
    db
        .days
        .bulkAdd(days)
        .then((resolve, reject) => {})
        .catch((err) => {});
    return days
}