import React from "react";
import { Link } from "react-router-dom";
import { HeaderChoice, HeaderLog, HeaderMenuBtn, HeaderNav, HeaderSearch } from "../../components";

// Styles
import s from "./HeaderMain.module.scss";
import cs from "../../scss/global/_index.module.scss";

// Images
import Logo from "../../assets/img/logo.svg";

import { useAppSelector } from "../../redux/store";
import { selectHeaderMenu } from "../../redux/headerMenuBtnSlice/selectors";

export const HeaderMain: React.FC = () => {
  const isOpen = useAppSelector(selectHeaderMenu);

  return (
    <div className={`${s.root} ${isOpen ? s.rootOpen : ""}`} data-id="headerMain">
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <Link to={"/"} className={s.logo}>
          <img src={Logo} alt="Logo." />
        </Link>

        <HeaderNav />
        <HeaderSearch />
        <HeaderChoice />

        <HeaderMenuBtn />
        <HeaderLog />
      </div>
    </div>
  );
};
