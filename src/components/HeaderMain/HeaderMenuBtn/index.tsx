import React from "react";

import s from "./HeaderMenuBtn.module.scss";
import cs from "../../../scss/global/_index.module.scss";

export const HeaderMenuBtn: React.FC = () => {
  return (
    <div className={s.outerWrapper}>
      <button className={`${s.root} ${cs.btnReset}`} aria-label="Menu button.">
        <div className={s.innerWrapper}>
          <span className={s.line} aria-hidden="true"></span>
          <span className={s.line} aria-hidden="true"></span>
          <span className={s.line} aria-hidden="true"></span>
        </div>
      </button>
    </div>
  );
};
