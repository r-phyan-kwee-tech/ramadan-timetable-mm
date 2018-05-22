import { GET_TIME_TABLE_LIST_REQUEST, GET_TIME_TABLE_LIST_SUCCESS, GET_TIME_TABLE_LIST_FAILED } from '../../../constants/ActionTypes'
const initialState = {
    isFetching: false,
    items: [],
    error: {}
};

export default function timetableListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TIME_TABLE_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: false,
                items: []
            });
        case GET_TIME_TABLE_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                items: action.response.data.days.data
                
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