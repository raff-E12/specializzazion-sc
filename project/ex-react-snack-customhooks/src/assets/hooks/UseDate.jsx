import React, { useEffect, useState } from 'react'

// Hook di Date

export default function UseDate() {
    const [currentDate, setDate] = useState(new Date());

    useEffect(() => {
        const Interval = setInterval(() => {
            setDate(new Date());
        })

        return () => {
            clearInterval(Interval)
        }
    }, [currentDate])

    return currentDate
}
