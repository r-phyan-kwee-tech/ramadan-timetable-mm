import {
    GET_COUNTRY_LIST_REQUEST,
    GET_COUNTRY_LIST_SUCCESS,
    GET_COUNTRY_LIST_FAILED,
    GET_STATE_LIST_REQUEST,
    GET_STATE_LIST_SUCCESS,
    GET_STATE_LIST_FAILED
} from '../../../constants/ActionTypes'
import db from '../../../utils/db'
const initialState = {
    isFetching: false,
    items: [],
    error: {}
};

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STATE_LIST_REQUEST:
        case GET_COUNTRY_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: false,
                items: []
            });

        case GET_COUNTRY_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                items: saveCountries(action.response.data.countries.data)
            });
        case GET_STATE_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                items: saveStates(action.response.data.states.data)
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

async function saveCountries(countries) {

    db
        .country
        .bulkAdd(countries)
        .then((resolve, reject) => {})
        .catch((err) => {});
    return countries
}

async function saveStates(states) {
    db
        .states
        .bulkAdd(states)
        .then((resolve, reject) => {})
        .catch((err) => {});
    return states
}