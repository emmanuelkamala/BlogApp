import { createContext, useReducer } from "react";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
}

export const Context = createContext(initialState);

export const ContextProvider = ({user}) => {
  
}