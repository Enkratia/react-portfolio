import React from "react";

import { useMediaQuery } from "../../util/customHooks";

import { HeaderCurrency, HeaderLog, HeaderTopNav, HeaderAvailable } from "../../components";

import s from "./HeaderTop.module.scss";
import cs from "../../scss/global/_index.module.scss";

export const HeaderTop: React.FC = () => {
  const { isMQ1024 } = useMediaQuery();

  return (
    <div className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <HeaderAvailable />
        <HeaderTopNav />
        <HeaderCurrency />

        {isMQ1024 && <HeaderLog />}
      </div>
    </div>
  );
};
