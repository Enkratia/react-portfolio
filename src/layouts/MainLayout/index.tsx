import React from "react";
import { HeaderTop, HeaderMain, Footer } from "../../components";

import { Outlet } from "react-router-dom";

import s from "./MainLayout.module.scss";
import { AngleDown } from "../../iconComponents";

const MainLayout: React.FC = () => {
  const linkRef = React.useRef(null);

  const onScrollTopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(document.documentElement.scrollTop);
      if (document.body.scrollTop > 250) {
        console.log(document.documentElement.scrollTop);
      }
    });
  }, []);

  return (
    <>
      <header className={s.root}>
        <HeaderTop />
        <HeaderMain />
      </header>

      <Outlet />

      <Footer />

      <a
        ref={linkRef}
        onClick={onScrollTopClick}
        className={s.scrollTop}
        aria-label="Scroll to top.">
        <AngleDown aria-hidden="true" />
      </a>
    </>
  );
};

export default MainLayout;
