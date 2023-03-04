import React from 'react'
import { useAppContext } from '../context/appContext'
import { paw } from '../assets'

const LoadingLayer = () => {
    const { mainModelsLoaded, percentage: progress } = useAppContext()

    if (mainModelsLoaded) return <></>

    const progressBarStyle = {
        backgroundImage: 'linear-gradient(to left, #6cff8d, #00A9E9, #00A9E9)',
        width: `${progress}%`,
    }

    console.log('loading: ', progress, '%')

    return (
        <section className="fixed top-0 left-0 w-screen h-screen bg-blue-dark text-black z-30 grid place-items-center">
            <div className="relative w-[500px] h-52 border-2 border-blue-300">
                <div className="relative text-white p-4 text-xl font-bold flex justify-center items-center gap-2">
                    Hang on
                    <span className="w-4 h-4 color-white fill-white animate-pulse">
                        <img
                            src={paw}
                            alt="pinning paw"
                            className="w-full h-full object-contain rotate-180"
                        />
                    </span>
                    Loading Models
                    <div className="absolute w-3/5 h-[1px] bg-[#4299e1] bottom-0 left-1/2 -translate-x-1/2"></div>
                </div>
                <div className="mt-10 w-4/5 h-3 relative mx-auto bg-gray-500 rounded-sm">
                    <div className="h-full" style={progressBarStyle}></div>
                </div>
                <div className="text-xl text-white font-semibold mt-7 p-5 flex flex-grow justify-between items-center">
                    <span>0%</span>
                    <span className="text-[#6cff8d]">
                        {Math.round(progress)}%
                    </span>
                </div>
            </div>
        </section>
    )
}

export default LoadingLayer
