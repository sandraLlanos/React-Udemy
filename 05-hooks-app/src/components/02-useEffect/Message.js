import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({x:0, y:0});
    const {x,y} = coords
    useEffect(() => {
        console.log('Component did mount');
        const mouseMove = (e) => {
            const coords = {
                x: e.x,
                y: e.y
            };
            setCoords(coords);            
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            console.log('Component did unmount');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    return (
        <div>
            <h3>You are the best!</h3>
            <p>Your coords are: X:{x} and Y:{y} </p>
        </div>
    )
}
