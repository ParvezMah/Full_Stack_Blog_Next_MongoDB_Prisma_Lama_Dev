"use client"

import { ThemeContext } from '@/Context/ThemeContextProvider';
import React, { useContext, useEffect, useState } from 'react';

// Theme provide is created to provide current theme into whole site.
const ThemeProvider = ({children}) => {

    const {theme, toggle} = useContext(ThemeContext);
    console.log("current them : ", theme);
    const [mounted, setMounted] = useState(false);
    
    useEffect(()=>{
        setMounted(true);
    },[])

    // ♨️♨️♨️ Confused: What is mounted ♨️♨️♨️
    if(mounted){
        return <div className={theme}>{children}</div>
    }
};

export default ThemeProvider;