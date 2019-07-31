import {
    GET_SAMPLE,
    GET_SAMPLE_SUCCESS,
    GET_SAMPLE_FAILURE
} from "../../actions/cheese";
import { getInitAsyncState } from "../../store/createRequestMiddleware";

export const initialState = getInitAsyncState({});

const reducer = (state, action) => {
    switch (action.type) {
        case GET_SAMPLE:
            return {
                ...state,
                ...action.payload
            };
        case GET_SAMPLE_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case GET_SAMPLE_FAILURE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default reducer;
