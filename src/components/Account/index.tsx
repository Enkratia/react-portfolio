import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectFavorites } from "../../redux/favoriteSlice/selectors";
import { resetAuth } from "../../redux/authSlice/slice";

import { MyProfile, MyOrders, Wishlist, Viewed, MyReviews } from "./../../components";
import { capitalize } from "../../util/customFunctions";

import s from "./Account.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Eye, Heart, Logout, Person, Star, Wallet2 } from "../../iconComponents";

const linksInfo = [
  {
    name: "my profile",
    url: "my-profile",
    icon: <Person aria-hidden="true" />,
  },
  {
    name: "my orders",
    url: "my-orders",
    icon: <Wallet2 aria-hidden="true" />,
  },
  {
    name: "wishlist",
    url: "wishlist",
    icon: <Heart aria-hidden="true" />,
  },
  {
    name: "recently viewed",
    url: "recently-viewed",
    icon: <Eye aria-hidden="true" />,
  },
  {
    name: "my reviews",
    url: "my-reviews",
    icon: <Star aria-hidden="true" />,
  },
];

export const Account: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favorite = useAppSelector(selectFavorites);
  const { accountPage: page } = useParams();

  const listRef = React.useRef<HTMLUListElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isThisPage = (name: string) => {
    return page?.replace("-", "") === name.replace(" ", "");
  };

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

  const onLogoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    dispatch(resetAuth());
    window.localStorage.removeItem("token");
    navigate("/");
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
                  to={`/account/${info.url}`}
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

            <li className={s.menuItem}>
              <Link to="/" onClick={onLogoutClick} className={s.menuLink} aria-label="To logout.">
                <Logout aria-hidden="true" />
                <span className={s.menuLinkName}>Sign out</span>
              </Link>
            </li>
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
