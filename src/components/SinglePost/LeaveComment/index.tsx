import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectLeaveComment } from "../../../redux/leaveCommentSlice/selectors";
import { setRecipient } from "../../../redux/leaveCommentSlice/slice";

import { useValidateForm } from "../../../util/customHooks";

import s from "./LeaveComment.module.scss";
import cs from "../../../scss/global/_index.module.scss";

export const LeaveComment: React.FC = () => {
  const {
    isValidText,
    validateText,
    isValidEmail,
    validateEmail,
    isValidContent,
    validateContent,
  } = useValidateForm();
  const dispatch = useAppDispatch();

  const { recipient } = useAppSelector(selectLeaveComment);
  const [taValue, setTaValue] = React.useState("");

  const onTextareaInput = (e: React.FormEvent<HTMLDivElement>) => {
    const ta = e.target as HTMLDivElement;

    const isRecipient = ta.querySelector("span");
    if (!isRecipient) {
      dispatch(setRecipient(undefined));
    }

    const taInnerText = ta.innerText.replace(`@${recipient}`, "").trim();
    setTaValue(taInnerText);

    validateContent(e);
  };

  // **
  const recipientHTML = {
    __html: recipient ? `<span contenteditable="false">@${recipient}<span> ` : "",
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.containerNarrow}`}>
        <h2 className={`${s.title} ${cs.sectionTitle}`}>Leave your comment</h2>

        {/* <!-- Form --> */}
        <form className={s.form}>
          {/* <!-- Fields --> */}
          <div className={s.fields}>
            {/* <!-- Field1 --> */}
            <div className={s.field}>
              <label htmlFor="leave-your-comment-name" className={s.label}>
                Name*
              </label>

              <div className={`${cs.inputWrapper} ${cs[isValidText[0]]}`}>
                <input
                  onChange={(e) => validateText(e, 0)}
                  type="text"
                  className={`${s.input} ${cs.input}`}
                  placeholder="Your name"
                  id="leave-your-comment-name"
                  name="leave-your-comment-name"
                />
              </div>
            </div>

            {/* <!-- Field2 --> */}
            <div className={s.field}>
              <label htmlFor="leave-your-comment-email" className={s.label}>
                Email*
              </label>

              <div className={`${cs.inputWrapper} ${cs[isValidEmail]}`} data-validity="email">
                <input
                  onChange={(e) => validateEmail(e)}
                  type="text"
                  className={`${s.input} ${cs.input}`}
                  placeholder="Your working email"
                  id="leave-your-comment-email"
                  name="leave-your-comment-email"
                />
              </div>
            </div>

            {/* <!-- Field3 --> */}
            <div className={s.field}>
              <label htmlFor="leave-your-comment-comment" className={s.label}>
                Your comment*
              </label>

              <div className={`${cs.inputWrapper} ${cs[isValidContent]}`}>
                <input
                  type="hidden"
                  name="leave-your-comment-recipient"
                  value={recipient || ""}
                  readOnly
                />
                <input type="hidden" name="leave-your-comment-textarea" value={taValue} readOnly />

                <div
                  dangerouslySetInnerHTML={recipientHTML}
                  onInput={onTextareaInput}
                  tabIndex={0}
                  className={`${s.textarea} ${cs.textarea} ${cs.input} ${
                    taValue.length > 0 || recipient ? "" : cs.textareaComment
                  }`}
                  id="leave-your-comment-textarea"
                  contentEditable="true"
                  role="textbox"></div>
              </div>
            </div>
          </div>

          <button className={`${s.submit} ${cs.btn} ${cs.btnLg}`}>Post comment</button>
        </form>
      </div>
    </section>
  );
};
