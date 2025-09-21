import { useState, useEffect } from "react";
// import React,[useState] from 'react'

const MouseCoordinate = () => {
   const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    
    const handleMousePosition = (event) => {
      setCoordinates({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePosition);

    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Mouse Position Tracker</h2>
      <p>X: {coordinates.x}, Y: {coordinates.y}</p>
    </div>
  );
}

export default MouseCoordinate
