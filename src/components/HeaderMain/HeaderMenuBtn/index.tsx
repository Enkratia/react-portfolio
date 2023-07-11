import React from "react";

export const HeaderMenuBtn: React.FC = () => {
  return (
    <button className="header__menu-btn menu-btn" aria-label="Menu button.">
      <div className="menu-btn__inner-wrapper">
        <span className="menu-btn__line" aria-hidden="true"></span>
        <span className="menu-btn__line" aria-hidden="true"></span>
        <span className="menu-btn__line" aria-hidden="true"></span>
      </div>
    </button>
  );
};
