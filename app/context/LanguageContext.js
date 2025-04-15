'use client'
import React, {createContext, useState} from 'react';

//context to hold selected language
export const LanguageContext = createContext();

//context provider to wrap around components that need translations
export const LanguageProvider = ({children}) => {
    const [targetLanguage, setTargetLanguage] = useState('fr');

    return (
        <LanguageContext.Provider value = {{targetLanguage, setTargetLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};