import React, { useContext, createContext, useState, useReducer } from 'react'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const ContextProvider = ({ children }) => {
    const [mainModelsLoaded, setMainModelsLoaded] = useState(false)
    const [percentage, setPercentage] = useState(0)
    const [alert, setAlert] = useState({
        type: '',
        isLoading: false,
        text: '',
        title: '',
        isShown: false,
    })

    const completeLoadMainModels = () => setMainModelsLoaded(true)

    const toggleAlert = (shouldShow) => {
        setAlert((prevAlert) => ({
            ...prevAlert,
            isShown: shouldShow,
        }))
    }

    const updateAlert = (alertContent) => {
        setAlert((prevAlert) => ({
            ...prevAlert,
            ...alertContent,
        }))
    }

    const value = {
        mainModelsLoaded,
        completeLoadMainModels,
        percentage,
        setPercentage,
        alert,
        toggleAlert,
        updateAlert,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default ContextProvider
