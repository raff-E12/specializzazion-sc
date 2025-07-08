import React, { useEffect, useRef, useState } from 'react'
import "../../../src/App.css"

// Hook Delle Positions

export default function UsePosition(component, id) {
    const [isPosition, setPosition] = useState({ x: 0, y: 0, top: null, left: null});
    const cursorRef = useRef(null);

    const style = {
        left: - isPosition.left+ "px" || "none",
        top: - isPosition.left+ "px" || "none",
        cursor: "none",
        transform: `translate(${isPosition.x}px, ${isPosition.y}px)`
    }

        useEffect(() => {
        const parentElement = document.getElementById(id);
        if (!parentElement || !cursorRef.current) return;

        const handleMouseMove = (e) => {
        const parentRect = parentElement.getBoundingClientRect();
        const cursorRect = cursorRef.current.getBoundingClientRect();
        const LeftPosition = 20;
        const TopPosition = 20;

        const offsetX = cursorRect.width / 2;
        const offsetY = cursorRect.height / 2;

        // Calcolo tra il contenitore e l'elemento contente + sottratti alle cordinate effettive
        const relativeX =  e.clientX - (parentRect.left - offsetX);
        const relativeY =  e.clientY - (parentRect.top - offsetY);

        setPosition({ x: relativeX, y: relativeY, top: TopPosition , left: LeftPosition });
        };

        parentElement.addEventListener("mousemove", handleMouseMove);
        return () => parentElement.removeEventListener("mousemove", handleMouseMove);
    }, [id]);
            
   
    return(<>
    <div style={style} className='cursor-style' id='cursor' ref={cursorRef}>
      {component}
    </div>
    </>)
}
