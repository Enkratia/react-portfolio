import React from "react";
import { Link } from "react-router-dom";

import s from "./HeaderNav.module.scss";
import { HeaderMegamenu } from "../../../components";

const linkNames = ["Women", "Men", "Girls", "Boys", "Sale"];

export const HeaderNav: React.FC = () => {
  return (
    <nav className={s.root}>
      <ul className={s.list}>
        {linkNames.map((linkName, i) => {
          const isSale = linkName === "Sale";

          return (
            <li key={i} className={s.item}>
              <Link to={"/"} className={`${s.link} ${isSale ? s.linkSale : ""}`}>
                {linkName}
              </Link>

              {!isSale && <HeaderMegamenu index={i} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
