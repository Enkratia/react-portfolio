import React from "react";
import { HeaderTop, HeaderMain } from "../../components";

// import { Outlet } from "react-router-dom";

import s from "./MainLayout.module.scss";

const MainLayout: React.FC = () => {
  return (
    <>
      <header className={s.root}>
        <HeaderTop />
        <HeaderMain />
      </header>
    </>
  );
};

export default MainLayout;
