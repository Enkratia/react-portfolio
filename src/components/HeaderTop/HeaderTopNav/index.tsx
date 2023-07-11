import React from "react";
import { Link } from "react-router-dom";

// Styles
import s from "./HeaderTopNav.module.scss";

// Images
import { Layouts } from "../../../iconComponents";

export const HeaderTopNav: React.FC = () => {
  return (
    <nav className={s.root}>
      {/* <button className={s.button} aria-label="Show info menu.">
        <Layouts />
        Info
      </button> */}

      <ul className={s.list}>
        <li className={s.item}>
          <Link to={"/"} className={s.link}>
            Delivery & returns
          </Link>
        </li>

        <li className={s.item}>
          <Link to={"/"} className={s.link}>
            Track order
          </Link>
        </li>

        <li className={s.item}>
          <Link to={"/"} className={s.link}>
            Blog
          </Link>
        </li>

        <li className={s.item}>
          <Link to={"/"} className={s.link}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderTopNav;
