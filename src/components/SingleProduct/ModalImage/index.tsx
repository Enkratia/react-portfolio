import React from "react";

// import s from "./ModalImage.module.scss";
// import cs from "../../../scss/global/_index.module.scss";

export const ModalImage: React.FC = () => {
  return (
    <div className="product-card__image-modal image-modal">
      {/* <!-- Image-modal head --> */}
      <div className="image-modal__head">
        <div className="image-modal__count">
          <span className="image-modal__count-current"></span>/
          <span className="image-modal__count-total"></span>
        </div>

        <button type="button" className="image-modal__close" aria-label="Close image-modal.">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <use href="./img/sprite.svg#cross" aria-hidden="true"></use>
          </svg>
        </button>
      </div>

      {/* <!-- Slider --> */}
      <div className="image-modal__slider swiper-slider">
        <div className="image-modal__wrapper swiper-wrapper">
          {/* <!-- Slide1 --> */}
          <div className="image-modal__slide swiper-slide">
            <div className="image-modal__image-wrapper-outer">
              <div className="image-modal__image-wrapper">
                <img
                  src="./img/product-sweatshirt_600w.jpg"
                  alt="Product image."
                  className="image-modal__image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* <!-- Slide2 --> */}
          <div className="image-modal__slide swiper-slide">
            <div className="image-modal__image-wrapper-outer">
              <div className="image-modal__image-wrapper">
                <img
                  src="./img/product-sweatshirt-1_600w.jpg"
                  alt="Product image."
                  className="image-modal__image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* <!-- Slide3 --> */}
          <div className="image-modal__slide swiper-slide">
            <div className="image-modal__image-wrapper-outer">
              <div className="image-modal__image-wrapper">
                <img
                  src="./img/product-sweatshirt-2_600w.jpg"
                  alt="Product image."
                  className="image-modal__image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* <!-- Slide4 --> */}
          <div className="image-modal__slide swiper-slide">
            <div className="image-modal__image-wrapper-outer">
              <div className="image-modal__image-wrapper">
                <img
                  src="./img/product-sweatshirt-3_600w.jpg"
                  alt="Product image."
                  className="image-modal__image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* <!-- Slide5 --> */}
          <div className="image-modal__slide swiper-slide">
            <div className="image-modal__image-wrapper-outer">
              <div className="image-modal__video-wrapper">
                <iframe
                  loading="lazy"
                  src="https://www.youtube.com/embed/1vrXpMLLK14"
                  title="YouTube video player"
                  // frameBorder={0}
                  allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="image-modal__video"></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Navigation --> */}
        <button
          className="image-modal__button image-modal__button-prev arrow"
          id="image-modal-button-prev"
          aria-label="Choose previous slide.">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <use href="./img/sprite.svg#arrow"></use>
          </svg>
        </button>

        <button
          className="image-modal__button image-modal__button-next arrow"
          id="image-modal-button-next"
          aria-label="Choose next slide.">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <use href="./img/sprite.svg#arrow"></use>
          </svg>
        </button>

        {/* <!-- Pagination --> */}
        <div className="image-modal__pagination-wrapper">
          <div className="image-modal__pagination" id="image-modal-pagination"></div>
        </div>
      </div>
    </div>
  );
};
