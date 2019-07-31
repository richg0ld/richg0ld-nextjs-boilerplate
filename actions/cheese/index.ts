import { createRequestActionTypes } from "../createRequestActionTypes";

export const [
    GET_SAMPLE,
    GET_SAMPLE_SUCCESS,
    GET_SAMPLE_FAILURE
] = createRequestActionTypes("GET_META_SYNERGIES");

export const getSample = payload => ({
    type: GET_SAMPLE,
    payload
});