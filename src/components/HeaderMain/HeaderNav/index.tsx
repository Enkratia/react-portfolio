import React from "react";
import { Link } from "react-router-dom";

import s from "./HeaderNav.module.scss";
import { HeaderMegamenu } from "../../../components";
import { AngleDown } from "../../../iconComponents";

const linkNames = ["Women", "Men", "Girls", "Boys", "Sale"];

export const HeaderNav: React.FC = () => {
  const [active, setActive] = React.useState<number>();
  console.log(active);

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (e.currentTarget.nextElementSibling === null) return;

    linkNames.map((_, i) => {
      if (linkNames[i] === e.currentTarget.innerText) {
        setActive(i);
      }
    });
  };

  return (
    <nav className={s.root}>
      <ul className={s.list}>
        {linkNames.map((linkName, i) => {
          const isSale = linkName === "Sale";

          return (
            <li key={i} className={s.item}>
              <Link
                to={"/"}
                onClick={onLinkClick}
                className={`${s.link} ${isSale ? s.linkSale : ""} ${
                  active === i ? s.linkActive : ""
                }`}>
                {linkName}

                {!isSale && <AngleDown aria-hidden="true" />}
              </Link>

              {!isSale && <HeaderMegamenu index={i} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
