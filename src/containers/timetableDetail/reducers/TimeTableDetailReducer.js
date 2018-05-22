import { GET_TIME_TABLE_DETAIL_REQUEST, GET_TIME_TABLE_DETAIL_SUCCESS, GET_TIME_TABLE_DETAIL_FAILED } from '../../../constants/ActionTypes'
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
                items: {}
            });
        case GET_TIME_TABLE_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                item: action.response.data.day
                
            })
        case GET_TIME_TABLE_DETAIL_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                item: []
            });
        default:
            return initialState;
    }
}