import React from "react";
import { Link } from "react-router-dom";

// import { checkMQ1024 } from "../../../redux/mediaQuerySlice/slice";
// import { useAppSelector, useAppDispatch } from "../../../redux/store";
import { useMediaQuery } from "../../../util/customHooks";

import { HeaderMegamenu } from "../../../components";

import s from "./HeaderNav.module.scss";
import { AngleDown } from "../../../iconComponents";

const linkNames = ["Women", "Men", "Girls", "Boys", "Sale"];

export const HeaderNav: React.FC = () => {
  const [active, setActive] = React.useState<number>();
  const { isMQ1024 } = useMediaQuery();
  console.log(isMQ1024);

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.nextElementSibling === null || isMQ1024) return;
    e.preventDefault();

    linkNames.map((_, i) => {
      if (linkNames[i] === e.currentTarget.innerText) {
        if (active === i) {
          setActive(undefined);
        } else {
          setActive(i);
        }
      }
    });
  };

  return (
    <nav className={s.root}>
      <ul className={s.list}>
        {linkNames.map((linkName, i) => {
          const isSale = linkName === "Sale";

          return (
            <li key={i} className={`${s.item} ${isMQ1024 ? s.itemHover : ""}`}>
              <Link
                to={"/"}
                onClick={onLinkClick}
                className={`${s.link} ${isSale ? s.linkSale : ""} ${
                  !isMQ1024 && active === i ? s.linkActive : ""
                }`}>
                {linkName}

                {!isSale && <AngleDown aria-hidden="true" />}
              </Link>

              {!isSale && <HeaderMegamenu index={i} isMQ1024={isMQ1024} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
