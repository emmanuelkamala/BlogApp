import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
}

export const Context = createContext(initialState);

export const ContextProvider = ({user}) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <Context.Provider 
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
    }}>
      {children}
    </Context.Provider>
  )
}