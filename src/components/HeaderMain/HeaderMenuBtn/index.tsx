import React from "react";

import s from "./HeaderMenuBtn.module.scss";
import cs from "../../../scss/global/_index.module.scss";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { showHideMenu } from "../../../redux/headerMenuBtnSlice/slice";
import { selectHeaderMenu } from "../../../redux/headerMenuBtnSlice/selectors";

export const HeaderMenuBtn: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectHeaderMenu);

  return (
    <div className={s.outerWrapper}>
      <button
        onClick={() => dispatch(showHideMenu())}
        className={`${s.root} ${cs.btnReset} ${isOpen ? s.rootShow : ""}`}
        aria-label="Menu button.">
        <div className={s.innerWrapper}>
          <span className={s.line} aria-hidden="true"></span>
          <span className={s.line} aria-hidden="true"></span>
          <span className={s.line} aria-hidden="true"></span>
        </div>
      </button>
    </div>
  );
};
