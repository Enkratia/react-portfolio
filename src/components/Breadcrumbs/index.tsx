import React from "react";

import { Link, useLocation, useParams } from "react-router-dom";

import s from "./Breadcrumbs.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Home } from "../../iconComponents";

const objects = ["women", "men", "girls", "boys"];
const categories = ["clothes", "shoes", "accessories", "boys"];

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const { object, category } = useParams();

  const thisPath = pathname.replace("/", "");
  const thisName = thisPath.charAt(0).toUpperCase() + thisPath.slice(1);

  if (!object || !category || !objects.includes(object) || !categories.includes(category)) return;

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
