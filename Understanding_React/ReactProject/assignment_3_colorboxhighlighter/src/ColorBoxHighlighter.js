import React, { useRef, useState } from 'react';
import './ColorBoxHighlighter.css';

const ColorBoxHighlighter = () => {
    const boxRefs = useRef([]); 
  const [currentIndex, setCurrentIndex] = useState(-1);

  const colors = ["red", "green", "blue"];

  const highlightNextBox = () => {

    if (currentIndex >= 0 && boxRefs.current[currentIndex]) {
      boxRefs.current[currentIndex].style.border = "none";
    }

    const nextIndex = (currentIndex + 1) % colors.length;

    if (boxRefs.current[nextIndex]) {
      boxRefs.current[nextIndex].style.border = "3px solid yellow";
    }

    setCurrentIndex(nextIndex);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {colors.map((color, index) => (
          <div
            key={color}
            ref={(el) => (boxRefs.current[index] = el)}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: color,
              borderRadius: "8px",
              transition: "0.3s ease"
            }}
          />
        ))}
      </div>
      <button
        onClick={highlightNextBox}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Highlight Next Box
      </button>
    </div>
  );
}

export default ColorBoxHighlighter;