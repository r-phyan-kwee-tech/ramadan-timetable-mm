import { CALL_API } from '../../../middleware/api';
import { GET_TIME_TABLE_LIST_REQUEST, GET_TIME_TABLE_LIST_SUCCESS, GET_TIME_TABLE_LIST_FAILED } from '../../../constants/ActionTypes'

export function getTimetableList(limit, page, stateId) {
    var query = "{\n" +
        "  days(limit: " + limit + ", page: " + page + ", stateId: \""+stateId+"\") {\n" +
        "    data {\n" +
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
        "    }\n" +
        "  }\n" +
        "}";
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
