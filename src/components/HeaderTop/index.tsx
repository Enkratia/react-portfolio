import React from "react";

import { HeaderCurrency, HeaderLog, HeaderTopNav, HeaderAvailable } from "../../components";

import s from "./HeaderTop.module.scss";
import cs from "../../scss/global/_index.module.scss";

export const HeaderTop: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <HeaderAvailable />
        <HeaderTopNav />
        <HeaderCurrency />

        <HeaderLog />
      </div>
    </div>
  );
};
