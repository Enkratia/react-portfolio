import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { showHideLogin, showHideRegister } from "../../../redux/headerLogSlice/slice";
import { selectHeaderLog } from "../../../redux/headerLogSlice/selectors";

import { ModalLogin, ModalRegister } from "../../../components";

import s from "./HeaderLog.module.scss";
import { Person } from "../../../iconComponents";

export const HeaderLog: React.FC = () => {
  const { isLoginOpen, isRegisterOpen } = useAppSelector(selectHeaderLog);
  const dispatch = useAppDispatch();

  const onModalSwapClick = () => {
    dispatch(showHideLogin());
    dispatch(showHideRegister());
  };

  return (
    <>
      <div className={s.root}>
        <button onClick={() => dispatch(showHideLogin())} className={s.loginBtn}>
          Log in
        </button>
        <span className={s.divider}>/</span>
        <button onClick={() => dispatch(showHideRegister())} className={s.registerBtn}>
          Register
        </button>
        <Person />
      </div>

      {isLoginOpen && (
        <ModalLogin
          onModalLoginClick={() => dispatch(showHideLogin())}
          onModalSwapClick={onModalSwapClick}
        />
      )}
      {isRegisterOpen && (
        <ModalRegister
          onModalRegisterClick={() => dispatch(showHideRegister())}
          onModalSwapClick={onModalSwapClick}
        />
      )}
    </>
  );
};
