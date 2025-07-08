import React, { useEffect, useRef, useState } from 'react'

// Hook Delle Positions

export default function UsePosition(component, id) {
    const [isPostion, setPosition] = useState({x: 0, y: 0});

    const style = {
        position: "absolute",
        top: isPostion.x,
        left: isPostion.y,
        transform: "translate(-50%, -50%)",
        cursor: "none",
        pointerEvents: "none",
        transition: "none",
        }

        
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        const id_element = document.getElementById(id)
        id_element.addEventListener("mousemove", handleMouseMove);
        return () => id_element.removeEventListener("mousemove", handleMouseMove);
    },[])

    return(<>
    <div style={style}>
      {component}
    </div>
    </>)
}
