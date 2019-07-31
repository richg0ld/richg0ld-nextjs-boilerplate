import cheese, { initialState as cheeseState } from "./cheese";
import loading, { initialState as loadingState } from "./cheese";
import combineReducers from "./combineReducers";

export const rootInitialState = {
    cheese: cheeseState,
    loading: loadingState
};

export default combineReducers({
    cheese,
    loading
});
