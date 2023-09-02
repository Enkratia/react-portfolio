import React from "react";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router-dom";

import { useLazyPostRegisterQuery } from "../../redux/backendApi";
import { RegisterType } from "../../redux/backendApi/types";
import { useAppDispatch } from "../../redux/store";
import { setAuth } from "../../redux/authSlice/slice";

import { useValidateForm } from "../../util/customHooks/useValidateForm";
import { setTokenToLS } from "../../util/customFunctions/setTokenToLS";

// import s from "./ModalRegister.module.scss";
import s from "./ModalRegister.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Check, Cross, Facebook, Google, Linkedin, Twitter } from "../../iconComponents";

type ModalRegisterProps = {
  isRegisterOpen: boolean;
  onModalRegisterClick: () => void;
  onModalSwapClick: () => void;
};

const defaultFields: RegisterType = {
  fullName: "",
  email: "",
  password: "",
};

export const ModalRegister: React.FC<ModalRegisterProps> = ({
  isRegisterOpen,
  onModalRegisterClick,
  onModalSwapClick,
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [fields, setFields] = useImmer(defaultFields);
  const [register, { data, isError }] = useLazyPostRegisterQuery();

  const [isChecked, setIsChecked] = React.useState(true);
  const [showPass1, setShowPass1] = React.useState(false);
  const [showPass2, setShowPass2] = React.useState(false);

  const {
    isValidEmail,
    validateEmail,
    isValidPassLength,
    validatePassLength,
    isValidText,
    validateText,
    isValidPassConfirm,
    validatePassConfirm,
  } = useValidateForm();

  React.useEffect(() => {
    if (data && data.accessToken) {
      dispatch(setAuth(data));
      setTokenToLS(data.accessToken);
      navigate("/");
      onModalRegisterClick();
    }
  }, [data]);

  React.useEffect(() => {
    if (isError) {
      console.warn("Registration is failed");
      alert("Registration is failed");
    }
  }, [isError]);

  // **
  const onModalOutsideClick = (e: React.MouseEvent<HTMLFormElement>) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      onModalRegisterClick();
    }
  };

  // **
  const onFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((fields) => {
      fields.fullName = e.target.value;
      return fields;
    });
    validateText(e, 0);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((fields) => {
      fields.email = e.target.value;
      return fields;
    });

    validateEmail(e);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((fields) => {
      fields.password = e.target.value;
      return fields;
    });

    validatePassLength(e);
  };

  const onSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isValidForm = [isValidEmail, isValidText, isValidPassLength, isValidPassConfirm]
      .flat()
      .every((s) => s.endsWith("s"));

    if (isValidForm) {
      register(fields);
    }
  };

  return (
    // <!-- Log register -->
    <form
      className={`${s.root} ${isRegisterOpen ? s.rootShow : ""}`}
      onClick={onModalOutsideClick}
      name="register-form">
      <div className={s.wrapper}>
        <div ref={contentRef} className={s.content}>
          {/* <!-- Top --> */}
          <div className={s.top}>
            {/* <!-- Title --> */}
            <h3 className={s.title}>Sign up</h3>
            {/* <!-- Subtitle --> */}
            <p className={s.subtitle}>
              Registration takes less than a minute but gives you full control over your orders.
            </p>
            {/* <!-- Field1 --> */}
            <div className={s.field}>
              <label htmlFor="log-register-name" className={s.label}>
                Full Name
              </label>

              <div className={`${cs.inputWrapper} ${cs[isValidText[0]]}`}>
                <input
                  type="text"
                  className={`${s.input} ${cs.input}`}
                  id="log-register-name"
                  name="log-register-name"
                  placeholder="Your full name"
                  onChange={onFullNameChange}
                  value={fields.fullName}
                />
              </div>
            </div>

            {/* <!-- Field2 --> */}
            <div className={s.field}>
              <label htmlFor="log-register-email" className={s.label}>
                Email
              </label>

              <div className={`${cs.inputWrapper} ${cs[isValidEmail]}`} data-validity="email">
                <input
                  type="email"
                  className={`${s.input} ${cs.input}`}
                  id="log-register-email"
                  name="log-register-email"
                  placeholder="Your working email"
                  onChange={onEmailChange}
                  value={fields.email}
                />
              </div>
            </div>
            {/* <!-- Field3 --> */}
            <div className={s.field}>
              <label htmlFor="log-register-password" className={s.label}>
                Password
              </label>

              <div
                className={`${cs.inputWrapper} ${cs[isValidPassLength]}`}
                data-validity="pass-length">
                <input
                  type={showPass1 ? "text" : "password"}
                  className={`${s.input} ${cs.input} ${cs.inputPassword}`}
                  id="log-register-password"
                  name="log-register-password"
                  placeholder="&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;"
                  onChange={onPasswordChange}
                />

                <button
                  type="button"
                  className={`${s.show} ${showPass1 ? s.show : s.showActive}`}
                  aria-label="Show entered password."
                  onClick={() => setShowPass1((s) => !s)}></button>
              </div>
            </div>
            {/* <!-- Field4 --> */}
            <div className={s.field}>
              <label htmlFor="log-register-confirm-password" className={s.label}>
                Confirm Password
              </label>

              <div
                className={`${cs.inputWrapper} ${cs[isValidPassConfirm]}`}
                data-validity="pass-confirm">
                <input
                  type={showPass2 ? "text" : "password"}
                  className={`${s.input} ${cs.input} ${cs.inputPassword}`}
                  id="log-register-confirm-password"
                  name="log-register-confirm-password"
                  placeholder="&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;"
                  onChange={validatePassConfirm}
                />

                <button
                  type="button"
                  className={`${s.show} ${showPass2 ? s.show : s.showActive}`}
                  aria-label="Show entered password."
                  onClick={() => setShowPass2((b) => !b)}></button>
              </div>
            </div>
            {/* <!-- Remembering --> */}
            <div className={s.remembering}>
              <div className={s.rememberingKeep}>
                <div
                  onClick={() => setIsChecked((b) => !b)}
                  style={{ marginRight: "12px" }}
                  className={`${cs.customCheckbox} ${isChecked ? cs.customCheckboxChecked : ""}`}
                  tabIndex={0}
                  role="checkbox"
                  aria-checked={isChecked ? "true" : "false"}>
                  <Check aria-hidden="true" />

                  <input type="hidden" name="log-register-checkbox" defaultValue="0" />
                  <input
                    id="log-register-checkbox"
                    type="checkbox"
                    name="log-register-checkbox"
                    defaultValue="1"
                    checked={isChecked}
                    readOnly
                    hidden
                  />
                </div>

                <label htmlFor="log-register-checkbox" className={s.rememberingChecktext}>
                  Remember me
                </label>
              </div>
            </div>
            {/* <!-- Sign in button --> */}
            <button onClick={onSubmitClick} className={`${s.button} ${cs.btn} ${cs.btnMid}`}>
              Sign up
            </button>
            {/* <!-- Switcher --> */}
            <div className={s.switcher}>
              <span className={s.switcherDescr}>Already have an account?</span>
              <button type="button" onClick={onModalSwapClick} className={s.switcherLink}>
                Sign in
              </button>
            </div>
          </div>

          {/* <!-- Divider --> */}
          <p className={s.divider}>Or sign in with</p>

          {/* <!-- Bottom --> */}
          <div className={s.bottom}>
            <ul className={`${s.social} ${cs.social} ${cs.ulReset}`}>
              <li className={cs.socialItem}>
                <a
                  href="#"
                  target="_blank"
                  className={`${cs.socialLink} ${cs.socialLinkLight}`}
                  aria-label="Sign in with facebook.">
                  <Facebook aria-hidden="true" />
                </a>
              </li>

              <li className={cs.socialItem}>
                <a
                  href="#"
                  target="_blank"
                  className={`${cs.socialLink} ${cs.socialLinkLight}`}
                  aria-label="Sign in with google.">
                  <Google aria-hidden="true" />
                </a>
              </li>

              <li className={cs.socialItem}>
                <a
                  href="#"
                  target="_blank"
                  className={`${cs.socialLink} ${cs.socialLinkLight}`}
                  aria-label="Sign in with twitter.">
                  <Twitter aria-hidden="true" />
                </a>
              </li>

              <li className={cs.socialItem}>
                <a
                  href="#"
                  target="_blank"
                  className={`${cs.socialLink} ${cs.socialLinkLight}`}
                  aria-label="Sign in with linkedIn.">
                  <Linkedin aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Close --> */}
          <button
            onClick={() => {
              onModalRegisterClick();
            }}
            type="button"
            className={s.close}
            aria-label="Close this modal window.">
            <Cross />
          </button>
        </div>
      </div>
    </form>
  );
};
