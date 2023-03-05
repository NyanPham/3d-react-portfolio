import React, { useEffect, useRef } from 'react'
import { useAppContext } from '../../context/appContext'
import { success, warning, error } from '../../assets'

const DELAY = 5000

const getStyleClasses = (type) => {
    switch (type) {
        case 'error':
            return 'bg-red-300 text-red-600'
        case 'success':
            return 'bg-green-300 text-green-600'
        case 'warning':
            return 'bg-yellow-300 text-yellow-600'
        default:
            return 'bg-white text-gray-900'
    }
}

const getIcon = (type) => {
    switch (type) {
        case 'error':
            return error
        case 'success':
            return success
        case 'warning':
            return warning
        default:
            return ''
    }
}

const Toast = () => {
    const { alert, toggleAlert } = useAppContext()
    const { type, isLoading, text, title, isShown } = alert
    const classes = getStyleClasses(type)
    const icon = getIcon(type)
    const closeTimeoutRef = useRef(null)

    useEffect(() => {
        if (isShown) {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)

            closeTimeoutRef.current = setTimeout(() => {
                toggleAlert(false)
            }, DELAY)
        }

        return () => {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
        }
    }, [isShown])

    return (
        <div
            className={`${
                isShown
                    ? 'pointer-events-auto translate-y-0'
                    : 'pointer-events-none translate-y-full'
            } fixed bottom-0 left-0 right-0 h-32 md:h-24 transition duration-300 flex flex-row z-10 ${classes}`}
        >
            <div
                className={`${classes} h-full w-24 border-r border-r-white border-opacity-50 grid place-items-center`}
            >
                <img src={icon} className="w-2/3 h-2/3 object-contain" />
            </div>
            <div>
                <h3 className="w-full px-6 py-3 text-xl font-semibold">
                    {title}
                </h3>
                <p className="w-full px-6">{text}</p>
            </div>
            <button
                className="absolute top-2 right-4 text-3xl"
                onClick={() => toggleAlert(false)}
            >
                &times;
            </button>
        </div>
    )
}

export default Toast
