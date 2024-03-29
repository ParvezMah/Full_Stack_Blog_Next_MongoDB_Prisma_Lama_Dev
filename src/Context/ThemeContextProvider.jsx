"use client"

import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();
const getFromLocalStorage = () =>{
    if(typeof window !== undefined){
        const value = localStorage.getItem("theme");
        return value || "light";
    }
}

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(()=>{
        return getFromLocalStorage();
    })

    // Toggling function
    const toggle = () =>{
        setTheme(theme === "light" ? "dark" : "light");
    }

    // Side Effect
    useEffect(()=>{
        localStorage.setItem("theme", theme)
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;