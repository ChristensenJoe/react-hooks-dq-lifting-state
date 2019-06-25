import React from 'react'

function Menu(prop) {
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input onChange={() => console.log("toggle")} type="checkbox" name="public" />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu