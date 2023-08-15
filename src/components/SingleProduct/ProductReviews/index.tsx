import React from "react";

import { ProductReviewType, ProductType } from "../../../redux/backendApi/types";

import { getStarRating } from "../../../util/customFunctions";

import s from "./ProductReviews.module.scss";
import pr from "../../../components/Product/Product.module.scss";
// import cs from "../../../scss/global/_index.module.scss";
import { Star2 } from "../../../iconComponents";

type ProductReviewsProps = {
  activeTab: number;
  product: ProductType;
  selectRef: React.RefObject<HTMLDivElement>;
  productReviews: ProductReviewType;
};

export const ProductReviews: React.FC<ProductReviewsProps> = ({
  activeTab,
  product,
  selectRef,
  productReviews,
}) => {
  const [starCount, topRating, sumRating, percentage] = getStarRating(product.rating);
  let percentageWidths = [] as string[];

  const getReviewsCount = () => {
    const reviewsCount = productReviews.reviews.length;

    if (reviewsCount === 1) return "1 review";
    return `${reviewsCount} reviews`;
  };

  // **

  const calcWidth = (num: number, total: number) => {
    const percentage = 50 + ((num - 2) / total) * 100;
    return percentage.toFixed(2) + "%";
  };

  const getBarsWidths = () => {
    const productRatings = Object.values(product.rating);

    for (let elem in productRatings) {
      switch (productRatings[elem]) {
        case 0:
          percentageWidths.unshift("0");
          break;
        case 1:
          percentageWidths.unshift("25%");
          break;
        case 2:
          percentageWidths.unshift("50%");
          break;
        default:
          percentageWidths.unshift(calcWidth(productRatings[elem], sumRating));
      }
    }
  };
  getBarsWidths();

  return (
    <div
      className={`${s.root} ${activeTab === 2 ? s.rootShow : ""}`}
      id="product-reviews"
      role="tabpanel">
      {/* <!-- Left --> */}
      <div className={s.left}>
        {/* <!-- Info --> */}
        <div className={s.info}>
          {/* <!-- Rate --> */}
          <div className={s.infoRate}>
            <h3 className={s.infoTitle}>{getReviewsCount()}</h3>

            {starCount > 0 && (
              <div className={`${pr.rating} ${s.infoRating}`}>
                {[...Array(5)].map((_, i) => (
                  <Star2
                    key={i}
                    className={`${pr.ratingIcon} ${starCount > i ? pr.ratingIconActive : ""}`}
                  />
                ))}
              </div>
            )}

            <div className={s.infoRecommended}>
              <span
                className={
                  s.infoNumbers
                }>{`${topRating} out of ${sumRating} (${percentage}%)`}</span>
              <span className={s.infoDescr}>Customers recommended this product</span>
            </div>
          </div>

          {/* <!-- Progress --> */}
          <ul className={s.infoProgress}>
            {percentageWidths.map((width, i) => (
              <li className={s.infoProgressItem}>
                <span className={s.infoProgressGrade}>{percentageWidths.length - i}</span>
                <span
                  className={`${s.infoProgressBar} ${
                    s[`infoProgressBar${percentageWidths.length - i}`]
                  }`}
                  data-pb={product.rating[percentageWidths.length - i]}
                  style={{ "--progress-width": width } as React.CSSProperties}></span>
              </li>
            ))}
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
                Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum
                malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor
                sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed
                duis purus diam et.
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
                  Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus
                  quis pharetra pellentesque erat sagittis.
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
      <div className="reviews-content__right product"></div>
    </div>
  );
};
