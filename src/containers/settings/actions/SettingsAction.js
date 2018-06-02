import { CALL_API } from '../../../middleware/api';
import {
    GET_COUNTRY_LIST_REQUEST,
    GET_COUNTRY_LIST_SUCCESS,
    GET_COUNTRY_LIST_FAILED,
    GET_STATE_LIST_REQUEST,
    GET_STATE_LIST_SUCCESS,
    GET_STATE_LIST_FAILED
} from '../../../constants/ActionTypes'
import db from '../../../utils/db';

export function getCountryList(limit, page) {
    var query = "{\n  countries(limit: " + limit + ", page: " + page + ") {\n    data {\n      id\n      objectId\n      name\n      createdDate\n      " +
        "updatedDate\n    }\n  }\n}"
    return {
        [CALL_API]: {
            types: [
                GET_COUNTRY_LIST_REQUEST, GET_COUNTRY_LIST_SUCCESS, GET_COUNTRY_LIST_FAILED
            ],
            endpoint: `api?query=${query}`,
            method: 'get'
        }
    }

}

export function getStateList(limit, page, countryId) {
    var query = "{\n  states(limit: " + limit + ", page: " + page + ", countryId: \"" + countryId + "\") {\n    data {\n      id\n      objectId\n      nameMmUni\n      nameMmZawgyi" +
        "\n      countryId\n      createdDate\n      updatedDate\n    }\n  }\n}"
    return {
        [CALL_API]: {
            types: [
                GET_STATE_LIST_REQUEST, GET_STATE_LIST_SUCCESS, GET_STATE_LIST_FAILED
            ],
            endpoint: `api?query=${query}`,
            method: 'get'
        }
    }
}

export function getOfflineCountries(limit, page) {
    return (dispatch) => {
        db
            .table('country')
            .toArray()
            .then((countries) => {
                dispatch({
                    type: GET_COUNTRY_LIST_SUCCESS,
                    response: {
                        data: {
                            countries: {
                                data: countries
                            }
                        }
                    }
                });
            })
    }
}

export function getOfflineStates(limit, page, countryId) {
    return (dispatch) => {
        db
            .table('states')
            .where('countryId')
            .equals(countryId)
            .then((states) => {
                dispatch({
                    type: GET_STATE_LIST_SUCCESS,
                    response: {
                        data: {
                            states: {
                                data: states
                            }
                        }
                    }
                });
            })
    }
}
