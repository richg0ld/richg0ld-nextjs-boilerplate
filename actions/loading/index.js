export const START_LOADING = "START_LOADING";
export const FINISH_LOADING = "FINISH_LOADING";

export const startLoading = payload => ({
    type: START_LOADING,
    payload
});
export const finishLoading = payload => ({
    type: FINISH_LOADING,
    payload
});
