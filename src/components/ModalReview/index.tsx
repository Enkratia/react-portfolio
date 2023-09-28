import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

import React from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectProductReviewsRecipient } from "../../redux/productReviewsSlice/selectors";
import { setRecipient } from "../../redux/productReviewsSlice/slice";

import { useValidateForm } from "../../util/customHooks/";
import { setOverflowHidden } from "../../util/customFunctions";

import s from "./ModalReview.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { AngleDown, Cross, File, Upload } from "../../iconComponents";

const selectOptions = ["Choose rating", "5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"];

type OnFileInputChangeProps = (
  eChange: React.ChangeEvent<HTMLInputElement> | undefined,
  eDrop: React.DragEvent<HTMLDivElement> | undefined,
) => void;

type ModalReviewProps = {
  isModalOpen: boolean;
  setIsModalOpen: () => void;
};

export const ModalReview: React.FC<ModalReviewProps> = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useAppDispatch();

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

  const recipient = useAppSelector(selectProductReviewsRecipient);
  const [taValue, setTaValue] = React.useState("");

  const [filesObjs, setFilesObjs] = React.useState<Record<string, string | number>[]>([]);
  const [isDragOver, setIsDragOver] = React.useState(false);

  // **
  const onAreaDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const onAreaDragLeave = () => {
    setIsDragOver(false);
  };

  const onAreaDrop = (eDrop: React.DragEvent<HTMLDivElement>) => {
    eDrop.preventDefault();
    setIsDragOver(false);

    onFileInputChange(undefined, eDrop);
  };

  // **
  const checkError = (idx: number) => {
    setFilesObjs((objs) => {
      return objs.map((obj) => {
        if (obj.idx === idx) {
          return {
            ...obj,
            finalSize: "Something gone wrong ...",
            loadClass: "downloadFileError",
          };
        }

        return obj;
      });
    });
  };

  const checkUpdate = (idx: number, data: ProgressEvent<FileReader>) => {
    const { loaded, total } = data;
    let finalSize = "";

    const downloaded = ~~((loaded / total) * 100) + "%";

    setFilesObjs((objs) => {
      return objs.map((obj) => {
        if (obj.idx === idx) {
          return {
            ...obj,
            downloaded: downloaded,
          };
        }

        return obj;
      });
    });

    if (loaded === total) {
      setTimeout(() => {
        if (total < 1048576) {
          finalSize = (total / 1024).toFixed() + " KB";
        } else {
          finalSize = (total / 1048576).toFixed() + " MB";
        }

        setFilesObjs((objs) => {
          return objs.map((obj) => {
            if (obj.idx === idx) {
              return {
                ...obj,
                finalSize: finalSize,
                loadClass: "downloadFileLoaded",
              };
            }

            return obj;
          });
        });
      }, 300);
    }
  };

  const onFileInputChange: OnFileInputChangeProps = (eChange, eDrop) => {
    const files = eChange?.currentTarget.files || eDrop?.dataTransfer.files;

    if (!files || files.length === 0) return;

    const fileObjs = [...files].map((file, i) => {
      const ext = file.name.match(/\.[a-z0-9]+$/)?.[0] as string;

      const name = file.name.replace(ext, "");
      const shortName = name.length > 14 ? name.substring(0, 14) + "..." : name;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onprogress = (e) => checkUpdate(filesObjs.length + i, e);
      reader.onerror = () => checkError(filesObjs.length + i);

      return {
        idx: filesObjs.length + i,
        ext: ext,
        name: shortName,
      };
    });

    setFilesObjs((objs) => [...objs, ...fileObjs]);
  };

  const onDownloadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const fileInput = e.currentTarget.nextElementSibling as HTMLInputElement;
    fileInput?.click();
  };

  // **
  const onModalOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasAttribute("data-modal-exit")) return;
    e.currentTarget.removeAttribute("data-modal-exit");

    dispatch(setRecipient(undefined));

    setIsModalOpen();
    setOverflowHidden(!isModalOpen);
  };

  const onModalDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.setAttribute("data-modal-exit", "");
    }
  };

  const onCloseClick = () => {
    dispatch(setRecipient(undefined));

    setIsModalOpen();
    setOverflowHidden(!isModalOpen);
  };

  // **
  const onTextareaInput = (e: React.FormEvent<HTMLDivElement>) => {
    const ta = e.target as HTMLDivElement;

    const isRecipient = ta.querySelector("span");
    if (!isRecipient) {
      dispatch(setRecipient(undefined));
    }

    const text = ta.innerText.replace(`@${recipient}`, "").trim();

    setTaValue(text);
    validateContent(text);
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

  // **
  const scrollbarOptions1 = {
    scrollbars: {
      theme: s.osThemeModalReview,
    },
  };

  const scrollbarOptions2 = {
    scrollbars: {
      theme: s.osThemeDownloadFiles,
    },
  };

  // **
  const recipientHTML = {
    __html: recipient ? `<span contenteditable="false">@${recipient}<span> ` : "",
  };

  return (
    <div className={s.root} onClick={onModalOutsideClick} onPointerDown={onModalDown}>
      <OverlayScrollbarsComponent options={scrollbarOptions1} className={s.contentWrapper} defer>
        <form className={s.content}>
          <h3 className={s.title}>Leave a review</h3>

          {/* <!-- Name --> */}
          <div className={s.box}>
            <label htmlFor="leave-review-name" className={s.label}>
              Name
            </label>

            <div className={`${cs.inputWrapper} ${cs[isValidText[0]]}`}>
              <input
                onChange={(e) => validateText(e.target.value, 0)}
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
                onChange={(e) => validateEmail(e.target.value)}
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
                <div
                  className={`${cs.selectHead} ${activeOption === 0 ? "" : cs.selectHeadActive}`}>
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
              <div
                onDragOver={onAreaDragOver}
                onDragLeave={onAreaDragLeave}
                onDrop={onAreaDrop}
                className={`${s.downloadArea} ${isDragOver ? s.downloadAreaHighlight : ""}`}>
                <Upload aria-hidden="true" />

                <p className={s.downloadDescr}>
                  {isDragOver ? "Release to upload" : "Drag and drop here to upload"}
                </p>

                <button
                  onClick={onDownloadClick}
                  type="button"
                  className={`${s.downloadAreaBtn} ${cs.btn} ${cs.btnOutline}`}>
                  Or select file
                </button>

                <input
                  onChange={(e) => onFileInputChange(e, undefined)}
                  type="file"
                  className={s.downloadAreaBtnNative}
                  name="leave-review-files"
                  multiple
                  accept="image/*,video/*"
                  hidden
                />
              </div>

              {/* <!-- Download files --> */}
              <OverlayScrollbarsComponent
                options={scrollbarOptions2}
                className={`${s.downloadFilesWrapper} ${
                  filesObjs.length > 0 ? s.downloadFilesWrapperShow : ""
                }`}
                defer>
                <ul className={s.downloadFiles}>
                  {filesObjs.length > 0 &&
                    filesObjs.map((obj) => (
                      <li
                        key={obj.idx}
                        className={`${s.downloadFile} ${obj.loadClass ? s[obj.loadClass] : ""}`}>
                        <File aria-hidden="true" />

                        <div className={s.downloadFileDetails}>
                          {/* <!-- Download file top --> */}
                          <div className={s.downloadFileTop}>
                            <span
                              className={s.downloadFileName}>{`${obj.name}... ${obj.ext}`}</span>
                            <span className={s.downloadFilePercent}>{obj.downloaded}</span>
                          </div>

                          {/* <!-- Download file bottom --> */}
                          <div className={s.downloadFileBottom}>
                            <div className={s.downloadFileProgressbar}>
                              <div
                                className={s.downloadFileProgress}
                                style={{ width: obj.downloaded }}></div>
                            </div>

                            {obj.finalSize && (
                              <span className={s.downloadFileSize}>{obj.finalSize}</span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </OverlayScrollbarsComponent>
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
                // onFocus={onTextareaFocus}
                dangerouslySetInnerHTML={recipientHTML}
                onInput={onTextareaInput}
                tabIndex={0}
                className={`${s.textarea} ${cs.textarea} ${
                  taValue.length > 0 || recipient ? "" : cs.textareaReview
                } ${cs.input}`}
                id="leave-review-textarea"
                contentEditable="true"
                role="textbox"
                // data-recipient={recipient ? `@${recipient} ` : ""}
              ></div>
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
      </OverlayScrollbarsComponent>
    </div>
  );
};
