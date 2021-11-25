import React, {createContext, useReducer, useEffect} from "react";              
import Reducer from './Reducer';
                                                                                                                                                     
export const Context = createContext(initialState); 
                                                                                                                                                         
const initialState = {error: null}                                                                            
                                                                                
const Store = ({children}) => {                                                 
    const [state, dispatch] = useReducer(Reducer, initialState);                                                                                                                                               
    return (                                                                    
        <Context.Provider value={[state, dispatch]}>                            
            {children}                                                          
        </Context.Provider>                                                     
    )                                                                           
};  

export default Store;