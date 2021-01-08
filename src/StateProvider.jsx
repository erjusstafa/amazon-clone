import React ,{ createContext , useContext , useReducer } from "react";


//setup data layer (thhis is data layer)
export const StateContext = createContext();


//Build a provider 
export const StateProvider = ({reducer , initialState , children}) => (

    <StateContext.Provider value={useReducer(reducer , initialState)}>
        {children}
    </StateContext.Provider>
)


//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);