import React from "react";
import Menu from "./Menu";

function Header({darkMode, setDarkMode}) {


  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu 
          onDarkModeChange={setDarkMode}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default Header;