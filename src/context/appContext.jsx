import React, { useContext, createContext, useState } from 'react'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const ContextProvider = ({ children }) => {
    const [mainModelsLoaded, setMainModelsLoaded] = useState(false)
    const [percentage, setPercentage] = useState(0)

    const completeLoadMainModels = () => setMainModelsLoaded(true)

    const value = {
        mainModelsLoaded,
        completeLoadMainModels,
        percentage,
        setPercentage,
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default ContextProvider
