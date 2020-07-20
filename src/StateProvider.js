// todo: setting up data layer
// ! need this to track the cart

import React, { createContext, useContext, useReducer } from "react";

// * This is the data layer
export const StateContext = createContext();

// * Building a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// * This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
