
import { GET_COUNTRY_LIST_REQUEST, GET_COUNTRY_LIST_SUCCESS, GET_COUNTRY_LIST_FAILED,
    GET_STATE_LIST_REQUEST, GET_STATE_LIST_SUCCESS, GET_STATE_LIST_FAILED} from '../../../constants/ActionTypes'
const initialState = {
    isFetching: false,
    items: [],
    error: {}
};

export default function countryStateListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STATE_LIST_REQUEST:
        case GET_COUNTRY_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: false,
                items: []
            });
        case GET_STATE_LIST_SUCCESS:
        case GET_COUNTRY_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                items: action.response.data.days.data
                
            });
        case GET_STATE_LIST_FAILED:
        case GET_COUNTRY_LIST_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                items: []
            });
        default:
            return initialState;
    }
}