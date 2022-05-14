import React, { useState } from "react";
import "./header.css";
import { BsFillMoonFill } from "react-icons/bs";
function Header({ handleDarkMode }) {
  const [tmode, settmode] = useState("Dark Mode");

  const hanndleClick = () => {
     handleDarkMode((previousDarkMode) => !previousDarkMode);
    if (tmode === "Dark Mode") {
      settmode("Light Mode");
    }else{
      settmode("Dark Mode");
    }
  };

  return (
    <div className="header">
      <h1>Notes</h1>
      <button onClick={hanndleClick} className="btn">
        <BsFillMoonFill className="icon" /> {tmode}
      </button>
    </div>
  );
}

export default Header;
