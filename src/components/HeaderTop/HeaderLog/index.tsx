import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { showHideLogin, showHideRegister } from "../../../redux/headerLogSlice/slice";
import { selectHeaderLog } from "../../../redux/headerLogSlice/selectors";
import { selectAuth } from "../../../redux/authSlice/selectors";

import { ModalLogin, ModalRegister } from "../../../components";
import { setOverflowHidden } from "../../../util/customFunctions";

import s from "./HeaderLog.module.scss";
import { AngleDown, Eye, Heart, Logout, Person, Star, Wallet2 } from "../../../iconComponents";

const pagesInfo = [
  {
    pageName: "My profile",
    pageLink: "/",
    pageIcon: <Person aria-hidden="true" />,
  },
  {
    pageName: "My orders",
    pageLink: "",
    pageIcon: <Wallet2 aria-hidden="true" />,
  },
  {
    pageName: "Wishlist",
    pageLink: "/",
    pageIcon: <Heart aria-hidden="true" />,
  },
  {
    pageName: "Recently viewed",
    pageLink: "/",
    pageIcon: <Eye aria-hidden="true" />,
  },
  {
    pageName: "My reviews",
    pageLink: "/",
    pageIcon: <Star aria-hidden="true" />,
  },
  {
    pageName: "Sign out",
    pageLink: "/",
    pageIcon: <Logout aria-hidden="true" />,
  },
];

export const HeaderLog: React.FC = () => {
  const auth = useAppSelector(selectAuth);

  const [isDropdown, setIsDropdown] = React.useState(false);

  const { isLoginOpen, isRegisterOpen } = useAppSelector(selectHeaderLog);
  const dispatch = useAppDispatch();

  // **
  const onDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget.lastElementChild) return;

    const select = e.currentTarget;
    setIsDropdown((b) => !b);

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsDropdown(false);
        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  // **
  const onLoginBtnClick = () => {
    dispatch(showHideLogin());
    setOverflowHidden(!isLoginOpen);
  };

  const onRegisterBtnClick = () => {
    dispatch(showHideRegister());
    setOverflowHidden(!isRegisterOpen);
  };

  const onModalSwapClick = () => {
    dispatch(showHideLogin());
    dispatch(showHideRegister());
  };

  return (
    <>
      <div className={s.root}>
        {auth.accessToken ? (
          <>
            <div onClick={onDropdownClick} className={s.dropdown} id="user-menu-dropdown">
              <button className={s.dropdownBtn}>
                <span className={s.dropdownBtnName}>{auth.user?.fullName}</span>
                <AngleDown aria-hidden="true" />
              </button>

              <ul className={`${s.dropdownLinks} ${isDropdown ? s.dropdownLinksShow : ""}`}>
                {pagesInfo.map((page, i) => (
                  <li key={i} className={s.dropdownItem}>
                    <Link to={page.pageLink} className={s.dropdownLink}>
                      {page.pageIcon}
                      <span className={s.dropdownLinkName}>{page.pageName}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Person aria-hidden="true" />
          </>
        ) : (
          <>
            <button onClick={onLoginBtnClick} className={s.loginBtn}>
              Log in
            </button>
            <span className={s.divider}>/</span>
            <button onClick={onRegisterBtnClick} className={s.registerBtn}>
              Register
            </button>
            <Person />
          </>
        )}
      </div>

      <ModalLogin onModalLoginClick={onLoginBtnClick} onModalSwapClick={onModalSwapClick} />
      <ModalRegister
        onModalRegisterClick={onRegisterBtnClick}
        onModalSwapClick={onModalSwapClick}
      />
    </>
  );
};
