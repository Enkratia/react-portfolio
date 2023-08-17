import React from "react";

import { useValidateForm } from "../../util/customHooks/";
import { setOverflowHidden } from "../../util/customFunctions";

import s from "./ModalReview.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { AngleDown, Cross, Upload } from "../../iconComponents";

const selectOptions = ["Choose rating", "5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"];

type ModalReviewProps = {
  recipient: string | undefined;
  isModalOpen: boolean;
  setIsModalOpen: () => void;
};

export const ModalReview: React.FC<ModalReviewProps> = ({
  recipient,
  isModalOpen,
  setIsModalOpen,
}) => {
  const {
    isValidSelect,
    validateSelect,
    isValidEmail,
    validateEmail,
    isValidText,
    validateText,
    isValidContent,
    validateContent,
  } = useValidateForm();
  const [isOpenSelect, setIsOpenSelect] = React.useState(false);
  const [activeOption, setActiveOption] = React.useState(0);

  const [taValue, setTaValue] = React.useState("");

  // **
  const onModalOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const modal = e.currentTarget as HTMLDivElement;
    const content = modal?.firstElementChild as HTMLFormElement;

    if (content && content.contains(e.target as Node)) {
      return;
    }

    setIsModalOpen();
    setOverflowHidden(!isModalOpen);
  };

  const onCloseClick = () => {
    setIsModalOpen();
    setOverflowHidden(!isModalOpen);
  };

  // **
  const onTextareaFocus = (e: React.FormEvent<HTMLDivElement>) => {
    const ta = e.target as HTMLDivElement;

    if (recipient && ta.innerText.length === 0) {
      ta.innerText = " ";
    }
  };

  const onTextareaInput = (e: React.FormEvent<HTMLDivElement>) => {
    const ta = e.target as HTMLDivElement;

    if (recipient && ta.innerText === "") {
      ta.innerText = " ";
    }

    setTaValue(ta.innerText);
    validateContent(e);
  };

  // **
  const onSelectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget.lastElementChild) return;

    const select = e.currentTarget;
    setIsOpenSelect((b) => !b);

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpenSelect(false);

        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const select = e.currentTarget;

    if (e.key === "Enter") {
      setIsOpenSelect((b) => !b);
    }

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpenSelect(false);

        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectOptionClick = (e: React.MouseEvent<HTMLLIElement>, option: number) => {
    setActiveOption(option);
    validateSelect(e.currentTarget, 0);
  };

  const onSelectOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, option: number) => {
    if (e.key === "Enter") {
      setActiveOption(option);
      validateSelect(e.currentTarget, 0);

      (e.currentTarget.closest('[role="listbox"]') as HTMLDivElement)?.focus();
    }
  };

  return (
    <div className={s.root} onClick={onModalOutsideClick}>
      <form className={s.content}>
        <h3 className={s.title}>Leave a review</h3>

        {/* <!-- Name --> */}
        <div className={s.box}>
          <label htmlFor="leave-review-name" className={s.label}>
            Name
          </label>

          <div className={`${cs.inputWrapper} ${cs[isValidText[0]]}`}>
            <input
              onChange={(e) => validateText(e, 0)}
              type="text"
              className={`${s.input} ${cs.input}`}
              placeholder="Your name"
              id="leave-review-name"
              name="leave-review-name"
            />
          </div>
        </div>

        {/* <!-- Email --> */}
        <div className={s.box}>
          <label htmlFor="leave-review-email" className={s.label}>
            Email
          </label>

          <div className={`${cs.inputWrapper} ${cs[isValidEmail]}`} data-validity="email">
            <input
              onChange={(e) => validateEmail(e)}
              type="text"
              className={`${s.input} ${cs.input}`}
              placeholder="Your working email"
              id="leave-review-email"
              name="leave-review-email"
            />
          </div>
        </div>

        {/* <!-- Rating --> */}
        <div className={s.box}>
          <label className={s.label}>Rating</label>

          <div className={`${cs.inputWrapper} ${cs[isValidSelect[0]]}`}>
            <div
              className={`${cs.select} ${cs.input}`}
              role="listbox"
              tabIndex={0}
              onKeyDown={onSelectKeyDown}
              onClick={onSelectClick}>
              <div className={`${cs.selectHead} ${activeOption === 0 ? "" : cs.selectHeadActive}`}>
                <span className={cs.selectSelected}>{selectOptions[activeOption]}</span>
                <input
                  type="hidden"
                  name="leave-review-rating"
                  value={activeOption === 0 ? "" : selectOptions[activeOption]}
                />
                <AngleDown aria-hidden="true" />
              </div>
              <div
                className={`${cs.selectWrapper} ${cs.input} ${
                  isOpenSelect ? cs.selectWrapperActive : ""
                }`}>
                <ul className={cs.selectList}>
                  {selectOptions.map((size, i) => (
                    <li
                      key={i}
                      tabIndex={0}
                      className={`${cs.selectItem} ${
                        activeOption === i ? cs.selectItemActive : ""
                      }`}
                      role="option"
                      aria-selected={activeOption === i ? "true" : "false"}
                      onKeyDown={(e) => onSelectOptionKeyDown(e, i)}
                      onClick={(e) => onSelectOptionClick(e, i)}>
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Upload --> */}
        <div className={s.box}>
          <label htmlFor="" className={s.label}>
            Upload a photo or video (optional)
          </label>

          <div className={s.download}>
            {/* <!-- Download area --> */}
            <div className={s.downloadArea}>
              <Upload aria-hidden="true" />

              <p className={s.downloadDescr}>Drag and drop here to upload</p>

              <button type="button" className={`${s.downloadAreaBtn} ${cs.btn} ${cs.btnOutline}`}>
                Or select file
              </button>

              <input
                type="file"
                className={s.downloadAreaBtnNative}
                name="leave-review-files"
                multiple
                accept="image/*,video/*"
                hidden
              />
            </div>

            {/* <!-- Download files --> */}
            <div className={s.downloadFilesWrapper} data-overlayscrollbars-initialize>
              <ul className={s.downloadFiles}></ul>
            </div>
          </div>
        </div>

        {/* <!-- Review --> */}
        <div className={s.box}>
          <label htmlFor="" className={s.label}>
            Review
          </label>

          <div className={`${cs.inputWrapper} ${cs[isValidContent]}`}>
            <input type="hidden" name="leave-review-recipient" value={recipient || ""} readOnly />
            <input type="hidden" name="leave-review-textarea" value={taValue} readOnly />

            <div
              onFocus={onTextareaFocus}
              onInput={onTextareaInput}
              tabIndex={0}
              className={`${s.textarea} ${cs.textarea} ${
                taValue.length > 0 || recipient ? "" : cs.textareaReview
              } ${cs.input}`}
              id="leave-review-textarea"
              contentEditable="true"
              role="textbox"
              data-recipient={recipient ? `@${recipient} ` : ""}
              data-overlayscrollbars-initialize></div>
          </div>
        </div>
        {/* <!-- Submit --> */}
        <button type="submit" className={`${s.submit} ${cs.btn} ${cs.btnMid}`}>
          Submit a review
        </button>

        {/* <!-- Close --> */}
        <button
          onClick={onCloseClick}
          type="button"
          className={s.close}
          aria-label="Close modal window.">
          <Cross aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};
