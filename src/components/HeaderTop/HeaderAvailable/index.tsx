import React from "react";

// Styles
import s from "./HeaderAvailable.module.scss";
import { Phone } from "../../../iconComponents";

export const HeaderAvailable: React.FC = () => {
  return (
    <div className={s.root}>
      <a className={s.link} href="tel:+74055550128">
        <span className={s.text}>Available 24/7 at</span>

        <span className={s.icon} aria-hidden="true">
          <Phone aria-hidden="true" />
        </span>

        <span className={s.tel}>(405) 555-0128</span>
      </a>
    </div>
  );
};
