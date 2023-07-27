import React from "react";
import { Link, useLocation } from "react-router-dom";

import s from "./Breadcrumbs.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Home } from "../../iconComponents";

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const thisPath = pathname.replace("/", "");
  const thisName = thisPath.charAt(0).toUpperCase() + thisPath.slice(1);

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <ul className={s.list}>
          <li className={s.item}>
            <Link to={"/"} className={s.link}>
              <Home aria-hidden="true" />
            </Link>
          </li>

          <li className={s.item}>{thisName}</li>
        </ul>
      </div>
    </section>
  );
};
