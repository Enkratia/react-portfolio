import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { showHideLogin, showHideRegister } from "../../../redux/headerLogSlice/slice";
import { selectHeaderLog } from "../../../redux/headerLogSlice/selectors";

import { ModalLogin, ModalRegister } from "../../../components";
import { setOverflowHidden } from "../../../util/customFunctions";

import s from "./HeaderLog.module.scss";
import { Person } from "../../../iconComponents";

export const HeaderLog: React.FC = () => {
  const { isLoginOpen, isRegisterOpen } = useAppSelector(selectHeaderLog);
  const dispatch = useAppDispatch();

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
        <button onClick={onLoginBtnClick} className={s.loginBtn}>
          Log in
        </button>
        <span className={s.divider}>/</span>
        <button onClick={onRegisterBtnClick} className={s.registerBtn}>
          Register
        </button>
        <Person />
      </div>

      {/* {isLoginOpen && ( */}
      <ModalLogin
        isLoginOpen={isLoginOpen}
        onModalLoginClick={onLoginBtnClick}
        onModalSwapClick={onModalSwapClick}
      />
      {/* )} */}
      {/* {isRegisterOpen && ( */}
      <ModalRegister
        isRegisterOpen={isRegisterOpen}
        onModalRegisterClick={onRegisterBtnClick}
        onModalSwapClick={onModalSwapClick}
      />
      {/* )} */}
    </>
  );
};
