import React, { createContext, useReducer } from "react";
import rootReducer, { rootInitialState } from "../reducers";
import { applyMiddleware } from "./middleware";

const StoreContext = createContext(rootInitialState);

const StoreProvider = ({ children }) => {
    const [state, _dispatch] = useReducer(rootReducer, rootInitialState);
    const dispatch = applyMiddleware(_dispatch);

    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreContext, StoreProvider };
