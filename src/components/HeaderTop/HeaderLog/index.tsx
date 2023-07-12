import React from "react";

import { ModalLogin } from "../../ModalLogin";
import { ModalRegister } from "../../ModalRegister";

// Styles
import s from "./HeaderLog.module.scss";

// Images
import { Person } from "../../../iconComponents";

export const HeaderLog: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = React.useState<boolean>(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState<boolean>(false);

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

      {isLoginOpen && <ModalLogin onModalLoginClick={() => setIsLoginOpen(!isLoginOpen)} />}
      {isRegisterOpen && (
        <ModalRegister onModalRegisterClick={() => setIsRegisterOpen(!isRegisterOpen)} />
      )}
    </>
  );
};
