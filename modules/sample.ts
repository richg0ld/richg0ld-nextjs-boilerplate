import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from "./createRequestActionTypes";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { getInitAsyncState } from "./createRequestSaga";
import * as api from "../client/api";

export const [
    GET_SAMPLE,
    GET_SAMPLE_SUCCESS,
    GET_SAMPLE_FAILURE
] = createRequestActionTypes("cheese/GET_SAMPLE");

export const getSample = createAction(GET_SAMPLE, payload => payload);

const getSampleSaga = createRequestSaga(GET_SAMPLE, api.sampleApi);

export function* sampleSaga() {
    yield takeLatest(GET_SAMPLE, getSampleSaga);
}

export const initialState = getInitAsyncState({});

const reducer = handleActions(
    {
        [GET_SAMPLE]: (state, action) => ({
            ...state,
            ...action.payload
        }),
        [GET_SAMPLE_SUCCESS]: (state, action) => ({
            ...state,
            ...action.payload
        }),
        [GET_SAMPLE_FAILURE]: (state, action) => ({
            ...state,
            ...action.payload
        })
    },
    initialState
);

export default reducer;
