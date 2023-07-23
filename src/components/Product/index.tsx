import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../util/customHooks";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addFavorite, removeFavorite } from "../../redux/favoriteSlice/slice";
import { selectFavorites } from "../../redux/favoriteSlice/selectors";

import s from "./Product.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { AngleDown, Cart, HeartFull, Star2 } from "../../iconComponents";

const productMB = 80; // для box-shadow в слайдере

type ProductProps = {
  obj: {
    id: number;
    title: string;
    linkUrl: string;
    imageUrls: string[];
    rating: number;
    price: number;
    oldPrice: number;
    discount: number;
    sizes: string[];
    colors: string[];
    category: string;
  };
  color?: string;
  mode?: string;
};

export const Product: React.FC<ProductProps> = ({ obj, color, mode }) => {
  const { isMQ1024 } = useMediaQuery();
  const prodRef = React.useRef<HTMLElement>(null);
  const botRef = React.useRef<HTMLDivElement>(null); // (для slider)

  const [activeImg, setActiveImg] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeColor, setActiveColor] = React.useState(0);

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);

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
  };

  const onSizeBtnClick = (index: number) => {
    setActiveSize(index);
  };

  const onFavoriteClick = (id: number) => {
    if (favorites.includes(id)) {
      dispatch(removeFavorite(id));
      localStorage.setItem("favorite", JSON.stringify(favorites.filter((n) => n !== id)));
      return;
    }
    dispatch(addFavorite(id));
    localStorage.setItem("favorite", JSON.stringify([...favorites, id]));
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

        <button
          onClick={() => onFavoriteClick(obj.id)}
          className={`${s.favorite} ${favorites.includes(obj.id) ? s.favoriteActive : ""} `}
          data-visible
          aria-label="Add to favorite.">
          <HeartFull aria-hidden="true" />
        </button>

        {obj.discount > 0 && <div className={s.discount}>{`-${obj.discount}%`}</div>}
      </div>

      <div className={`${s.info} ${color ? "" : s.infoWhite}`}>
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

          <button className={`${s.buttonCart} ${cs.btn} ${cs.btnMid}`}>
            <Cart aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};
