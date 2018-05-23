import axios from 'axios';

import _ from 'lodash';
// import {API_URL} from '../constants/ApiConfig' Fetches an API response and
// normalizes the result JSON according to schema. This makes every API response
// have the same shape, regardless of how nested it was.
function callApi(endpoint, method, params, headers, formdata) {
    const API_ROOT = "http://ramdan-api.herokuapp.com/";
    const url = API_ROOT + endpoint;

    let query = {
        method,
        url
    };

    if (headers) 
        query.headers = headers;
    
    const methods = ['put', 'post', 'patch'];

    if (!_.isEmpty(params)) {
        if (methods.indexOf(method) === -1) {
            query.params = params;
        } else {
            query.data = params;
        }
    }
    if (!_.isEmpty(formdata)) {
        query.data = formdata;
    }

    return axios(query)
        .then(response => response.data)
        .catch(error => Promise.reject(error));

}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('API_CALL');

const methods = ['get', 'post', 'put', 'patch', 'delete'];

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let {method, endpoint, params, headers, formdata} = callAPI;
    const {types} = callAPI;

    method = method
        ? method
        : 'get';

    if (typeof method !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }

    method = method.toLowerCase();

    if (methods.indexOf(method) === -1) {
        throw new Error(`method must be : ${methods.join(', ')}`);
    }

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }

    params = params
        ? params
        : {};

    if (!_.isObject(params)) {
        throw new Error('Params should be an object.');
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.');
    }

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }

    const [requestType,
        successType,
        failureType] = types;
    next(actionWith({type: requestType}));

    formdata = formdata
        ? formdata
        : {};

    return callApi(endpoint, method, params, headers, formdata).then(response => next(actionWith({response, type: successType})), error => next(actionWith({
        type: failureType,
        error: error.message || 'Something bad happened'
    })))
};
