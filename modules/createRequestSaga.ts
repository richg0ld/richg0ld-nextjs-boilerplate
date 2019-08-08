import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';

export const getInitAsyncState = (data = {}, options = {}) => ({
    status: 0,
    error: null,
    data,
    ...options
});

const successState = data => ({
    error: null,
    data
});
const failureState = error => ({
    error
});

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action) {
        yield put(startLoading(type)); // 로딩 시작
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: successState(response.data)
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: failureState(e)
            });
        }
        yield put(finishLoading(type)); // 로딩 끝
    };
}