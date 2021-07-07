import React, { useState } from "react";
import "./_categoriesBar.scss";

const keyWords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "Use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];

function Categoriesbar() {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => setActiveElement(value);

  return (
    <div className="categoriesBar">
      {keyWords.map((value, index) => (
        <span
          onClick={() => handleClick(value)}
          key={index}
          className={activeElement === value ? "activeElement" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
}

export default Categoriesbar;
