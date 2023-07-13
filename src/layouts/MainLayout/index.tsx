import React from "react";
import { HeaderTop, HeaderMain } from "../../components";

// import { Outlet } from "react-router-dom";

import s from "./MainLayout.module.scss";

const MainLayout: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <>
      <header className={s.root}>
        <HeaderTop isLoaded={isLoaded} />
        <HeaderMain onLoad={() => setIsLoaded(true)} />
      </header>
    </>
  );
};

export default MainLayout;
