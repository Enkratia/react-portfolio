import React from "react";

import { ProductType } from "../../../redux/backendApi/types";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FavoriteBtn } from "../../../components";
import { useValidateForm } from "../../../util/customHooks";

import s from "./GeneralInfo.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import pr from "../../../components/Product/Product.module.scss";
import { AngleDown, Arrow, Cart, Hanger, Star2 } from "../../../iconComponents";

type GeneralInfotProps = {
  product: ProductType;
};

export const GeneralInfo: React.FC<GeneralInfotProps> = ({ product }) => {
  const sliderRef = React.useRef<Slider>();
  const miniSliderRef = React.useRef<Slider>();

  const [activeSlide, setActiveSlide] = React.useState(0);

  const { isValidSelect, validateSelect } = useValidateForm();
  const [isOpenSelect, setIsOpenSelect] = React.useState(false);
  const [activeOption, setActiveOption] = React.useState(0);

  const selectSizes = ["Please select", ...product.size];

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

  const formatReviews = (number: number) => {
    if (number === 1) return "1 review";
    return `${number} reviews`;
  };

  const formatSize = (size: string) => {
    if (size === selectSizes[0]) return size;
    return `Size ${size.toUpperCase()}`;
  };

  // **
  const onAfterChange = (idx: number) => {
    setActiveSlide(idx);
  };

  const onAfterChangeMini = (idx: number) => {
    setActiveSlide(idx);
    sliderRef.current?.slickGoTo(idx);
  };

  const onSlideMiniClick = (idx: number) => {
    setActiveSlide(idx);
    sliderRef.current?.slickGoTo(idx);
  };

  let settings1 = {
    swipe: true,
    dots: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    afterChange: onAfterChange,
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

  let settings2 = {
    swipe: true,
    dots: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    afterChange: onAfterChangeMini,
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
        <div className={s.sliderWrapper}>
          <Slider
            ref={sliderRef}
            className={s.slider}
            asNavFor={miniSliderRef.current}
            {...settings1}>
            {product.imageUrls.map((imageUrl, i) => (
              <div key={i} className={s.sliderSlide}>
                <img src={imageUrl} alt="Product slide image." className={s.sliderImage} />
              </div>
            ))}

            {product.videos.map((video, i) => (
              <div key={i} className={`${s.sliderSlide} ${s.sliderSlideVideo}`}>
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
            onClick={() => sliderRef.current?.slickPrev()}
            className={`${s.sliderBtn} ${s.sliderBtnPrev} ${cs.arrow}`}
            aria-label="Choose previous slide.">
            <Arrow aria-hidden="true" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className={`${s.sliderBtn} ${s.sliderBtnNext} ${cs.arrow}`}
            aria-label="Choose next slide.">
            <Arrow aria-hidden="true" />
          </button>
        </div>

        {/* <!-- Minislider --> */}
        <div className={s.miniSliderWrapper}>
          <Slider
            ref={miniSliderRef}
            // asNavFor={sliderRef.current}
            className={s.miniSlider}
            {...settings2}>
            {product.imageUrls.map((imageUrl, i) => (
              <div
                key={i}
                onClick={() => onSlideMiniClick(i)}
                className={`${s.miniSliderSlide} ${
                  activeSlide === i ? s.miniSliderSlideActive : ""
                }`}>
                <div className={s.miniSliderImageWrapper}>
                  <img
                    src={imageUrl}
                    alt="Product mini-slide image."
                    className={s.miniSliderImage}
                  />
                </div>
              </div>
            ))}

            {product.videos.map((video, i) => (
              <div
                key={i}
                onClick={() => onSlideMiniClick(product.imageUrls.length + i)}
                className={`${s.miniSliderSlide} ${s.miniSliderSlideVideo} ${
                  activeSlide === product.imageUrls.length + i ? s.miniSliderSlideVideoActive : ""
                }`}>
                <div className={s.miniSliderImageWrapper}>
                  <img
                    src={video.thumbnail}
                    alt="Product slide video thumbnail."
                    className={s.miniSliderImage}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* <!------------ Right ----------> */}
      <div className={s.right}>
        <div className={s.details}>
          {/* <!-- Prices --> */}
          <div className={`${s.prices} ${pr.prices}`}>
            <span
              className={`${pr.price} ${pr.priceLg} ${product.oldPrice > 0 ? pr.priceRed : ""}`}>
              {`$${product.price.toFixed(2)}`}
            </span>

            <span className={`${pr.oldPrice} ${pr.oldPriceLg}`}>{`$${product.oldPrice.toFixed(
              2,
            )}`}</span>
          </div>

          {/* <!-- Discount --> */}
          {product.discount > 0 && (
            <div className={`${s.discount} ${pr.discount}`}>{`-${product.discount}%`}</div>
          )}

          {/* <!-- Feedback --> */}
          <div className={s.feedback}>
            {/* <!-- Rating --> */}
            {product.rating > 0 && (
              <div className={`${s.rating} ${pr.rating}`}>
                {[...Array(5)].map((_, i) => (
                  <Star2
                    key={i}
                    className={`${pr.ratingIcon} ${product.rating > i ? pr.ratingIconActive : ""}`}
                  />
                ))}
              </div>
            )}

            {/* <!-- Reviews --> */}
            <span className={s.reviews}>{formatReviews(product.reviews.length)}</span>
          </div>
        </div>

        {/* <!-- Color --> */}
        <div className={s.color}>
          <label className={s.colorLabel}>Color</label>

          <ul className={s.colorList}>
            {product.color.length > 0 &&
              product.color.map((color, i) => (
                <li key={i} className={s.colorItem}>
                  <button
                    // onClick={() => onColorBtnClick(i)}
                    data-color={color}
                    className={`${cs.colorBtn} ${cs.colorBtnActive}`}
                    aria-label={`Choose ${color} color`}></button>
                </li>
              ))}

            <li className={`${s.colorItem} ${s.colorItemName}`}>Pink</li>
          </ul>
        </div>

        {/* <!-- Size --> */}
        <div className={s.sizes}>
          {/* <!-- Size-select & label --> */}
          <div className={s.sizesWrapper}>
            <label className={s.sizesLabel}>Size</label>

            {/* <!-- Size select --> */}
            <div className={`${cs.inputWrapper} ${cs[isValidSelect[0]]}`}>
              <div
                className={`${cs.select} ${cs.input}`}
                role="listbox"
                tabIndex={0}
                onKeyDown={onSelectKeyDown}
                onClick={onSelectClick}>
                <div
                  className={`${cs.selectHead} ${activeOption === 0 ? "" : cs.selectHeadActive}`}>
                  <span className={cs.selectSelected}>{formatSize(selectSizes[activeOption])}</span>
                  {/* <input
                    type="hidden"
                    className=""
                    name=""
                    value={selectSizes[activeOption]}
                  /> */}
                  <AngleDown aria-hidden="true" />
                </div>
                <div
                  className={`${cs.selectWrapper} ${cs.input} ${
                    isOpenSelect ? cs.selectWrapperActive : ""
                  }`}>
                  <ul className={cs.selectList}>
                    {selectSizes.length > 1 &&
                      selectSizes.map((size, i) => (
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
                          {formatSize(size)}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Size chart button --> */}
          <button className={s.sizesBtn} aria-label="Open size chart.">
            <Hanger aria-hidden="true" />
            Size chart
          </button>
        </div>

        {/* <!-- CTA --> */}
        <div className={s.cta}>
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
              <Cart aria-hidden="true" />
            </button>
          </div>

          {/* <!-- Favorite --> */}
          <FavoriteBtn index={product.id} />
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
