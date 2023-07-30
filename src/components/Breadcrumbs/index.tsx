import React from "react";

import { Link, useLocation } from "react-router-dom";

import s from "./Breadcrumbs.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Home } from "../../iconComponents";

export const Breadcrumbs: React.FC = () => {
  const amendCrumb = (crumb: string) => {
    return crumb.charAt(0).toUpperCase() + crumb.slice(1);
  };

  const breadcrumbsPaths = useLocation()
    .pathname.split("/")
    .filter((crumb) => crumb !== "");

  const breadcrumbsElements = breadcrumbsPaths.map((crumb, i) => (
    <li key={i} className={s.item}>
      {i === breadcrumbsPaths.length - 1 ? (
        amendCrumb(crumb)
      ) : i === 0 ? (
        <Link to={"/" + crumb} className={s.link}>
          {amendCrumb(crumb)}
        </Link>
      ) : (
        <Link to={crumb} className={s.link}>
          {amendCrumb(crumb)}
        </Link>
      )}
    </li>
  ));

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <ul className={s.list}>
          <li className={s.item}>
            <Link to="/" className={s.link}>
              <Home aria-hidden="true" />
            </Link>
          </li>

          {breadcrumbsElements}
        </ul>
      </div>
    </section>
  );
};
