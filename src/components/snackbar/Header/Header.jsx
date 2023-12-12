import React from "react";
import "./Header.scss";

const Header = ({ onLogout }) => {
  return (
    <div className="header-container">
      <div className="scrollable-contents">
        {/* Scrollable contents */}
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        {/* Add more items as needed */}
      </div>

      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
