import React, { useEffect, useRef, useState } from 'react'
import "../../../src/App.css"

// Hook Delle Positions

export default function UsePosition(component, id) {
    const [isPosition, setPosition] = useState({ top: 0, left: 0 });

    const style = {
        position: "absolute",
        top: (isPosition.top + 140) + "px",
        left: (isPosition.left + 140) + "px",
    }

        
    const handleMouseMove = (e) => {
        const ChildElement = document.getElementById("cursor").getBoundingClientRect();
        const ParentElement = document.getElementById(id).getBoundingClientRect();
        if (!ChildElement) return;
        const Width = ParentElement.width;
        const Height = ParentElement.height;
        const TopBox = ChildElement.top;
        const LeftBox = ChildElement.left;
        // console.log(e.clientX, e.clientY)
        // Calcolare le nuove cordinate con il mouse con l'oggetto contenuto

        const DistanceCalcTop = e.clientX - Math.round(TopBox) - Math.round(Width);
        const DistanceCalcLeft = e.clientY - Math.round(LeftBox) - Math.round(Height);
        // console.log(ParentElement)
        setPosition({top: DistanceCalcTop, left: DistanceCalcLeft })
    };

    // console.log(isPosition)

    useEffect(() => {
        const id_element = document.getElementById(id)
        id_element.addEventListener("mousemove", handleMouseMove);
        return () => id_element.removeEventListener("mousemove", handleMouseMove);
    },[])

    return(<>
    <div style={style} className='cursor-style' id='cursor'>
      {component}
    </div>
    </>)
}
