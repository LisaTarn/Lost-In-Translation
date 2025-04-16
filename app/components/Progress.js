'use client'
import { createContext, useState} from 'react';

export const ProgressContext = createContext();

export function Progress({children}){
  
    const [progress, setProgress] = useState([]);
    return(
        <ProgressContext.Provider value={{ progress, setProgress}}>
            {children}
        </ProgressContext.Provider>
    );

}