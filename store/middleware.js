import * as api from "../../api";
import createRequestMiddleware from "./createRequestMiddleware";
import { GET_SAMPLE } from "../actions/cheese";

const getItems = createRequestMiddleware(GET_SAMPLE, api.cheese);

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
