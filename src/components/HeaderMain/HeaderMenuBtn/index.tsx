import React from "react";

import s from "./HeaderMenuBtn.module.scss";
import cs from "../../../scss/global/_index.module.scss";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { showHideMenu } from "../../../redux/headerMenuBtnSlice/slice";
import { selectHeaderMenu } from "../../../redux/headerMenuBtnSlice/selectors";

// import { toggleOverflow } from "../../../redux/overflowSlice/slice";
// import { selectOverflow } from "../../../redux/overflowSlice/selectors";

export const HeaderMenuBtn: React.FC = () => {
  // const isOverflow = useAppSelector(selectOverflow);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectHeaderMenu);

  // React.useEffect(() => {
  //   const html = document.documentElement;

  //   if (isOpen) {
  //     const htmlWidth = html.getBoundingClientRect().width;
  //     const scrollBarWidth = window.innerWidth - htmlWidth;

  //     html.style.setProperty("--scrollbar-offset", scrollBarWidth + "px");
  //     html.style.overflowY = "hidden";
  //     return;
  //   }

  //   if (!isOpen && isOverflow.length === 0) {
  //     html.style.setProperty("--scrollbar-offset", "0");
  //     html.style.overflowY = "";
  //   }
  // }, [isOverflow]);

  const toggleMenu = () => {
    dispatch(showHideMenu());
    // dispatch(toggleOverflow(isOpen));
  };

  return (
    <div className={s.outerWrapper}>
      <button
        onClick={toggleMenu}
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
