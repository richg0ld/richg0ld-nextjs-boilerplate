import { startLoading, finishLoading } from "../actions/loading";

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

const createRequestMiddleware = (type, request) => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return params => async dispatch => {
        dispatch(startLoading(type));
        try {
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: successState(response.data.data)
            });
            dispatch(finishLoading(type));
        } catch (err) {
            dispatch({
                type: FAILURE,
                payload: failureState(err)
            });
            dispatch(finishLoading(err));
            throw e;
        }
    };
};

export default createRequestMiddleware;
