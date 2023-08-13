import React from "react";
import { useImmer } from "use-immer";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { ProductType } from "../../../redux/backendApi/types";
import { selectSizeChart } from "../../../redux/sizeChartBtnSlice/selectors";
import { showHideChart } from "../../../redux/sizeChartBtnSlice/slice";
import { selectModalImage } from "../../../redux/modalImageBtnSlice/selectors";
import { setIsActiveMI } from "../../../redux/modalImageBtnSlice/slice";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FavoriteBtn, ModalChart, ModalImage, ProductCartBtn } from "../../../components";
import { useValidateForm } from "../../../util/customHooks";
import { setOverflowHidden } from "../../../util/customFunctions";

import s from "./GeneralInfo.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import pr from "../../../components/Product/Product.module.scss";
import {
  AngleDown,
  Arrow,
  Facebook,
  Hanger,
  Pinterest,
  Star2,
  Twitter,
} from "../../../iconComponents";
import { current } from "@reduxjs/toolkit";

type GeneralInfotProps = {
  product: ProductType;
};

export const GeneralInfo: React.FC<GeneralInfotProps> = ({ product }) => {
  const mockSlidesCount = 5 - product.videos.length - product.imageUrls.length;

  const dispatch = useAppDispatch();
  const isShowChart = useAppSelector(selectSizeChart);

  const isActiveMI = useAppSelector(selectModalImage);

  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>();
  const miniSliderRef = React.useRef<Slider>();
  const macroSliderRef = React.useRef<Slider>();
  const [activeSlide, setActiveSlide] = React.useState(0);

  const [isOpenAcc, setIsOpenAcc] = useImmer([false, false]);

  const selectRef = React.useRef<HTMLDivElement>(null);
  const { isValidSelect, validateSelect } = useValidateForm();
  const [isOpenSelect, setIsOpenSelect] = React.useState(false);
  const [activeOption, setActiveOption] = React.useState(0);

  const [count, setCount] = React.useState("1");
  const [activeColor, setActiveColor] = React.useState(0);
  const [isActiveBtn, setIsActiveBtn] = React.useState(false);

  const selectSizes = ["Please select", ...product.size];

  // **
  const handleClick = (event: MouseEvent) => {
    if (!clickableRef.current) {
      event.stopPropagation();
      event.preventDefault();
    }
    clickableRef.current = true;
  };

  const swipeEvent = () => {
    // фикс(слайдер воспринимает свайп, как клик)
    if (sliderRef?.current?.innerSlider?.list) {
      sliderRef.current.innerSlider.list.onclick = handleClick;
      clickableRef.current = false;
    }
  };

  const onSlideClick = () => {
    dispatch(setIsActiveMI());
    setOverflowHidden(!isActiveMI);
  };

  // **
  const onSizeChartBtnClick = () => {
    dispatch(showHideChart());
    setOverflowHidden(!isShowChart);
  };

  const onColorBtnClick = (idx: number) => {
    setActiveColor(idx);
    setIsActiveBtn(false);
  };

  // **
  const onAccordionClick = (e: React.MouseEvent<HTMLButtonElement>, idx: number) => {
    setIsOpenAcc((draft) => {
      draft[idx] = !draft[idx];
      return draft;
    });

    const bottom = e.currentTarget.nextElementSibling;
    if (bottom) {
      const bottomSH = bottom.scrollHeight;

      if (isOpenAcc[idx]) {
        bottom.setAttribute("style", "");
      } else {
        bottom.setAttribute("style", `height: ${bottomSH}px`);
      }
    }
  };

  // **
  const onCountBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setCount("1");
      setIsActiveBtn(false);
    }
  };

  const onCountDownClick = () => {
    if (+count <= 1) return;
    setCount((n) => (+n - 1).toString());
    setIsActiveBtn(false);
  };

  const onCountUpClick = () => {
    if (+count >= 9999) return;
    setCount((n) => (+n + 1).toString());
    setIsActiveBtn(false);
  };

  const onCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value.replace(/\D|^0$/gi, "");
    setCount(value);
    setIsActiveBtn(false);
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
    setIsActiveBtn(false);
  };

  const onSelectOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, option: number) => {
    if (e.key === "Enter") {
      setActiveOption(option);
      validateSelect(e.currentTarget, 0);
      setIsActiveBtn(false);

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

  const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.substring(1);
  };

  // **
  const onAfterChange = (idx: number) => {
    setActiveSlide(idx);
  };

  const onAfterChangeMini = (idx: number) => {
    setActiveSlide(idx);
  };

  const onSlideMiniClick = (idx: number) => {
    sliderRef.current?.slickGoTo(idx);
    macroSliderRef?.current?.slickGoTo(idx);
    setActiveSlide(idx);
  };

  let settings = {
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

  let settingsMini = {
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
            asNavFor={macroSliderRef.current}
            swipeEvent={swipeEvent}
            className={s.slider}
            {...settings}>
            {product.imageUrls.map((imageUrl, i) => (
              <div key={i} onClick={onSlideClick} className={s.sliderSlide}>
                <img src={imageUrl} alt="Product slide image." className={s.sliderImage} />
              </div>
            ))}

            {product.videos.map((video, i) => (
              <div
                key={i}
                onClick={onSlideClick}
                className={`${s.sliderSlide} ${s.sliderSlideVideo}`}>
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
            {...settingsMini}>
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

            {product.videos.length > 0 &&
              product.videos.map((video, i) => (
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

            {mockSlidesCount > 0 && [...Array(mockSlidesCount)].map((_, i) => <div key={i}></div>)}
          </Slider>
        </div>
      </div>

      {/* <!--- Right ---> */}
      <div className={s.right}>
        <div className={s.details}>
          {/* <!-- Prices --> */}
          <div className={`${s.prices} ${pr.prices}`}>
            <span
              className={`${pr.price} ${pr.priceLg} ${product.oldPrice > 0 ? pr.priceRed : ""}`}>
              {`$${product.price.toFixed(2)}`}
            </span>

            {product.oldPrice > 0 && (
              <span className={`${pr.oldPrice} ${pr.oldPriceLg}`}>{`$${product.oldPrice.toFixed(
                2,
              )}`}</span>
            )}
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
        {product.color.length > 0 && (
          <div className={s.color}>
            <label className={s.colorLabel}>Color</label>

            <ul className={s.colorList}>
              {product.color.length > 0 &&
                product.color.map((color, i) => (
                  <li key={i} className={s.colorItem}>
                    <button
                      onClick={() => onColorBtnClick(i)}
                      data-color={color}
                      className={`${cs.colorBtn} ${activeColor === i ? cs.colorBtnActive : ""}`}
                      aria-label={`Choose ${color} color`}></button>
                  </li>
                ))}

              <li className={`${s.colorItem} ${s.colorItemName}`}>
                {capitalize(product.color[activeColor])}
              </li>
            </ul>
          </div>
        )}

        {/* <!-- Size --> */}
        {product.size.length > 0 && (
          <div className={s.sizes}>
            {/* <!-- Size-select & label --> */}
            <div className={s.sizesWrapper}>
              <label className={s.sizesLabel}>Size</label>

              {/* <!-- Size select --> */}
              <div className={`${cs.inputWrapper} ${cs[isValidSelect[0]]}`}>
                <div
                  ref={selectRef}
                  className={`${cs.select} ${cs.input}`}
                  role="listbox"
                  tabIndex={0}
                  onKeyDown={onSelectKeyDown}
                  onClick={onSelectClick}>
                  <div
                    className={`${cs.selectHead} ${activeOption === 0 ? "" : cs.selectHeadActive}`}>
                    <span className={cs.selectSelected}>
                      {formatSize(selectSizes[activeOption])}
                    </span>
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
            <button
              onClick={onSizeChartBtnClick}
              className={s.sizesBtn}
              aria-label="Open size chart.">
              <Hanger aria-hidden="true" />
              Size chart
            </button>

            <ModalChart />
          </div>
        )}

        {/* <!-- CTA --> */}
        <div className={s.cta}>
          {/* <!-- Input-number --> */}
          <div className={`${s.inputNum} ${cs.inputNum}`}>
            <input
              onBlur={onCountBlur}
              onChange={onCountChange}
              type="text"
              className={`${cs.inputNumInput} ${cs.input}`}
              value={count}
              aria-label="Write the number of the product."
              maxLength={4}
            />

            <div className={`${cs.inputNumBtns} ${cs.inputNumBtnsLg}`}>
              <button
                type="button"
                onClick={onCountUpClick}
                className={`${cs.inputNumBtn} ${cs.inputNumBtnLg}`}
                aria-label="Increment number of the product."></button>

              <button
                type="button"
                onClick={onCountDownClick}
                className={`${cs.inputNumBtn} ${cs.inputNumBtnLg}`}
                aria-label="Decrement number of the product."></button>
            </div>
          </div>

          {/* <!-- Button-cart --> */}
          <div className={s.btnCartWrapper}>
            <ProductCartBtn
              obj={product}
              activeColor={product.color.length > 0 ? activeColor : undefined}
              activeSize={product.size.length > 0 ? activeOption - 1 : undefined}
              count={count}
              isActiveBtn={isActiveBtn}
              setIsActiveBtn={setIsActiveBtn}
              selectRef={selectRef}
            />
          </div>

          {/* <!-- Favorite --> */}
          <FavoriteBtn
            index={product.id}
            mode="rectangle"
            style={`${cs.btn} ${cs.btnMid} ${cs.btnOutline}`}
          />
        </div>

        {/* <!-- Accordion #1 --> */}
        <div className={s.accordion}>
          <button
            onClick={(e) => onAccordionClick(e, 0)}
            className={`${s.accordionTop} ${isOpenAcc[0] ? s.accordionTopShow : ""}`}
            aria-expanded="true"
            aria-controls="general-accordion-0">
            <p className={s.accordionTitle}>Delivery</p>

            <span className={cs.toggle} aria-hidden="true"></span>
          </button>

          <div className={s.accordionBottom} id="general-accordion-0">
            <p className={s.accordionDescr}>
              Free standard shipping on orders <b className={s.accordionDescrBold}>over $35</b>{" "}
              before tax, plus free returns.
            </p>

            <table className={s.accordionTable}>
              <thead>
                <tr className={s.accordionTableTop}>
                  <th className={s.accordionTableTitle}>Type</th>
                  <th className={s.accordionTableTitle}>How long</th>
                  <th className={s.accordionTableTitle}>How much</th>
                </tr>
              </thead>

              <tbody>
                <tr className={s.accordionTableRow}>
                  <td className={s.accordionTableCell}>Standard delivery</td>
                  <td className={s.accordionTableCell}>1-4 business days</td>
                  <td className={s.accordionTableCell}>$4.50</td>
                </tr>

                <tr className={s.accordionTableRow}>
                  <td className={s.accordionTableCell}>Express delivery</td>
                  <td className={s.accordionTableCell}>1 business day</td>
                  <td className={s.accordionTableCell}>$10.00</td>
                </tr>

                <tr className={s.accordionTableRow}>
                  <td className={s.accordionTableCell}>Pick up in store</td>
                  <td className={s.accordionTableCell}>1-3 business days</td>
                  <td className={s.accordionTableCell}>Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <!-- Accordion #2 --> */}
        <div className={s.accordion}>
          <button
            onClick={(e) => onAccordionClick(e, 1)}
            className={`${s.accordionTop} ${isOpenAcc[1] ? s.accordionTopShow : ""}`}
            aria-expanded="true"
            aria-controls="general-accordion-1">
            <p className={s.accordionTitle}>Return</p>

            <span className={cs.toggle} aria-hidden="true"></span>
          </button>

          <div className={s.accordionBottom} id="general-accordion-1">
            <p className={`${s.accordionDescr} ${s.accordionDescrMargin}`}>
              You have <b className={s.accordionDescrBold}>60 days</b> to return the item(s) using
              any of the following methods:
            </p>

            <ul className={s.accordionList}>
              <li className={s.accordionItem}>Free store return</li>
              <li className={s.accordionItem}>Free returns via USPS Dropoff Service</li>
            </ul>
          </div>
        </div>

        {/* <!-- Social --> */}
        <div className={s.share}>
          <p className={s.shareTitle}>Share:</p>

          <ul className={`${s.social} ${cs.social} ${cs.ulReset}`}>
            <li className={`${cs.socialItem} ${cs.socialItemLg}`}>
              <a
                href="#"
                target="_blank"
                className={`${cs.socialLink} ${cs.socialLinkTrans}`}
                aria-label="Share with facebook.">
                <Facebook aria-hidden="true" />
              </a>
            </li>

            <li className={`${cs.socialItem} ${cs.socialItemLg}`}>
              <a
                href="#"
                target="_blank"
                className={`${cs.socialLink} ${cs.socialLinkTrans}`}
                aria-label="Share with twitter.">
                <Twitter aria-hidden="true" />
              </a>
            </li>

            <li className={`${cs.socialItem} ${cs.socialItemLg}`}>
              <a
                href="#"
                target="_blank"
                className={`${cs.socialLink} ${cs.socialLinkTrans}`}
                aria-label="Share with pinterest.">
                <Pinterest aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Payment --> */}
        <div className={s.payment}>
          <div
            className={`${s.paymentBox} ${s.paymentBoxVisa}`}
            aria-label="Go to visa`s website."></div>
          <div
            className={`${s.paymentBox} ${s.paymentBoxMastercard}`}
            aria-label="Go to mastercard`s website."></div>
          <div
            className={`${s.paymentBox} ${s.paymentBoxPaypal}`}
            aria-label="Go to paypal`s website."></div>
        </div>
      </div>

      <ModalImage macroSliderRef={macroSliderRef} />
    </div>
  );
};