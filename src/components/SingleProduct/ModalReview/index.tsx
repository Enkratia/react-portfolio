import React from "react";

// import s from "./ModalReview.module.scss";
// import cs from "../../../scss/global/_index.module.scss";

export const ModalReview: React.FC = () => {
  return (
    <div className="product-card__leave-review leave-review">
      <form className="leave-review__content" data-overlayscrollbars-initialize>
        <h3 className="leave-review__title">Leave a review</h3>

        {/* <!-- Name --> */}
        <div className="leave-review__box">
          <label htmlFor="leave-review-name" className="leave-review__label">
            Name
          </label>

          <div className="input-wrapper">
            <input
              type="text"
              className="leave-review__input input"
              placeholder="Your name"
              id="leave-review-name"
              name="leave-review-name"
            />
          </div>
        </div>

        {/* <!-- Email --> */}
        <div className="leave-review__box">
          <label htmlFor="leave-review-email" className="leave-review__label">
            Email
          </label>

          <div className="input-wrapper" data-validity="email">
            <input
              type="email"
              className="leave-review__input input"
              placeholder="Your working email"
              id="leave-review-email"
              name="leave-review-email"
            />
          </div>
        </div>

        {/* <!-- Rating --> */}
        <div className="leave-review__box">
          <label className="leave-review__label">Rating</label>

          <div className="custom-select__outer-wrapper leave-review__select-outer-wrapper">
            <div
              className="custom-select custom-select--light leave-review__sort-select"
              role="listbox"
              tabIndex={0}>
              <input
                type="hidden"
                className="leave-review__select-hidden"
                name="leave-review-select-hidden"
              />

              <div className="custom-select__head custom-select__head--light leave-review__sort-head">
                <span className="custom-select__selected leave-review__sort-selected">
                  Choose rating
                </span>

                <svg className="custom-select__icon" xmlns="http://www.w3.org/2000/svg">
                  <use href="./img/sprite.svg#angle-down"></use>
                </svg>
              </div>

              <div className="custom-select__inner-wrapper leave-review__sort-wrapper">
                <ul
                  className="custom-select__list leave-review__sort-list"
                  data-overlayscrollbars-initialize>
                  <li
                    className="custom-select__item custom-select__item--active leave-review__sort-item"
                    role="option"
                    aria-selected="true">
                    Choose rating
                  </li>

                  <li
                    className="custom-select__item leave-review__sort-item"
                    role="option"
                    aria-selected="false">
                    Option 1
                  </li>

                  <li
                    className="custom-select__item leave-review__sort-item"
                    role="option"
                    aria-selected="false">
                    Option 2
                  </li>

                  <li
                    className="custom-select__item leave-review__sort-item"
                    role="option"
                    aria-selected="false">
                    Option 3
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Upload --> */}
        <div className="leave-review__box">
          <label htmlFor="" className="leave-review__label">
            Upload a photo or video (optional)
          </label>

          <div className="leave-review__download download">
            {/* <!-- Download area --> */}
            <div className="download__area">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href="./img/sprite.svg#upload" aria-hidden="true"></use>
              </svg>

              <p className="download__area-descr">Drag and drop here to upload</p>

              <button type="button" className="download__area-btn btn btn--outline">
                Or select file
              </button>

              <input
                type="file"
                className="download__area-btn-native"
                name="leave-review-files"
                multiple
                accept="image/*,video/*"
                hidden
              />
            </div>

            {/* <!-- Download files --> */}
            <div className="download__files-wrapper" data-overlayscrollbars-initialize>
              <ul className="download__files"></ul>
            </div>
          </div>
        </div>

        {/* <!-- Review --> */}
        <div className="leave-review__box">
          <label htmlFor="leave-review-review" className="leave-review__label">
            Review
          </label>

          <div className="input-wrapper">
            <input
              type="hidden"
              className="leave-review__textarea-hidden"
              name="leave-review-textarea-hidden"
            />

            <div
              className="leave-review__textarea custom-textarea custom-textarea--review input"
              id="leave-review-review"
              contentEditable="true"
              role="textbox"
              data-overlayscrollbars-initialize></div>
          </div>
        </div>

        {/* <!-- Submit --> */}
        <button type="submit" className="leave-review__submit btn btn--mid">
          Submit a review
        </button>

        {/* <!-- Close --> */}
        <button type="button" className="leave-review__close">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <use href="./img/sprite.svg#cross" aria-hidden="true"></use>
          </svg>
        </button>
      </form>
    </div>
  );
};
