import { CALL_API } from '../../../middleware/api';
import { GET_TIME_TABLE_DETAIL_REQUEST, GET_TIME_TABLE_DETAIL_SUCCESS, GET_TIME_TABLE_DETAIL_FAILED } from '../../../constants/ActionTypes'
import db from '../../../utils/db';

export function getTimetableDetail(dayId) {
    var query = "{\n" +
        "  day(dayId: \"" + dayId + "\") {\n" +
        "    id\n" +
        "    objectId\n" +
        "    day\n" +
        "    dayMm\n" +
        "    calendarDay\n" +
        "    hijariDay\n" +
        "    sehriTime\n" +
        "    iftariTime\n" +
        "    sehriTimeDesc\n" +
        "    iftariTimeDesc\n" +
        "    sehriTimeDescMmUni\n" +
        "    sehriTimeDescMmZawgyi\n" +
        "    iftariTimeDescMmZawgyi\n" +
        "    iftariTimeDescMmUni\n" +
        "    isKadir\n" +
        "    duaAr\n" +
        "    duaEn\n" +
        "    duaMmUni\n" +
        "    duaMmZawgyi\n" +
        "    countryId\n" +
        "    stateId\n" +
        "    createdDate\n" +
        "    updatedDate\n" +
        "  }\n" +
        "}";
    return {
        [CALL_API]: {
            types: [
                GET_TIME_TABLE_DETAIL_REQUEST, GET_TIME_TABLE_DETAIL_SUCCESS, GET_TIME_TABLE_DETAIL_FAILED
            ],
            endpoint: `api?query=${query}`,
            method: 'get'
        }
    }
}



export function getOfflineTimetableDetail(dayId) {
    return (dispatch) => {
        db
            .table('days')
            .where('objectId')
            .equals(dayId)
            .first()
            .then((day) => {
                dispatch({
                    type: GET_TIME_TABLE_DETAIL_SUCCESS,
                    response: {
                        data: {
                            day: day
                        }
                    }
                });
            });
    };
}
