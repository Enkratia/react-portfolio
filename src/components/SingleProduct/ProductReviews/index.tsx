import React from "react";

// import s from "./ProductReviews.module.scss";
// import cs from "../../../scss/global/_index.module.scss";

export const ProductReviews: React.FC = () => {
  return (
    <div className="product-card__reviews-wrapper">
      <input type="radio" name="product-card-main-tab" id="product-card-reviews" hidden />

      <div
        className="product-card__reviews-content reviews-content"
        id="product-card-reviews"
        role="tabpanel">
        {/* <!-- Left --> */}
        <div className="reviews-content__left">
          {/* <!-- Info --> */}
          <div className="reviews-content__info product">
            {/* <!-- Rate --> */}
            <div className="reviews-content__info-rate">
              <h2 className="reviews-content__info-title">12 reviews</h2>

              <div className="product__rating reviews-content__info-rating">
                <svg
                  className="product__rating-icon product__rating-icon--active reviews-content__info-star"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Star for rating one.">
                  <use href="./img/sprite.svg#star2"></use>
                </svg>

                <svg
                  className="product__rating-icon product__rating-icon--active reviews-content__info-star"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Star for rating two.">
                  <use href="./img/sprite.svg#star2"></use>
                </svg>

                <svg
                  className="product__rating-icon product__rating-icon--active reviews-content__info-star"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Star for rating three.">
                  <use href="./img/sprite.svg#star2"></use>
                </svg>

                <svg
                  className="product__rating-icon product__rating-icon--active reviews-content__info-star"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Star for rating four.">
                  <use href="./img/sprite.svg#star2"></use>
                </svg>

                <svg
                  className="product__rating-icon reviews-content__info-star"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Star for rating five.">
                  <use href="./img/sprite.svg#star2"></use>
                </svg>
              </div>

              <div className="reviews-content__info-recommended">
                <span className="reviews-content__info-numbers">9 out of 12 (75%)</span>

                <span className="reviews-content__info-descr">
                  Customers recommended this product
                </span>
              </div>
            </div>

            {/* <!-- Progress --> */}
            <ul className="reviews__info-progress progress">
              <li className="progress__item">
                <span className="progress__grade">5</span>

                <span className="progress__bar progress__bar--5" data-pb="7"></span>
              </li>

              <li className="progress__item">
                <span className="progress__grade">4</span>

                <span className="progress__bar progress__bar--4" data-pb="2"></span>
              </li>

              <li className="progress__item">
                <span className="progress__grade">3</span>

                <span className="progress__bar progress__bar--3" data-pb="1"></span>
              </li>

              <li className="progress__item">
                <span className="progress__grade">2</span>

                <span className="progress__bar progress__bar--2" data-pb="1"></span>
              </li>

              <li className="progress__item">
                <span className="progress__grade">1</span>

                <span className="progress__bar progress__bar--1" data-pb="1"></span>
              </li>
            </ul>
          </div>

          {/* <!-- Tool-bar --> */}
          <div className="reviews-content__tool-bar tool-bar">
            <button className="tool-bar__btn btn btn--mid">Leave a review</button>

            <div className="tool-bar__sort">
              <span className="tool-bar__sort-title">Sort by</span>

              <div
                className="custom-select custom-select--light tool-bar__sort-select"
                role="listbox"
                tabIndex={0}
                aria-label="Sort commentaries according to condition.">
                <div className="custom-select__head custom-select__head--light tool-bar__sort-head">
                  <span className="custom-select__selected tool-bar__sort-selected">newest</span>

                  <svg className="custom-select__icon" xmlns="http://www.w3.org/2000/svg">
                    <use href="./img/sprite.svg#angle-down"></use>
                  </svg>
                </div>

                <div className="custom-select__inner-wrapper tool-bar__sort-wrapper">
                  <ul
                    className="custom-select__list tool-bar__sort-list"
                    data-overlayscrollbars-initialize>
                    <li
                      className="custom-select__item custom-select__item--active tool-bar__sort-item"
                      role="option"
                      aria-selected="true">
                      newest
                    </li>

                    <li
                      className="custom-select__item tool-bar__sort-item"
                      role="option"
                      aria-selected="false">
                      oldest
                    </li>

                    <li
                      className="custom-select__item tool-bar__sort-item"
                      role="option"
                      aria-selected="false">
                      more likes
                    </li>

                    <li
                      className="custom-select__item tool-bar__sort-item"
                      role="option"
                      aria-selected="false">
                      more dislikes
                    </li>

                    <li
                      className="custom-select__item tool-bar__sort-item"
                      role="option"
                      aria-selected="false">
                      popular
                    </li>

                    <li
                      className="custom-select__item tool-bar__sort-item"
                      role="option"
                      aria-selected="false">
                      unpopular
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Review --> */}
          <div className="reviews-content__review review">
            {/* <!-- Review1 --> */}
            <div className="review__box reviews-content__box">
              <div className="review__user reviews-content__user">
                <span className="review__user-name">Devon Lane</span>

                <span className="review__user-date">July 15, 2020</span>

                <div className="review__user-rate user-rate">
                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating one.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating two.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating three.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating four.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating five.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>
                </div>
              </div>

              <div className="review__message reviews-content__message">
                <p className="review__message-text">
                  Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare
                  rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus.
                  Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames
                  egestas sed duis purus diam et.
                </p>

                <div className="review__message-tooltips">
                  <button className="review__message-reply">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#reply" aria-hidden="true"></use>
                    </svg>
                    Reply
                  </button>

                  <div className="review__message-assessment">
                    <button
                      className="review__message-btn review__message-btn--like"
                      aria-label="Like this review.">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <use href="./img/sprite.svg#like" aria-hidden="true"></use>
                      </svg>

                      <span className="review__message-like-count">2</span>
                    </button>

                    <button
                      className="review__message-btn review__message-btn--dislike"
                      aria-label="Dislike this review.">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <use href="./img/sprite.svg#dislike" aria-hidden="true"></use>
                      </svg>

                      <span className="review__message-dislike-count">0</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Review2 --> */}
            <div className="review__box reviews-content__box">
              <div className="review__user reviews-content__user">
                <span className="review__user-name">Annette Black</span>

                <span className="review__user-date">1 day ago</span>

                <div className="review__user-rate user-rate">
                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating one.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating two.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating three.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating four.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating five.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>
                </div>
              </div>

              <div className="review__message reviews-content__message">
                <p className="review__message-text">
                  <a href="#" className="review__message-link">
                    @Devon Lane
                  </a>

                  <span>
                    Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed
                    rhoncus quis pharetra pellentesque erat sagittis.
                  </span>
                </p>

                <div className="review__message-tooltips">
                  <button className="review__message-reply">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#reply" aria-hidden="true"></use>
                    </svg>
                    Reply
                  </button>

                  <div className="review__message-assessment">
                    <button
                      className="review__message-btn review__message-btn--like"
                      aria-label="Like this review.">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <use href="./img/sprite.svg#like" aria-hidden="true"></use>
                      </svg>

                      <span className="review__message-like-count">2</span>
                    </button>

                    <button
                      className="review__message-btn review__message-btn--dislike"
                      aria-label="Dislike this review.">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <use href="./img/sprite.svg#dislike" aria-hidden="true"></use>
                      </svg>

                      <span className="review__message-dislike-count">1</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Review3 --> */}
            <div className="review__box reviews-content__box">
              <div className="review__user reviews-content__user">
                <span className="review__user-name">Albert Flores</span>

                <span className="review__user-date">July 7, 2020</span>

                <div className="review__user-rate user-rate">
                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating one.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating two.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating three.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating four.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating five.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>
                </div>
              </div>

              <div className="review__message reviews-content__message">
                <p className="review__message-text">
                  Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc.
                  Fames faucibus nisl duis id diam.
                </p>

                <div className="review__message-tooltips">
                  <button className="review__message-reply">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#reply" aria-hidden="true"></use>
                    </svg>
                    Reply
                  </button>

                  <div className="review__message-assessment">
                    <button
                      className="review__message-btn review__message-btn--like"
                      aria-label="Like this review.">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <use href="./img/sprite.svg#like" aria-hidden="true"></use>
                      </svg>

                      <span className="review__message-like-count">0</span>
                    </button>

                    <button
                      className="review__message-btn review__message-btn--dislike"
                      aria-label="Dislike this review.">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <use href="./img/sprite.svg#dislike" aria-hidden="true"></use>
                      </svg>

                      <span className="review__message-dislike-count">3</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Review4 --> */}
            <div className="review__box reviews-content__box">
              <div className="review__user reviews-content__user">
                <span className="review__user-name">Marvin McKinney</span>

                <span className="review__user-date">June 28, 2020</span>

                <div className="review__user-rate user-rate">
                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating one.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating two.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating three.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating four.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>

                  <svg
                    className="user-rate__icon user-rate__icon--active"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Star for rating five.">
                    <use href="./img/sprite.svg#star2"></use>
                  </svg>
                </div>
              </div>

              <div className="review__message reviews-content__message">
                <p className="review__message-text">
                  Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit
                  consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas
                  congue nibh dui a nulla.
                </p>

                <div className="review__message-tooltips">
                  <button className="review__message-reply">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#reply" aria-hidden="true"></use>
                    </svg>
                    Reply
                  </button>

                  <div className="review__message-assessment">
                    <button
                      className="review__message-btn review__message-btn--like"
                      aria-label="Like this review.">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <use href="./img/sprite.svg#like" aria-hidden="true"></use>
                      </svg>

                      <span className="review__message-count">3</span>
                    </button>

                    <button
                      className="review__message-btn review__message-btn--dislike"
                      aria-label="Dislike this review.">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <use href="./img/sprite.svg#dislike" aria-hidden="true"></use>
                      </svg>

                      <span className="review__message-count">0</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pagination --> */}
          <ul className="reviews-content__pagination tool-pag">
            <li className="tool-pag__item tool-pag__item--inactive" data-toolpag="arrow-left">
              <a href="#" className="tool-pag__link" aria-label="Go to the previous page.">
                <svg
                  className="tool-pag__arrow tool-pag__arrow--left"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <use href="./img/sprite.svg#arrow" aria-hidden="true"></use>
                </svg>
              </a>
            </li>

            <li className="tool-pag__item tool-pag__item--active" data-toolpag="1">
              <a href="#" className="tool-pag__link">
                1
              </a>
            </li>

            <li className="tool-pag__item" data-toolpag="2">
              <a href="#" className="tool-pag__link">
                2
              </a>
            </li>

            <li className="tool-pag__item" data-toolpag="3">
              <a href="#" className="tool-pag__link">
                3
              </a>
            </li>

            <li className="tool-pag__item" data-toolpag="dots-right">
              <a href="#" className="tool-pag__link">
                ...
              </a>
            </li>

            <li className="tool-pag__item" data-toolpag="10">
              <a href="#" className="tool-pag__link">
                10
              </a>
            </li>

            <li className="tool-pag__item" data-toolpag="arrow-right">
              <a href="#" className="tool-pag__link" aria-label="Go to the next page.">
                <svg
                  className="tool-pag__arrow tool-pag__arrow--right"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <use href="./img/sprite.svg#arrow" aria-hidden="true"></use>
                </svg>
              </a>
            </li>
          </ul>

          {/* <!-- Pagination mini (for small devices) --> */}
          <ul className="reviews-content__pagination-mini tool-pag-mini">
            <li
              className="tool-pag-mini__item tool-pag-mini__item--inactive"
              data-toolpag="arrow-left">
              <a href="#" className="tool-pag-mini__link" aria-label="Go to the previous page.">
                <svg
                  className="tool-pag-mini__arrow tool-pag__arrow--left"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <use href="./img/sprite.svg#arrow" aria-hidden="true"></use>
                </svg>
              </a>
            </li>

            <li className="tool-pag-mini__item" data-toolpag="current">
              <a href="#" className="tool-pag__link">
                1
              </a>
            </li>

            <li className="tool-pag-mini__item">/</li>

            <li className="tool-pag-mini__item" data-toolpag="total">
              <a href="#" className="tool-pag__link">
                10
              </a>
            </li>

            <li className="tool-pag-mini__item" data-toolpag="arrow-right">
              <a href="#" className="tool-pag-mini__link" aria-label="Go to the next page.">
                <svg
                  className="tool-pag-mini__arrow tool-pag-mini__arrow--right"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <use href="./img/sprite.svg#arrow" aria-hidden="true"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Right --> */}
        <div className="reviews-content__right product">
          <article className="reviews-content__product product" data-vendor="183260098">
            {/* <!-- Look --> */}
            <div className="product__look">
              {/* <!-- Microslider --> */}
              <div className="product__image-wrapper microslider">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-sweatshirt.jpg"
                  alt="Product image."
                  className="product__image microslider__image product__image--main"
                  id="microslider-image"
                />

                {/* <!-- Sources for images --> */}
                <ul className="microslider__srcs" aria-hidden="true">
                  <li className="microslider__src" data-src="./img/product-bag.jpg"></li>
                  <li className="microslider__src" data-src="./img/product-bag-2.jpg"></li>
                  <li className="microslider__src" data-src="./img/product-bag-3.jpg"></li>
                </ul>

                {/* <!-- Btns for microslider --> */}
                <div className="microslider__btns">
                  <button
                    className="microslider__button microslider__button--left"
                    aria-label="Previous image of the product.">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#angle-down"></use>
                    </svg>
                  </button>

                  <button
                    className="microslider__button microslider__button--right"
                    aria-label="Next image of the product.">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#angle-down"></use>
                    </svg>
                  </button>
                </div>

                {/* <!-- Link --> */}
                <a href="#" className="product__image-link"></a>
              </div>

              {/* <!-- Rating --> */}
              <div className="product__rating">
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

              {/* <!-- Favorite --> */}
              <button className="product__favorite" aria-label="Add to favorite.">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <use href="./img/sprite.svg#heart-full"></use>
                </svg>
              </button>

              <div className="product__discount">-50%</div>
            </div>

            {/* <!-- Info --> */}
            <div className="product__info product__info--white">
              {/* <!-- Product name --> */}
              <a href="#" className="product__name">
                Basic hooded sweatshirt in pink
              </a>

              {/* <!-- Product prices --> */}
              <div className="product__prices">
                <span className="product__price product__price--h4 product__price--red">
                  $15.50
                </span>

                <span className="product__old-price reviews-content__old-price">$31.00</span>
              </div>

              {/* <!-- Product bottom --> */}
              <div className="product__bottom product__bottom--permanent">
                <div className="product__details reviews-content__product-details">
                  {/* <!-- Sizes --> */}
                  <ul className="product__sizes sizes">
                    <li className="sizes__item">
                      <button className="sizes__button" data-size="xs">
                        Xs
                      </button>
                    </li>

                    <li className="sizes__item">
                      <button className="sizes__button" data-size="s">
                        S
                      </button>
                    </li>

                    <li className="sizes__item">
                      <button className="sizes__button" data-size="m">
                        M
                      </button>
                    </li>

                    <li className="sizes__item">
                      <button className="sizes__button" data-size="l">
                        L
                      </button>
                    </li>

                    <li className="sizes__item">
                      <button className="sizes__button" data-size="xl">
                        Xl
                      </button>
                    </li>
                  </ul>

                  {/* <!-- Colors --> */}
                  <ul className="product__colors colors reviews-content__colors">
                    <li className="colors__item">
                      <button
                        className="colors__button colors__button--active"
                        data-color="Pink"
                        aria-label="Choose pink color."></button>
                    </li>

                    <li className="colors__item">
                      <button
                        className="colors__button"
                        data-color="Blue-gray"
                        aria-label="Choose blue-gray color."></button>
                    </li>

                    <li className="colors__item">
                      <button
                        className="colors__button"
                        data-color="Yellow"
                        aria-label="Choose yellow color."></button>
                    </li>
                  </ul>
                </div>

                {/* <!-- Button-cart --> */}
                <div className="product__button-wrapper">
                  <button className="product__button-cart btn btn--mid">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#cart"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
