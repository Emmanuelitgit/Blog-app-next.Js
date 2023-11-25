'use client'
import { createContext,useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{
 const[mode, setMode] = useState("dark")

 const togle = ()=>{
    setMode((prevMode)=> prevMode==="dark"? "light" : "dark" );
 }

return(
    <ThemeContext.Provider value={{togle, mode}}>
    <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
)

};