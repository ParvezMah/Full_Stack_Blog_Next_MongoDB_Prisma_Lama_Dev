"use client"

import { ThemeContext } from '@/Context/ThemeContextProvider';
import React, { useContext, useEffect, useState } from 'react';

const ThemeProvider = ({children}) => {

    const {theme, toggle} = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);
    
    useEffect(()=>{
        setMounted(true);
    },[])

    if(mounted){
        return <div className={theme}>{children}</div>
    }
};

export default ThemeProvider;