import React from "react";
import { Link } from "react-router-dom";

// Styles
import s from "./HeaderTopNav.module.scss";
import cs from "../../../scss/global/_index.module.scss";

// Images
import { Layouts } from "../../../iconComponents";

export const HeaderTopNav: React.FC = () => {
  const [isShow, setIsShow] = React.useState(false);
  const btnRef = React.useRef(null);

  const onTopNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const topNav = e.currentTarget;

    if (e.target === btnRef.current) {
      setIsShow((o) => !o);
    }

    function hideTopNav(e: MouseEvent) {
      if (!e.composedPath().includes(topNav)) {
        setIsShow(false);
        document.documentElement.removeEventListener("click", hideTopNav);
      }
    }

    setTimeout(() => {
      document.documentElement.addEventListener("click", hideTopNav);
    }, 0);
  };

  return (
    <nav onClick={onTopNavClick} className={s.root}>
      <button ref={btnRef} className={`${s.button} ${cs.btnReset}`} aria-label="Show info menu.">
        <Layouts />
        Info
      </button>

      <ul className={`${s.list} ${isShow ? s.listShow : ""}`}>
        <li className={s.item}>
          <Link to="/" className={s.link}>
            Delivery & returns
          </Link>
        </li>

        <li className={s.item}>
          <Link to="/track-order" className={s.link}>
            Track order
          </Link>
        </li>

        <li className={s.item}>
          <Link to="/fashion-blog" className={s.link}>
            Blog
          </Link>
        </li>

        <li className={s.item}>
          <Link to="/contacts" className={s.link}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderTopNav;
