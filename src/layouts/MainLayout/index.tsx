import React from "react";
import { HeaderTop, HeaderMain, Footer } from "../../components";

import { Outlet } from "react-router-dom";

import s from "./MainLayout.module.scss";
import { AngleDown } from "../../iconComponents";

const ScrollToTop: React.FC = () => {
  const linkRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 250 || document.body.scrollTop > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const onScrollTopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <a
      ref={linkRef}
      onClick={onScrollTopClick}
      className={`${s.scrollTop} ${isVisible ? s.scrollTopVisible : ""}`}
      aria-label="Scroll to top.">
      <AngleDown aria-hidden="true" />
    </a>
  );
};

const MainLayout: React.FC = () => {
  return (
    <>
      <header className={s.root}>
        <div className={s.container}>
          <HeaderTop />
          <HeaderMain />
        </div>
      </header>

      <Outlet />

      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
