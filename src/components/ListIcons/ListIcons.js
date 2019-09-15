import React, { useContext } from "react";
import { ToggleContext } from "../../MusicContext";

const Filter = () => {
  let [, setToggle] = useContext(ToggleContext);
  const handleGrid = () => {
    setToggle(true);
  };
  const handleList = () => {
    setToggle(false);
  };

  return (
    <div className="icons-container">
      <span className="icons">
        <i className="fas fa-th" onClick={handleGrid}></i>
      </span>
      <span className="icons">
        <i className="fas fa-list" onClick={handleList}></i>
      </span>
    </div>
  );
};

export default Filter;
