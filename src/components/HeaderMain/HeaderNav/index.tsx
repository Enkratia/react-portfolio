import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

import React from "react";
import { Link } from "react-router-dom";

import { useMediaQuery } from "../../../util/customHooks";

import { HeaderMegamenu } from "../../../components";
import { capitalize } from "../../../util/customFunctions";

import s from "./HeaderNav.module.scss";
import { AngleDown } from "../../../iconComponents";

export const linkNames = ["women", "men", "girls", "boys", "sale"];

type HeaderNavWrapperProps = {
  isMQ1024: boolean;
  children: React.ReactNode;
};

const HeaderNavWrapper: React.FC<HeaderNavWrapperProps> = ({ isMQ1024, children }) => {
  const scrollOpts = {
    scrollbars: {
      theme: s.osThemeNav,
    },
  };

  return isMQ1024 ? (
    <nav className={s.root}>{children}</nav>
  ) : (
    <OverlayScrollbarsComponent element="nav" className={s.root} options={scrollOpts} defer>
      {children}
    </OverlayScrollbarsComponent>
  );
};

export const HeaderNav: React.FC = () => {
  const [active, setActive] = React.useState<number>();
  const { isMQ1024 } = useMediaQuery();

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.nextElementSibling === null || isMQ1024) return;
    e.preventDefault();

    linkNames.map((_, i) => {
      if (linkNames[i] === e.currentTarget.innerText.toLowerCase()) {
        if (active === i) {
          setActive(undefined);
        } else {
          setActive(i);
        }
      }
    });
  };

  return (
    <HeaderNavWrapper isMQ1024={isMQ1024}>
      <ul className={s.list}>
        {linkNames.map((linkName, i) => {
          const isSale = linkName === "sale";

          return (
            <li key={i} className={`${s.item} ${isMQ1024 ? s.itemHover : ""}`}>
              <Link
                to={!isSale ? `/${linkName}/clothes` : ""}
                onClick={onLinkClick}
                className={`${s.link} ${isSale ? s.linkSale : ""} ${
                  !isMQ1024 && active === i ? s.linkActive : ""
                }`}>
                {capitalize(linkName)}

                {!isSale && <AngleDown aria-hidden="true" />}
              </Link>

              {!isSale && <HeaderMegamenu index={i} isMQ1024={isMQ1024} />}
            </li>
          );
        })}
      </ul>
    </HeaderNavWrapper>
  );
};
