import React, { createContext, useEffect, useState } from 'react'

const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
    }, [isDarkMode])

    const value = {
        isDarkMode, setIsDarkMode
    }

    return (
        <DataContext.Provider
            value={value}
        >
            {children}
        </DataContext.Provider>
    )
}

export {DataContext, DataProvider}