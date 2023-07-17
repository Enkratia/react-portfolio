import React from "react";

import s from "./NewArrivals.module.scss";

export const NewArrivals: React.FC = () => {
  return (
    <section className={s.root}>
      <div className="new-arrivals__container container-wide">
        <h2 className="new-arrivals__title section-title">New arrivals</h2>

        <div className="new-arrivals__subtitle">
          <div className="new-arrivals__descr">
            Check out our latest arrivals for the upcoming season
          </div>

          <a href="#" className="new-arrivals__more">
            See the collection here
          </a>
        </div>

        {/* <!-- Slider outer wrapper --> */}
        <div className="new-arrivals__outer-wrapper">
          {/* <!-- Slider --> */}
          <div className="new-arrivals__slider swiper-slider" id="new-arrivals-slider">
            <div className="new-arrivals__wrapper swiper-wrapper">
              {/* <!-- Slide1 --> */}
              <article
                className="new-arrivals__product product swiper-slide"
                data-vendor="183265555">
                <div className="product__look">
                  <div className="product__image-wrapper microslider">
                    <img
                      src="./img/product-cap.jpg"
                      alt="Product image."
                      className="product__image microslider__image product__image--main"
                      id="microslider-image"
                    />

                    <ul className="microslider__srcs" aria-hidden="true">
                      <li className="microslider__src" data-src="./img/product-cap.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-2.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-3.jpg"></li>
                    </ul>

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

                    <a href="#" className="product__image-link"></a>
                  </div>

                  <div className="product__rating product__rating--visible">
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
                      className="product__rating-icon product__rating-icon--active"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Star for rating five.">
                      <use href="./img/sprite.svg#star2"></use>
                    </svg>
                  </div>

                  <button className="product__favorite" aria-label="Add to favorite.">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#heart-full"></use>
                    </svg>
                  </button>
                </div>

                <div className="product__info product__info--white">
                  <a href="#" className="product__name">
                    Black and white sport cap
                  </a>

                  <div className="product__prices">
                    <span className="product__price product__price--h5 new-arrivals__price">
                      $18.15
                    </span>
                  </div>

                  <div className="product__bottom">
                    <div className="product__details">
                      <ul className="product__sizes sizes">
                        <li className="sizes__item">
                          <button className="sizes__button">36</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button sizes__button--active">37</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">45</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">46</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">47</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">48</button>
                        </li>
                      </ul>

                      <ul className="product__colors colors">
                        <li className="colors__item">
                          <button
                            className="colors__button colors__button--active"
                            data-color="Black"
                            aria-label="Choose black color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Brown"
                            aria-label="Choose brown color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Blue-gray"
                            aria-label="Choose blue-gray color."></button>
                        </li>
                      </ul>
                    </div>

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

              {/* <!-- Slide2 --> */}
              <article
                className="new-arrivals__product product swiper-slide"
                data-vendor="183265444">
                <div className="product__look">
                  <div className="product__image-wrapper microslider">
                    <img
                      src="./img/product-glasses.jpg"
                      alt="Product image."
                      className="product__image microslider__image product__image--main"
                      id="microslider-image"
                    />

                    <ul className="microslider__srcs" aria-hidden="true">
                      <li className="microslider__src" data-src="./img/product-glasses.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-2.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-3.jpg"></li>
                    </ul>

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

                    <a href="#" className="product__image-link"></a>
                  </div>

                  <button className="product__favorite" aria-label="Add to favorite.">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#heart-full"></use>
                    </svg>
                  </button>
                </div>

                <div className="product__info product__info--white">
                  <a href="#" className="product__name">
                    Metal bridge sunglasses
                  </a>

                  <div className="product__prices">
                    <span className="product__price product__price--h5 new-arrivals__price">
                      $89.95
                    </span>
                  </div>

                  <div className="product__bottom">
                    <div className="product__details">
                      <ul className="product__sizes sizes">
                        <li className="sizes__item">
                          <button className="sizes__button">36</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button sizes__button--active">37</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">45</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">46</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">47</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">48</button>
                        </li>
                      </ul>

                      <ul className="product__colors colors">
                        <li className="colors__item">
                          <button
                            className="colors__button colors__button--active"
                            data-color="Black"
                            aria-label="Choose black color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Brown"
                            aria-label="Choose brown color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Blue-gray"
                            aria-label="Choose blue-gray color."></button>
                        </li>
                      </ul>
                    </div>

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

              {/* <!-- Slide3 --> */}
              <article
                className="new-arrivals__product product swiper-slide"
                data-vendor="183265666">
                <div className="product__look">
                  <div className="product__image-wrapper microslider">
                    <img
                      src="./img/product-blouse.jpg"
                      alt="Product image."
                      className="product__image microslider__image product__image--main"
                      id="microslider-image"
                    />

                    <ul className="microslider__srcs" aria-hidden="true">
                      <li className="microslider__src" data-src="./img/product-blouse.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-2.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-3.jpg"></li>
                    </ul>

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

                    <a href="#" className="product__image-link"></a>
                  </div>

                  <div className="product__rating product__rating--visible">
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

                  <button className="product__favorite" aria-label="Add to favorite.">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#heart-full"></use>
                    </svg>
                  </button>
                </div>

                <div className="product__info product__info--white">
                  <a href="#" className="product__name">
                    Green baby romper
                  </a>

                  <div className="product__prices">
                    <span className="product__price product__price--h5 new-arrivals__price">
                      $20.40
                    </span>
                  </div>

                  <div className="product__bottom">
                    <div className="product__details">
                      <ul className="product__sizes sizes">
                        <li className="sizes__item">
                          <button className="sizes__button">36</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button sizes__button--active">37</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">45</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">46</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">47</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">48</button>
                        </li>
                      </ul>

                      <ul className="product__colors colors">
                        <li className="colors__item">
                          <button
                            className="colors__button colors__button--active"
                            data-color="Black"
                            aria-label="Choose black color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Brown"
                            aria-label="Choose brown color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Blue-gray"
                            aria-label="Choose blue-gray color."></button>
                        </li>
                      </ul>
                    </div>

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

              {/* <!-- Slide4 --> */}
              <article
                className="new-arrivals__product product swiper-slide"
                data-vendor="183265777">
                <div className="product__look">
                  <div className="product__image-wrapper microslider">
                    <img
                      src="./img/product-jeans.jpg"
                      alt="Product image."
                      className="product__image microslider__image product__image--main"
                      id="microslider-image"
                    />

                    <ul className="microslider__srcs" aria-hidden="true">
                      <li className="microslider__src" data-src="./img/product-jeans.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-2.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-3.jpg"></li>
                    </ul>

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

                    <a href="#" className="product__image-link"></a>
                  </div>

                  <button className="product__favorite" aria-label="Add to favorite.">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#heart-full"></use>
                    </svg>
                  </button>
                </div>

                <div className="product__info product__info--white">
                  <a href="#" className="product__name">
                    Mid-rise slim cropped fit jeans
                  </a>

                  <div className="product__prices">
                    <span className="product__price product__price--h5 new-arrivals__price">
                      $40.00
                    </span>
                  </div>

                  <div className="product__bottom">
                    <div className="product__details">
                      <ul className="product__sizes sizes">
                        <li className="sizes__item">
                          <button className="sizes__button">36</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button sizes__button--active">37</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">45</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">46</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">47</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">48</button>
                        </li>
                      </ul>

                      <ul className="product__colors colors">
                        <li className="colors__item">
                          <button
                            className="colors__button colors__button--active"
                            data-color="Black"
                            aria-label="Choose black color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Brown"
                            aria-label="Choose brown color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Blue-gray"
                            aria-label="Choose blue-gray color."></button>
                        </li>
                      </ul>
                    </div>

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

              {/* <!-- Slide5 --> */}
              <article
                className="new-arrivals__product product swiper-slide"
                data-vendor="183265788">
                <div className="product__look">
                  <div className="product__image-wrapper microslider">
                    <img
                      src="./img/product-earring.jpg"
                      alt="Product image."
                      className="product__image microslider__image product__image--main"
                      id="microslider-image"
                    />

                    <ul className="microslider__srcs" aria-hidden="true">
                      <li className="microslider__src" data-src="./img/product-earring.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-2.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-3.jpg"></li>
                    </ul>

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

                    <a href="#" className="product__image-link"></a>
                  </div>

                  <div className="product__rating product__rating--visible">
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
                      className="product__rating-icon product__rating-icon--active"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Star for rating five.">
                      <use href="./img/sprite.svg#star2"></use>
                    </svg>
                  </div>

                  <button className="product__favorite" aria-label="Add to favorite.">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#heart-full"></use>
                    </svg>
                  </button>
                </div>

                <div className="product__info product__info--white">
                  <a href="#" className="product__name">
                    Red dangle earrings
                  </a>

                  <div className="product__prices">
                    <span className="product__price product__price--h5 new-arrivals__price">
                      $29.95
                    </span>
                  </div>

                  <div className="product__bottom">
                    <div className="product__details">
                      <ul className="product__sizes sizes">
                        <li className="sizes__item">
                          <button className="sizes__button">36</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button sizes__button--active">37</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">45</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">46</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">47</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">48</button>
                        </li>
                      </ul>

                      <ul className="product__colors colors">
                        <li className="colors__item">
                          <button
                            className="colors__button colors__button--active"
                            data-color="Black"
                            aria-label="Choose black color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Brown"
                            aria-label="Choose brown color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Blue-gray"
                            aria-label="Choose blue-gray color."></button>
                        </li>
                      </ul>
                    </div>

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

              {/* <!-- Slide6 --> */}
              <article
                className="new-arrivals__product product swiper-slide"
                data-vendor="183265119">
                <div className="product__look">
                  <div className="product__image-wrapper microslider">
                    <img
                      src="./img/product-snickers.jpg"
                      alt="Product image."
                      className="product__image microslider__image product__image--main"
                      id="microslider-image"
                    />

                    <ul className="microslider__srcs" aria-hidden="true">
                      <li className="microslider__src" data-src="./img/product-snickers.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-2.jpg"></li>
                      <li className="microslider__src" data-src="./img/product-bag-3.jpg"></li>
                    </ul>

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

                    <a href="#" className="product__image-link"></a>
                  </div>

                  <button className="product__favorite" aria-label="Add to favorite.">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <use href="./img/sprite.svg#heart-full"></use>
                    </svg>
                  </button>
                </div>

                <div className="product__info product__info--white">
                  <a href="#" className="product__name">
                    Baby shoes with laces
                  </a>

                  <div className="product__prices">
                    <span className="product__price product__price--h5 new-arrivals__price">
                      $30.60
                    </span>
                  </div>

                  <div className="product__bottom">
                    <div className="product__details">
                      <ul className="product__sizes sizes">
                        <li className="sizes__item">
                          <button className="sizes__button">36</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button sizes__button--active">37</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">45</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">46</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">47</button>
                        </li>

                        <li className="sizes__item">
                          <button className="sizes__button">48</button>
                        </li>
                      </ul>

                      <ul className="product__colors colors">
                        <li className="colors__item">
                          <button
                            className="colors__button colors__button--active"
                            data-color="Black"
                            aria-label="Choose black color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Brown"
                            aria-label="Choose brown color."></button>
                        </li>

                        <li className="colors__item">
                          <button
                            className="colors__button"
                            data-color="Blue-gray"
                            aria-label="Choose blue-gray color."></button>
                        </li>
                      </ul>
                    </div>

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

          {/* <!-- Pagination --> */}
          <div
            className="new-arrivals__pagination flat-pagination"
            id="new-arrivals-pagination"></div>
        </div>
      </div>
    </section>
  );
};
