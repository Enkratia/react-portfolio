import React from "react";
import { useImmer } from "use-immer";

const mailRegExp = /^\S+@\S+\.\S+$/;

export const useValidateForm = () => {
  const [isValidText, setIsValidText] = useImmer<string[]>([]);

  // **
  const [isValidEmail, setIsValidEmail] = useImmer("");

  // **
  const [isValidPhone, setIsValidPhone] = useImmer("");

  // **
  const [isValidSelect, setIsValidSelect] = useImmer<string[]>([]);

  // **
  const passLengthRef = React.useRef({ value: "", comparison: false }); // store validation result
  const [isValidPassLength, setIsValidPassLength] = useImmer(""); // store input`s value

  // **
  const passConfirmRef = React.useRef({
    value: "",
    comparison1: false,
    comparison2: false,
    comparison3: false,
  });
  const [isValidPassConfirm, setIsValidPassConfirm] = useImmer("");

  // ***
  const validateSelect = (option: HTMLLIElement, idx: number) => {
    const list = option.parentElement;
    const isFirstChild = option === list?.firstElementChild;

    if (isFirstChild) {
      setIsValidSelect((draft) => {
        draft[idx] = "inputWrapperWarning";
        return draft;
      });
    } else {
      setIsValidSelect((draft) => {
        draft[idx] = "inputWrapperSuccess";
        return draft;
      });
    }
  };

  // ***
  const validatePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const is15Chars = e.currentTarget.value.length === 15;

    if (is15Chars) {
      setIsValidPhone("inputWrapperSuccess");
    } else {
      setIsValidPhone("inputWrapperWarning");
    }
  };

  // ***
  const validateText = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const isNotEmpty = e.currentTarget.value.length > 0;

    if (isNotEmpty) {
      setIsValidText((draft) => {
        draft[idx] = "inputWrapperSuccess";
        return draft;
      });
    } else {
      setIsValidText((draft) => {
        draft[idx] = "inputWrapperWarning";
        return draft;
      });
    }
  };

  // ***
  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isMatched = e.currentTarget.value.search(mailRegExp) !== -1;

    if (isMatched) {
      setIsValidEmail("inputWrapperSuccess");
    } else {
      setIsValidEmail("inputWrapperWarning");
    }
  };

  // ***
  const validatePassLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    passLengthRef.current.value = e.currentTarget.value;
    passLengthRef.current.comparison = e.currentTarget.value.length > 5;
    validateDeep();
  };

  // ***
  const validatePassConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    passConfirmRef.current.value = e.currentTarget.value;
    validateDeep();
  };

  // *
  function validateDeep() {
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
  }

  return {
    isValidEmail,
    validateEmail,
    isValidPassLength,
    validatePassLength,
    isValidText,
    validateText,
    isValidPassConfirm,
    validatePassConfirm,
    isValidPhone,
    validatePhone,
    isValidSelect,
    validateSelect,
  };
};
