import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../util/customHooks";
import { getCartFromLS } from "../../util/customFunctions";

import { ProductType } from "../../redux/backendApi/types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectProductBtn } from "../../redux/productBtnSlice/selectors";
import { addToCart } from "../../redux/cartSlice/slice";
import { openCart } from "../../redux/headerCartBtnSlice/slice";
import { setIsResetAllBtn } from "../../redux/productBtnSlice/slice";

import { FavoriteBtn } from "../FavoriteBtn";

import s from "./Product.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { AngleDown, Cart, Star2 } from "../../iconComponents";
import { selectHeaderCartBtn } from "../../redux/headerCartBtnSlice/selectors";

const productMB = 80; // для box-shadow в слайдере

type ProductProps = {
  obj: ProductType;
  theme?: string;
  mode?: string;
};

export const Product: React.FC<ProductProps> = ({ obj, theme, mode }) => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectHeaderCartBtn);

  const { isMQ1024 } = useMediaQuery();
  const prodRef = React.useRef<HTMLElement>(null);
  const botRef = React.useRef<HTMLDivElement>(null); // (для slider)

  const [activeImg, setActiveImg] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeColor, setActiveColor] = React.useState(0);
  const [isActiveBtn, setIsActiveBtn] = React.useState(false);

  React.useEffect(() => {
    if (!isCartOpen) return;
    setIsActiveBtn(false);
  }, [isCartOpen]);

  const onAddToCartClick = () => {
    let isExist;

    if (isActiveBtn) {
      dispatch(openCart());
      return;
    }

    const productHash = obj.title + obj.colors[activeColor] + obj.sizes[activeSize];

    const cartProducts = getCartFromLS();

    for (let product of cartProducts) {
      const cartProductHash = product.obj.title + product.color + product.size;

      if (cartProductHash === productHash) {
        isExist = true;
        break;
      }
    }

    setIsActiveBtn(true);

    if (isExist) return;

    const productData = {
      count: "1",
      hash: productHash,
      color: obj.colors[activeColor],
      size: obj.sizes[activeSize],
      obj,
    };

    cartProducts.push(productData);
    localStorage.setItem("cart", JSON.stringify(cartProducts));
    dispatch(addToCart(productData));
  };

  const onTestEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (!isMQ1024) return;

    const list = e.currentTarget.closest(".slick-list") as HTMLDivElement;
    const listMarginBottom = window.getComputedStyle(list).marginBottom;

    if (botRef.current) {
      botRef.current.setAttribute("data-visible", "");
      const bottomHeight = botRef.current?.getBoundingClientRect().height;
      list.style.marginBottom = parseFloat(listMarginBottom) - productMB - bottomHeight + "px";
    }
  };

  const onTestLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (!isMQ1024) return;

    const list = e.currentTarget.closest(".slick-list") as HTMLDivElement;
    list.style.marginBottom = "";
    botRef.current?.removeAttribute("data-visible");
  };

  const onColorBtnClick = (index: number) => {
    setActiveColor(index);
    setIsActiveBtn(false);
  };

  const onSizeBtnClick = (index: number) => {
    setActiveSize(index);
    setIsActiveBtn(false);
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

  return (
    <article ref={prodRef} onMouseEnter={onTestEnter} onMouseLeave={onTestLeave} className={s.root}>
      <div className={s.look}>
        <div className={s.microslider}>
          <Link to={obj.linkUrl} draggable="false">
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
        {obj.rating > 0 && (
          <div className={s.rating}>
            {[...Array(5)].map((_, i) => (
              <Star2
                key={i}
                className={`${s.ratingIcon} ${obj.rating > i ? s.ratingIconActive : ""}`}
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
            }`}>{`$${obj.price.toFixed(2)}`}</span>

          {obj.oldPrice > 0 && (
            <span
              className={`${s.oldPrice} ${
                mode === "lg" ? s.oldPriceLg : ""
              }`}>{`$${obj.oldPrice.toFixed(2)}`}</span>
          )}
        </div>

        <div ref={botRef} className={s.bottom}>
          <div className={s.details}>
            <ul className={`${cs.ulReset} ${s.sizes}`}>
              {obj.sizes.map((size, i) => (
                <li key={i} className={s.sizesItem}>
                  <button
                    onClick={() => onSizeBtnClick(i)}
                    className={`${s.sizesBtn} ${activeSize === i ? s.sizesBtnActive : ""} `}>
                    {size}
                  </button>
                </li>
              ))}
            </ul>

            <ul className={`${s.colors} ${cs.ulReset}`}>
              {obj.colors.map((color, i) => (
                <li key={i} className={s.colorsItem}>
                  <button
                    onClick={() => onColorBtnClick(i)}
                    data-color={color}
                    className={`${s.colorsBtn} ${activeColor === i ? s.colorsBtnActive : ""}`}
                    aria-label={`Choose ${color} color`}></button>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onAddToCartClick}
            className={`${s.buttonCart} ${cs.btn} ${cs.btnMid} ${
              isActiveBtn ? cs.btnOutline : ""
            } ${isActiveBtn ? s.buttonCartActive : ""}`}>
            <Cart aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};
