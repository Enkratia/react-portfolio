import React from "react";

// Styles
import s from "./HeaderLog.module.scss";

// Images
import { Person } from "../../../iconComponents";

export const HeaderLog: React.FC = () => {
  return (
    <div className={s.root}>
      <button className={s.loginBtn}>Log in</button>
      <span className={s.divider}>/</span>
      <button className={s.registerBtn}>Register</button>
      <Person />
    </div>
  );
};
