import {CALL_API} from '../../../middleware/api';
import {GET_TIME_TABLE_LIST_REQUEST, GET_TIME_TABLE_LIST_SUCCESS, GET_TIME_TABLE_LIST_FAILED} from '../../../constants/ActionTypes'
import db from '../../../utils/db';
export function getTimetableList(limit, page, stateId) {
    var query = "{\n  days(limit: " + limit + ", page: " + page + ", stateId: \"" + stateId + "\") {\n    data {\n    id\n    objectId\n    day\n    dayMm\n    calendarDay\n  " +
            "  hijariDay\n    sehriTime\n    iftariTime\n    sehriTimeDesc\n    iftariTimeDes" +
            "c\n    sehriTimeDescMmUni\n    sehriTimeDescMmZawgyi\n    iftariTimeDescMmZawgyi" +
            "\n    iftariTimeDescMmUni\n    isKadir\n    duaAr\n    duaEn\n    duaMmUni\n    " +
            "duaMmZawgyi\n    countryId\n    stateId\n    createdDate\n    updatedDate\n    }" +
            "\n  }\n}";

    return {
        [CALL_API]: {
            types: [
                GET_TIME_TABLE_LIST_REQUEST, GET_TIME_TABLE_LIST_SUCCESS, GET_TIME_TABLE_LIST_FAILED
            ],
            endpoint: `api?query=${query}`,
            method: 'get'
        }

    }
}

export function getOfflineTimetableList(limit, page, stateId) {
    return (dispatch) => {
        db
            .table('days')
            .where('stateId')
            .equals(stateId)
            .sortBy('day')
            .then((days) => {
                dispatch({
                    type: GET_TIME_TABLE_LIST_SUCCESS,
                    response: {
                        data: {
                            days: {
                                data: days.filter((item) => {
                                    new Date(item.calendarDay.split("/")[0], item.calendarDay.split("/")[1] - 1, item.calendarDay.split("/")[2])
                                    if (new Date(item.calendarDay.split("/")[0], item.calendarDay.split("/")[1] - 1, item.calendarDay.split("/")[2]).addDays(1).getTime() >= new Date().getTime() && new Date(item.calendarDay.split("/")[0], item.calendarDay.split("/")[1] - 1, item.calendarDay.split("/")[2]).getTime() < new Date().addDays(365).getTime()) {
                                        return item
                                    }else{
                                        return null;
                                    }

                                })
                            }
                        }
                    }
                });
            });
    };
}