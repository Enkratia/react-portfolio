import React from "react";

import { ProductType } from "../../../redux/backendApi/types";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./GeneralInfo.module.scss";
import cs from "../../../scss/global/_index.module.scss";

type GeneralInfotProps = {
  product: ProductType;
};

export const GeneralInfo: React.FC<GeneralInfotProps> = ({ product }) => {
  let settings = {
    swipe: true,
    dots: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      // {
      //   breakpoint: 1330,
      //   settings: {
      //     swipe: true,
      //     dots: true,
      //     swipeToSlide: true,
      //     slidesToScroll: 1,
      //     slidesToShow: 5,
      //   },
      // },
    ],
  };

  return (
    <div className={s.root} id="single-product-0" role="tabpanel">
      {/* <!-- Left --> */}
      <div className={s.left}>
        {/* <!-- Slider --> */}
        <div className={s.slider}>
          <Slider {...settings}>
            {product.imageUrls.map((imageUrl) => (
              <div className={s.sliderSlide}>
                <img src={imageUrl} alt="Product slide image." className={s.sliderImage} />
              </div>
            ))}

            {product.videos.map((video) => (
              <div className={`${s.sliderSlide} ${s.sliderSlideVideo}`}>
                <img
                  src={video.thumbnail}
                  alt="Product slide video thumbnail."
                  className={s.sliderImage}
                />
              </div>
            ))}
          </Slider>

          {/* <!-- Navigation --> */}
          <button
            className="pcs__button pcs__button-prev arrow"
            id="pcs-button-prev"
            aria-label="Choose previous slide.">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <use href="./img/sprite.svg#arrow"></use>
            </svg>
          </button>

          <button
            className="pcs__button pcs__button-next arrow"
            id="pcs-button-next"
            aria-label="Choose next slide.">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <use href="./img/sprite.svg#arrow"></use>
            </svg>
          </button>
        </div>

        {/* <!-- Minislider --> */}
        <div className="product-card__minislider pcm" id="pcm-swiper">
          <div className="pcm__wrapper swiper-wrapper">
            <div className="pcm__slide pcm__slide--active swiper-slide" data-slide-idx="0">
              <div className="pcm__image-wrapper">
                <img
                  src="./img/product-sweatshirt_104w.jpg"
                  alt="Product card image."
                  className="pcm__image"
                />
              </div>
            </div>

            <div className="pcm__slide swiper-slide" data-slide-idx="1">
              <div className="pcm__image-wrapper">
                <img
                  src="./img/product-sweatshirt-1_104w.jpg"
                  alt="Product card image."
                  className="pcm__image"
                />
              </div>
            </div>

            <div className="pcm__slide swiper-slide" data-slide-idx="2">
              <div className="pcm__image-wrapper">
                <img
                  src="./img/product-sweatshirt-2_104w.jpg"
                  alt="Product card image."
                  className="pcm__image"
                />
              </div>
            </div>

            <div className="pcm__slide swiper-slide" data-slide-idx="3">
              <div className="pcm__image-wrapper">
                <img
                  src="./img/product-sweatshirt-3_104w.jpg"
                  alt="Product card image."
                  className="pcm__image"
                />
              </div>
            </div>

            <div className="pcm__slide pcm__slide--video swiper-slide" data-slide-idx="4">
              <div className="pcm__image-wrapper">
                <img
                  src="./img/product-sweatshirt-4_104w.jpg"
                  alt="Product card image."
                  className="pcm__image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Right --> */}
      <div className="product-card__right product">
        <div className="product-card__details">
          {/* <!-- Prices --> */}
          <div className="product__prices product-card__price">
            <span className="product__price product__price--h4 product__price--red">$15.50</span>

            <span className="product__old-price">$31.00</span>
          </div>

          {/* <!-- Discount --> */}
          <div className="product__discount product-card__discount">-50%</div>

          {/* <!-- Feedback --> */}
          <div className="product-card__feedback">
            {/* <!-- Rating --> */}
            <div className="product__rating product__rating--visible product-card__rating">
              <svg
                className="product__rating-icon product__rating-icon--active"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Star for rating one.">
                <use href="./img/sprite.svg#star2"></use>
              </svg>

              <svg
                className="product__rating-icon product__rating-icon--active"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Star for rating two.">
                <use href="./img/sprite.svg#star2"></use>
              </svg>

              <svg
                className="product__rating-icon product__rating-icon--active"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Star for rating three.">
                <use href="./img/sprite.svg#star2"></use>
              </svg>

              <svg
                className="product__rating-icon product__rating-icon--active"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Star for rating four.">
                <use href="./img/sprite.svg#star2"></use>
              </svg>

              <svg
                className="product__rating-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Star for rating five.">
                <use href="./img/sprite.svg#star2"></use>
              </svg>
            </div>

            {/* <!-- Reviews --> */}
            <span className="product-card__reviews">12 reviews</span>
          </div>
        </div>

        {/* <!-- Color --> */}
        <div className="product-card__colors-wrapper">
          <label className="product-card__label">Color</label>

          <ul className="product-card__colors colors">
            <li className="colors__item product-card__colors-item">
              <button
                className="colors__button colors__button--active product-card__color-btn"
                data-color="Pink"
                aria-label="Choose pink color."></button>
            </li>

            <li className="colors__item product-card__colors-item">
              <button
                className="colors__button product-card__color-btn"
                data-color="Blue-gray"
                aria-label="Choose blue-gray color."></button>
            </li>

            <li className="colors__item product-card__colors-item">
              <button
                className="colors__button product-card__color-btn"
                data-color="Yellow"
                aria-label="Choose yellow color."></button>
            </li>

            <li className="colors__item product-card__colors-item product-card__colors-item--name">
              Pink
            </li>
          </ul>
        </div>

        {/* <!-- Size --> */}
        <div className="product-card__sizes-wrapper">
          {/* <!-- Size-select & label --> */}
          <div className="product-card__sizes">
            <label className="product-card__label product-card__label--size">Size</label>

            {/* <!-- Size select --> */}
            <div className="custom-select__outer-wrapper product-card__select-outer-wrapper">
              <div
                className="custom-select custom-select--light product-card__sort-select"
                role="listbox"
                tabIndex={0}>
                <div className="custom-select__head custom-select__head--light product-card__sort-head">
                  <span className="custom-select__selected product-card__sort-selected">
                    Please select
                  </span>

                  <svg className="custom-select__icon" xmlns="http://www.w3.org/2000/svg">
                    <use href="./img/sprite.svg#angle-down"></use>
                  </svg>
                </div>

                <div className="custom-select__inner-wrapper product-card__sort-wrapper">
                  <ul
                    className="custom-select__list product-card__sort-list"
                    data-overlayscrollbars-initialize>
                    <li
                      className="custom-select__item custom-select__item--active product-card__sort-item"
                      role="option"
                      aria-selected="true">
                      Please select
                    </li>

                    <li
                      className="custom-select__item product-card__sort-item"
                      data-size-select="s"
                      role="option"
                      aria-selected="false">
                      Size S
                    </li>

                    <li
                      className="custom-select__item product-card__sort-item"
                      data-size-select="m"
                      role="option"
                      aria-selected="false">
                      Size M
                    </li>

                    <li
                      className="custom-select__item product-card__sort-item"
                      data-size-select="l"
                      role="option"
                      aria-selected="false">
                      Size L
                    </li>

                    <li
                      className="custom-select__item product-card__sort-item"
                      data-size-select="xl"
                      role="option"
                      aria-selected="false">
                      Size XL
                    </li>

                    <li
                      className="custom-select__item product-card__sort-item"
                      data-size-select="xxl"
                      role="option"
                      aria-selected="false">
                      Size XXL
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Size chart button --> */}
          <button className="product-card__size-btn">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <use href="./img/sprite.svg#hanger" aria-hidden="true"></use>
            </svg>
            Size chart
          </button>
        </div>

        {/* <!-- CTA --> */}
        <div className="product-card__cta">
          {/* <!-- Input-number --> */}
          <div className="input-number product-card__input-number">
            <input
              type="text"
              className="input-number__input input product-card__input-number-input"
              value="1"
              aria-label="To write the number of products on page."
              maxLength={3}
            />

            <div className="input-number__btns product-card__input-number-btns">
              <button
                className="input-number__btn input-number__btn--small input-number__btn--upper"
                aria-label="To rise the number of products on page."></button>

              <button
                className="input-number__btn input-number__btn--small input-number__btn--lower"
                aria-label="To reduce the number of products on page."></button>
            </div>
          </div>

          {/* <!-- Button-cart --> */}
          <div className="product__button-wrapper product-card__btn-cart-wrapper">
            <button className="product__button-cart btn btn--mid product-card__btn-cart">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href="./img/sprite.svg#cart" aria-hidden="true"></use>
              </svg>
            </button>
          </div>

          {/* <!-- Favorite --> */}
          <button
            className="product__favorite product__favorite--rectangle product-card__favorite btn btn--mid btn--outline"
            aria-label="Add to favorite.">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <use href="./img/sprite.svg#heart-full" aria-hidden="true"></use>
            </svg>
            Favourite
          </button>
        </div>

        {/* <!-- Accordion #1 --> */}
        <div className="product-card__accordion accordion">
          <div className="accordion__top">
            <h6 className="accordion__title">Delivery</h6>

            <button
              className="accordion__toggle accordion__toggle--show c-toggle"
              aria-label="Show or hide the list of the categories."></button>
          </div>

          <div className="accordion__bottom accordion__bottom--1">
            <p className="accordion__descr">
              Free standard shipping on orders <b className="accordion__descr-price">over $35</b>{" "}
              before tax, plus free returns.
            </p>

            <table className="accordion__table">
              <thead>
                <tr className="accordion__table-top">
                  <th className="accordion__table-title">Type</th>

                  <th className="accordion__table-title">How long</th>

                  <th className="accordion__table-title">How much</th>
                </tr>
              </thead>

              <tbody>
                <tr className="accordion__table-row">
                  <td className="accordion__table-cell">Standard delivery</td>

                  <td className="accordion__table-cell">1-4 business days</td>

                  <td className="accordion__table-cell">$4.50</td>
                </tr>

                <tr className="accordion__table-row">
                  <td className="accordion__table-cell">Express delivery</td>

                  <td className="accordion__table-cell">1 business day</td>

                  <td className="accordion__table-cell">$10.00</td>
                </tr>

                <tr className="accordion__table-row">
                  <td className="accordion__table-cell">Pick up in store</td>

                  <td className="accordion__table-cell">1-3 business days</td>

                  <td className="accordion__table-cell">Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <!-- Accordion #2 --> */}
        <div className="product-card__accordion accordion">
          <div className="accordion__top">
            <h6 className="accordion__title">Return</h6>

            <button
              className="accordion__toggle accordion__toggle--show c-toggle"
              aria-label="Show or hide the list of the categories."></button>
          </div>

          <div className="accordion__bottom">
            <p className="accordion__descr accordion__descr--margin">
              You have <b className="accordion__descr-price">60 days</b> to return the item(s) using
              any of the following methods:
            </p>

            <ul className="accordion__list">
              <li className="accordion__item">Free store return</li>

              <li className="accordion__item">Free returns via USPS Dropoff Service</li>
            </ul>
          </div>
        </div>

        {/* <!-- Social --> */}
        <div className="product-card__share share">
          <h6 className="share__title">Share:</h6>

          <ul className="share__list">
            <li className="share__item">
              <a
                href="#"
                className="share__link share__link--facebook"
                aria-label="Go to our facebook page.">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <use href="./img/sprite.svg#facebook" aria-hidden="true"></use>
                </svg>
              </a>
            </li>

            <li className="share__item">
              <a
                href="#"
                className="share__link share__link--twitter"
                aria-label="Go to our twitter page.">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <use href="./img/sprite.svg#twitter" aria-hidden="true"></use>
                </svg>
              </a>
            </li>

            <li className="share__item">
              <a
                href="#"
                className="share__link share__link--pinterest"
                aria-label="Go to our pinterest page.">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <use href="./img/sprite.svg#pinterest" aria-hidden="true"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Payment --> */}
        <div className="product-card__payment payment">
          <div className="payment__box payment__box--visa" aria-label="Go to visa`s website."></div>
          <div
            className="payment__box payment__box--mastercard"
            aria-label="Go to mastercard`s website."></div>
          <div
            className="payment__box payment__box--paypal"
            aria-label="Go to paypal`s website."></div>
        </div>
      </div>
    </div>
  );
};
