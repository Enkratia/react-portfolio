import React from "react";
import { Link } from "react-router-dom";
import { HeaderChoice, HeaderNav, HeaderSearch } from "../../components";

// Styles
import s from "./HeaderMain.module.scss";
import cs from "../../scss/global/_index.module.scss";

// Images
import Logo from "../../assets/img/logo.svg";

export const HeaderMain: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <Link to={"/"} className={s.logo}>
          <img src={Logo} alt="Logo." />
        </Link>

        <HeaderNav />
        <HeaderSearch />
        <HeaderChoice />
      </div>
    </div>
  );
};
