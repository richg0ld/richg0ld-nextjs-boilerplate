import * as api from "../client/api";
import createRequestMiddleware from "./createRequestMiddleware";
import { GET_SAMPLE } from "../actions/cheese";

const getItems = createRequestMiddleware(GET_SAMPLE, api.sampleApi);

export const applyMiddleware = dispatch => action => {
    dispatch(action);
    switch (action.type) {
        case GET_SAMPLE:
            getItems()(dispatch);
            break;
        default:
            break;
    }
};
