import React from "react";

const mailRegExp = /^\S+@\S+\.\S+$/;

export const useValidateForm = () => {
  const textRef = React.useRef(false);
  const [isValidText, setIsValidText] = React.useState("");

  //
  const emailRef = React.useRef(-1);
  const [isValidEmail, setIsValidEmail] = React.useState("");

  //
  const passLengthRef = React.useRef({ value: "", comparison: false });
  const [isValidPassLength, setIsValidPassLength] = React.useState("");

  //
  const passConfirmRef = React.useRef({
    value: "",
    comparison1: false,
    comparison2: false,
    comparison3: false,
  });
  const [isValidPassConfirm, setIsValidPassConfirm] = React.useState("");

  const validateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    textRef.current = e.currentTarget.value.length > 0;

    if (textRef.current) {
      setIsValidText("inputWrapperSuccess");
    } else {
      setIsValidText("inputWrapperWarning");
    }
  };

  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailRef.current = e.currentTarget.value.search(mailRegExp);

    if (emailRef.current === -1) {
      setIsValidEmail("inputWrapperWarning");
    } else {
      setIsValidEmail("inputWrapperSuccess");
    }
  };

  const validateDeep = () => {
    if (passLengthRef.current.comparison) {
      setIsValidPassLength("inputWrapperSuccess");
    } else {
      setIsValidPassLength("inputWrapperWarning");
    }

    passConfirmRef.current.comparison1 =
      passLengthRef.current.comparison &&
      passLengthRef.current.value === passConfirmRef.current.value;

    passConfirmRef.current.comparison2 =
      !passLengthRef.current.comparison &&
      passLengthRef.current.value === passConfirmRef.current.value;

    passConfirmRef.current.comparison3 =
      passLengthRef.current.comparison &&
      passLengthRef.current.value !== passConfirmRef.current.value;

    if (passConfirmRef.current.comparison1) {
      setIsValidPassConfirm("inputWrapperSuccess");
    } else if (passConfirmRef.current.comparison2) {
      setIsValidPassConfirm("");
    } else if (passConfirmRef.current.comparison3) {
      setIsValidPassConfirm("inputWrapperWarning");
    } else {
      setIsValidPassConfirm("");
    }
  };

  const validatePassLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    passLengthRef.current.value = e.currentTarget.value;
    passLengthRef.current.comparison = e.currentTarget.value.length > 5;

    validateDeep();
  };

  const validatePassConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    passConfirmRef.current.value = e.currentTarget.value;

    validateDeep();
  };

  return {
    isValidEmail,
    validateEmail,
    isValidPassLength,
    validatePassLength,
    isValidText,
    validateText,
    isValidPassConfirm,
    validatePassConfirm,
  };
};
