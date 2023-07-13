import React from "react";

import { ModalLogin, ModalRegister } from "../../../components";

// Styles
import s from "./HeaderLog.module.scss";

// Images
import { Person } from "../../../iconComponents";

export const HeaderLog: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = React.useState<boolean>(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState<boolean>(false);

  const onModalSwapClick = () => {
    setIsLoginOpen((o) => !o);
    setIsRegisterOpen((o) => !o);
  };

  return (
    <>
      <div className={s.root}>
        <button onClick={() => setIsLoginOpen((o) => !o)} className={s.loginBtn}>
          Log in
        </button>
        <span className={s.divider}>/</span>
        <button onClick={() => setIsRegisterOpen((o) => !o)} className={s.registerBtn}>
          Register
        </button>
        <Person />
      </div>

      {isLoginOpen && (
        <ModalLogin
          onModalLoginClick={() => setIsLoginOpen(!isLoginOpen)}
          onModalSwapClick={onModalSwapClick}
        />
      )}
      {isRegisterOpen && (
        <ModalRegister
          onModalRegisterClick={() => setIsRegisterOpen(!isRegisterOpen)}
          onModalSwapClick={onModalSwapClick}
        />
      )}
    </>
  );
};
