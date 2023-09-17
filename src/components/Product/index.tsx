import React from "react";
import { Link } from "react-router-dom";
import { useConvertPrice, useCurrencySymbol, useMediaQuery } from "../../util/customHooks";
import { getCartFromLS, getStarRating } from "../../util/customFunctions";

import { ProductType } from "../../redux/backendApi/types";
import { CartProductType } from "../../redux/cartSlice/types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addToCart, setCountCart } from "../../redux/cartSlice/slice";
import { openCart } from "../../redux/headerCartBtnSlice/slice";
import { selectHeaderCartBtn } from "../../redux/headerCartBtnSlice/selectors";
import { selectSingleProduct } from "../../redux/singleProductSlice/selectors";
import { setSpColor, setSpSize } from "../../redux/singleProductSlice/slice";

import { FavoriteBtn } from "../FavoriteBtn";

import s from "./Product.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { AngleDown, Cart, Star2 } from "../../iconComponents";

const productMB = 80; // для box-shadow в слайдере

type ProductProps = {
  obj: ProductType;
  theme?: string;
  mode?: string;
  isSlider?: boolean;
  isPermanentHover?: boolean;
  isCommon?: boolean;
  selectRef?: React.RefObject<HTMLDivElement>;
};

type ProductCartBtnProps = {
  obj: ProductType;
  count?: string;
  activeColor: number | undefined;
  activeSize: number | undefined;
  isActiveBtn: boolean;
  setIsActiveBtn: (b: boolean) => void;
  selectRef?: React.RefObject<HTMLDivElement>;
};

export const ProductCartBtn: React.FC<ProductCartBtnProps> = ({
  obj,
  count = "1",
  activeColor,
  activeSize,
  isActiveBtn,
  setIsActiveBtn,
  selectRef,
}) => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectHeaderCartBtn);

  React.useEffect(() => {
    if (!isCartOpen) return;
    setIsActiveBtn(false);
  }, [isCartOpen]);

  const onAddToCartClick = () => {
    if (activeSize && activeSize < 0 && selectRef?.current) {
      const firstLi = selectRef?.current?.lastElementChild?.firstElementChild?.firstElementChild;
      (firstLi as HTMLLIElement)?.click(); // валидировать селект при первом клике на productCartBtn, если не выбран option

      return; // отрицательный размер = выбран плейсхолдер селекта = игнорировать добавление в корзину
    }

    let isExist;

    if (isActiveBtn) {
      dispatch(openCart());
      return;
    }

    let productHash = obj.title;
    if (activeColor !== undefined) {
      productHash += obj.color[activeColor];
    }
    if (activeSize !== undefined) {
      productHash += obj.size[activeSize];
    }

    let cartProducts = getCartFromLS() as CartProductType[];
    for (let product of cartProducts) {
      let cartProductHash = product.obj.title;

      if (product.color !== undefined) {
        cartProductHash += product.color;
      }
      if (product.size !== undefined) {
        cartProductHash += product.size;
      }

      if (cartProductHash === productHash && product.count === count) {
        isExist = true;
        break;
      }
    }

    setIsActiveBtn(true);

    if (isExist) return;

    const productData = {
      count: count,
      hash: productHash,
      obj,
    } as CartProductType;

    if (activeColor !== undefined) {
      productData.color = obj.color[activeColor];
    }
    if (activeSize !== undefined) {
      productData.size = obj.size[activeSize];
    }

    let filteredCartProducts = cartProducts.filter((cartProduct) => {
      let cartProductHash = cartProduct.obj.title;
      if (cartProduct.color !== undefined) {
        cartProductHash += cartProduct.color;
      }
      if (cartProduct.size !== undefined) {
        cartProductHash += cartProduct.size;
      }

      if (productHash === cartProductHash) {
        return false;
      }

      return true;
    });

    if (cartProducts.length === filteredCartProducts.length) {
      dispatch(addToCart(productData));
    } else {
      dispatch(setCountCart({ count: count, hash: productHash }));
    }
  };

  return (
    <button
      onClick={onAddToCartClick}
      className={`${s.buttonCart} ${cs.btn} ${cs.btnMid} ${isActiveBtn ? cs.btnOutline : ""} ${
        isActiveBtn ? s.buttonCartActive : ""
      }`}>
      <Cart aria-hidden="true" />
    </button>
  );
};

export const Product: React.FC<ProductProps> = ({
  obj,
  theme,
  mode,
  isSlider = true,
  isPermanentHover = false,
  isCommon = false,
  selectRef,
}) => {
  // const isKeyMode = React.useRef(false);
  const isKeyPressedLast = React.useRef(true);

  const dispatch = useAppDispatch();
  const { spColor, spSize } = useAppSelector(selectSingleProduct); // для singleProductPage страницы хранить цвет/размер в редаксе

  const { isMQ1024 } = useMediaQuery();
  const prodRef = React.useRef<HTMLElement>(null);
  const botRef = React.useRef<HTMLDivElement>(null); // (для slider)

  const [activeImg, setActiveImg] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeColor, setActiveColor] = React.useState(0);
  const [isActiveBtn, setIsActiveBtn] = React.useState(false);

  const [starCount] = getStarRating(obj.rating);

  const currencySymbol = useCurrencySymbol();
  const price = useConvertPrice(obj.price);
  const oldPrice = useConvertPrice(obj.oldPrice);

  // **
  const removeKeymode = (product: EventTarget & HTMLElement) => {
    const keyModeSlide = product.closest(".slick-list")?.querySelector("[data-keymode]");
    keyModeSlide?.removeAttribute("data-keymode");
    const keyModeElement = keyModeSlide?.querySelector(":focus") as HTMLElement;
    keyModeElement?.blur();
  };

  const onProductKeyDown = () => {
    isKeyPressedLast.current = true;
  };

  const onProductDown = () => {
    isKeyPressedLast.current = false;
  };

  const onProductEnter = (e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
    if (!isMQ1024 || !isSlider) return;

    // ======== for keyboard
    if (e.type === "focus") {
      if (!isKeyPressedLast.current) return;

      // isKeyMode.current = true;
      e.currentTarget.setAttribute("data-keymode", "");

      const product = e.currentTarget;
      const isActiveSlide = product.closest(".slick-active");

      if (!isActiveSlide) {
        const list = product.closest(".slick-list");
        const currentSlide = list?.querySelector(".slick-current") as HTMLDivElement;

        currentSlide?.focus();
        return;
      }

      const prevProduct = (e.relatedTarget as HTMLElement)?.closest("article");
      const currentProduct = (e.target as HTMLElement)?.closest("article");

      if (prevProduct === currentProduct) return;
    }
    // =================

    const isKeyMode = e.currentTarget.closest(".slick-list")?.querySelector("[data-keymode]");

    // const keyModeElement = e.currentTarget.closest(".slick-list")?.querySelector("[data-keymode]");
    // const keyModeValue = keyModeElement?.getAttribute("data-keymode");
    // if (keyModeValue && keyModeValue === "true") {

    // }

    if (e.type === "mouseenter" && isKeyMode) {
      removeKeymode(e.currentTarget);
      return;
    }

    e.currentTarget.style.marginBottom = productMB + "px"; // For box-shadow
    // const isListMargin = e.currentTarget.closest(".slick-list")?.querySelector("[data-visible]");
    // if (e.type === "focus" && isListMargin) {
    //   return;
    // }

    const list = e.currentTarget.closest(".slick-list") as HTMLDivElement;
    const listMarginBottom = window.getComputedStyle(list).marginBottom;

    if (botRef.current) {
      botRef.current.setAttribute("data-visible", "");
      const bottomHeight = botRef.current?.getBoundingClientRect().height;
      list.style.marginBottom = parseFloat(listMarginBottom) - productMB - bottomHeight + "px";
    }
  };

  const onProductLeave = (e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
    if (!isMQ1024 || !isSlider) return;

    // ====== for keyboard
    if (e.type === "blur") {
      e.currentTarget.removeAttribute("data-keymode");

      if (!isKeyPressedLast.current) {
        isKeyPressedLast.current = true;
        return;
      }

      const prevProduct = (e.relatedTarget as HTMLElement)?.closest("article");
      const currentProduct = (e.target as HTMLElement)?.closest("article");
      if (prevProduct === currentProduct) return;
    }
    // =================
    e.currentTarget.style.marginBottom = ""; // For box-shadow

    const list = e.currentTarget.closest(".slick-list") as HTMLDivElement;
    list.style.marginBottom = "";
    botRef.current?.removeAttribute("data-visible");
  };

  // **
  const onColorBtnClick = (index: number) => {
    setIsActiveBtn(false);

    if (isCommon) {
      dispatch(setSpColor(index));
    } else {
      setActiveColor(index);
    }
  };

  const onSizeBtnClick = (index: number) => {
    setIsActiveBtn(false);

    if (isCommon) {
      dispatch(setSpSize(index + 1));

      const lastLiChild = selectRef?.current?.querySelector(`ul li:nth-child(${index + 2})`);
      (lastLiChild as HTMLLIElement)?.click();
    } else {
      setActiveSize(index);
    }
  };

  const onPrevClick = () => {
    if (activeImg === 0) {
      setActiveImg(obj.imageUrls.length - 1);
      return;
    }
    setActiveImg((n) => n - 1);
  };

  const onNextClick = () => {
    if (activeImg === obj.imageUrls.length - 1) {
      setActiveImg(0);
      return;
    }
    setActiveImg((n) => n + 1);
  };

  // **
  const getCommonColor = () => {
    return obj.color.length > 0 ? spColor : undefined;
  };

  const getCommonSize = () => {
    return obj.size.length > 0 ? spSize - 1 : undefined;
  };

  const getColor = () => {
    return obj.color.length > 0 ? activeColor : undefined;
  };

  const getSize = () => {
    return obj.size.length > 0 ? activeSize : undefined;
  };

  return (
    <article
      ref={prodRef}
      onMouseEnter={onProductEnter}
      onMouseLeave={onProductLeave}
      onFocus={onProductEnter}
      onBlur={onProductLeave}
      onMouseDown={onProductDown}
      onKeyDown={onProductKeyDown}
      className={`${s.root} ${isSlider ? "" : s.rootNoJsHover}`}>
      <div className={s.look}>
        <div className={s.microslider}>
          <Link
            to={`/${obj.object[0]}/${obj.category[1]}/${obj.id}`}
            relative="path"
            draggable="false">
            <img
              src={obj.imageUrls[activeImg]}
              alt="Product image."
              className={s.microsliderImage}
            />
          </Link>

          <div className={s.microsliderBtns}>
            <button
              onClick={onPrevClick}
              className={`${s.microsliderBtn} ${s.microsliderBtnLeft}`}
              aria-label="Go to the previous image of the product.">
              <AngleDown aria-hidden="true" />
            </button>

            <button
              onClick={onNextClick}
              className={`${s.microsliderBtn} ${s.microsliderBtnRight}`}
              aria-label="Go to the next image of the product.">
              <AngleDown aria-hidden="true" />
            </button>
          </div>
        </div>

        {starCount > 0 && (
          <div className={s.rating}>
            {[...Array(5)].map((_, i) => (
              <Star2
                key={i}
                className={`${s.ratingIcon} ${starCount > i ? s.ratingIconActive : ""}`}
              />
            ))}
          </div>
        )}

        <FavoriteBtn index={obj.id} />

        {obj.discount > 0 && <div className={s.discount}>{`-${obj.discount}%`}</div>}
      </div>

      <div className={`${s.info} ${theme ? "" : s.infoWhite}`}>
        <Link to={obj.linkUrl} className={s.name}>
          {obj.title}
        </Link>

        <div className={s.prices}>
          <span
            className={`${s.price} ${mode === "lg" ? s.priceLg : ""} ${
              obj.oldPrice > 0 ? s.priceRed : ""
            }`}>
            {currencySymbol + price}
          </span>

          {obj.oldPrice > 0 && (
            <span className={`${s.oldPrice} ${mode === "lg" ? s.oldPriceLg : ""}`}>
              {currencySymbol + oldPrice}
            </span>
          )}
        </div>

        <div ref={botRef} className={`${s.bottom} ${isPermanentHover ? s.bottomPermanent : ""}`}>
          <div className={s.details}>
            <ul className={`${cs.ulReset} ${s.sizes}`}>
              {obj.size.length > 0 &&
                obj.size.map((size, i) => (
                  <li key={i} className={s.sizesItem}>
                    <button
                      onClick={() => onSizeBtnClick(i)}
                      className={`${s.sizesBtn} ${
                        ((isCommon && spSize - 1) || activeSize) === i ? s.sizesBtnActive : ""
                      }`}>
                      {size}
                    </button>
                  </li>
                ))}
            </ul>

            <ul className={`${s.colors} ${cs.ulReset}`}>
              {obj.color.length > 0 &&
                obj.color.map((color, i) => (
                  <li key={i} className={s.colorsItem}>
                    <button
                      onClick={() => onColorBtnClick(i)}
                      data-color={color}
                      className={`${cs.colorBtn} ${
                        ((isCommon && spColor) || activeColor) === i ? cs.colorBtnActive : ""
                      }`}
                      aria-label={`Choose ${color} color`}></button>
                  </li>
                ))}
            </ul>
          </div>

          <ProductCartBtn
            obj={obj}
            activeColor={isCommon ? getCommonColor() : getColor()}
            activeSize={isCommon ? getCommonSize() : getSize()}
            isActiveBtn={isActiveBtn}
            setIsActiveBtn={setIsActiveBtn}
          />
        </div>
      </div>
    </article>
  );
};
