import React from "react";
import { Outlet } from "react-router-dom";

import { HeaderTop, HeaderMain, Footer } from "../../components";

import { useMediaQuery } from "../../util/customHooks";

import s from "./MainLayout.module.scss";
import { AngleDown } from "../../iconComponents";

const pathname = window.location.pathname.replace(/\//g, "");

const ScrollToTop: React.FC = () => {
  const { isMQ1024 } = useMediaQuery();

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
      className={`${s.scrollTop} ${isVisible ? s.scrollTopVisible : ""} ${
        pathname === "fashion-blog" && !isMQ1024 ? s.scrollTopHigh : ""
      }`}
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
