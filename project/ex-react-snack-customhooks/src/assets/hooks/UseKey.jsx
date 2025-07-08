import React, { useEffect, useState } from 'react'

export default function UseKey(targetKey) {
    const [isKey, setKey] = useState(false);

    function PressKey(e) {
        if (e.key === targetKey) setKey(true); 
    }

    function PressDown(e) {
        if (e.key === targetKey) setKey(false); 
    }

    useEffect(() => {
        window.addEventListener("keydown", PressDown);
        window.addEventListener("keyup", PressKey);
        return () => {
            window.removeEventListener("keyup", PressKey);
            window.removeEventListener("keydown", PressDown);
        }
    }, [])

    return isKey
}
