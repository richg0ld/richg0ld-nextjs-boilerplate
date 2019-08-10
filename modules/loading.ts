import { createAction, handleActions } from "redux-actions";

export const START_LOADING = "START_LOADING";
export const FINISH_LOADING = "FINISH_LOADING";

export const startLoading = createAction(START_LOADING, payload => payload);
export const finishLoading = createAction(FINISH_LOADING, payload => payload);

export const initialState = {};

const reducer = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false
    })
  },
  initialState
);

export default reducer;
