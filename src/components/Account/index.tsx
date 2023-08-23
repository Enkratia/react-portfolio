import React from "react";

import { Link, useParams } from "react-router-dom";

import { MyProfile, MyOrders, Wishlist, Viewed } from "./../../components";
import { capitalize, getFavoriteFromLS } from "../../util/customFunctions";

import s from "./Account.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Eye, Heart, Logout, Person, Star, Wallet2 } from "../../iconComponents";
import { MyReviews } from "./MyReviews";

const linksInfo = [
  {
    name: "my profile",
    url: "/",
    icon: <Person aria-hidden="true" />,
  },
  {
    name: "my orders",
    url: "/",
    icon: <Wallet2 aria-hidden="true" />,
  },
  {
    name: "wishlist",
    url: "/",
    icon: <Heart aria-hidden="true" />,
  },
  {
    name: "recently viewed",
    url: "/",
    icon: <Eye aria-hidden="true" />,
  },
  {
    name: "my reviews",
    url: "/",
    icon: <Star aria-hidden="true" />,
  },
  {
    name: "sign out",
    url: "/",
    icon: <Logout aria-hidden="true" />,
  },
];

export const Account: React.FC = () => {
  const { accountPage: page } = useParams();

  const listRef = React.useRef<HTMLUListElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isThisPage = (name: string) => {
    return page?.replace("-", "") === name.replace(" ", "");
  };

  const favorite = getFavoriteFromLS();

  const onMenuBtnClick = () => {
    setIsMenuOpen((b) => !b);

    const list = listRef.current;
    if (!list) return;

    if (isMenuOpen) {
      list.style.height = "";
    } else {
      const height = list.scrollHeight;
      list.style.height = height + "px";
    }
  };

  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>Account information</h2>

      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Account menu --> */}
        <aside className={s.menu}>
          <div className={s.menuTop}>
            <h3 className={s.menuName}>Annette Black</h3>
            <p className={s.menuEmail}>annetteb@example.com</p>

            <button onClick={onMenuBtnClick} className={`${s.menuBtn} ${cs.btn} ${cs.btnMid}`}>
              Account Menu
            </button>
          </div>

          {/* <!-- Links --> */}
          <ul ref={listRef} className={s.menuLinks}>
            {linksInfo.map((info, i) => (
              <li key={i} className={s.menuItem}>
                <Link
                  to={info.url}
                  className={`${s.menuLink} ${isThisPage(info.name) ? s.menuLinkActive : ""}`}
                  aria-label={isThisPage(info.name) ? "current page" : `go to '${info.name}' page`}>
                  {info.icon}
                  <span className={s.menuLinkName}>{capitalize(info.name)}</span>

                  {info.name === "wishlist" && favorite.length > 0 && (
                    <span className={s.menuLinkCount} aria-label="Number of products in wishlist.">
                      {favorite.length}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {page === "my-profile" && <MyProfile />}
        {page === "my-orders" && <MyOrders />}
        {page === "wishlist" && <Wishlist />}
        {page === "recently-viewed" && <Viewed />}
        {page === "my-reviews" && <MyReviews />}
      </div>
    </section>
  );
};
