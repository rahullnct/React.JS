import React, { useState } from "react";
import ReactSlider from "react-slider";
import "../CSS Folder/Example.css";

const Example = () => {
  const [range, setRange] = useState([1000, 8000]);

  return (
    <div className="price-slider-container">
      <h3>Select Price Range</h3>
      <ReactSlider
        className="custom-slider"
        thumbClassName="custom-thumb"
        trackClassName="custom-track"
        value={range}
        min={0}
        max={10000}
        step={100}
        minDistance={500}
        onChange={(value) => setRange(value)}
        withTracks={true}
        pearling
      />
      <div className="price-values">
        <span>₹{range[0]}</span>
        <span>₹{range[1]}</span>
      </div>
    </div>
  );
};

export default Example;
