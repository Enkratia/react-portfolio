import React from "react";

// import s from "./ProductDetails.module.scss";
// import cs from "../../../scss/global/_index.module.scss";

export const ProductDetails: React.FC = () => {
  return (
    <div className="product-card__details-wrapper">
      <input type="radio" name="product-card-main-tab" id="product-details" hidden />

      <div className="product-card__details details" id="product-details" role="tabpanel">
        {/* <!-- Left --> */}
        <div className="details__left">
          {/* <!-- Section1 --> */}
          <section className="details__section">
            <h3 className="details__title">Details</h3>

            <p className="details__descr">
              Id habitant tempor aliquam vulputate enim velit tincidunt sed. Urna sed facilisis
              nulla feugiat amet venenatis. Id suspendisse ut quis tellus aliquam pellentesque
              neque, semper donec.
            </p>

            <ul className="details__list">
              <li className="details__item">Brand: Jordan</li>

              <li className="details__item">Color: gray / red / yellow</li>

              <li className="details__item">Mid-cut design</li>

              <li className="details__item">Lace-up fastening</li>

              <li className="details__item">Rubber outsole pods for durability and traction</li>

              <li className="details__item">Moulded grooves in forefoot offer added flexibility</li>

              <li className="details__item">
                Padded cuff with inner nodes designed to offer comfort and support around the
                Achilles tendon
              </li>
            </ul>
          </section>

          {/* <!-- Section2 --> */}
          <section className="details__section">
            <h3 className="details__title">Fabric</h3>

            <ul className="details__list">
              <li className="details__item">Upper: 50% real leather, 50% textile</li>

              <li className="details__item">Lining: 100% textile</li>

              <li className="details__item">Sole: 100% other materials</li>
            </ul>
          </section>

          {/* <!-- Section3 --> */}
          <section className="details__section">
            <h3 className="details__title">Care</h3>

            <ul className="details__list">
              <li className="details__item details__item--care--wash">Hand wash only (30°)</li>

              <li className="details__item details__item--care--ironing">No ironing</li>

              <li className="details__item details__item--care--bleach">Do not use any bleach</li>

              <li className="details__item details__item--care--tumble">Do not tumble dry</li>
            </ul>
          </section>
        </div>

        {/* <!-- Right --> */}
        <div className="details__right product">
          <article className="details__product product" data-vendor="183260098">
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

                <span className="product__old-price details__old-price">$31.00</span>
              </div>

              {/* <!-- Product bottom --> */}
              <div className="product__bottom product__bottom--permanent">
                <div className="product__details details__product-details">
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
                  <ul className="product__colors colors details__colors">
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
