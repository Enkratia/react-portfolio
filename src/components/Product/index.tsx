import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectFavorites } from "../../redux/favoriteSlice/selectors";
import { addFavorite, removeFavorite } from "../../redux/favoriteSlice/slice";

import s from "./Product.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { AngleDown, Cart, HeartFull, Star2 } from "../../iconComponents";

const product = {
  id: 0,
  imageUrls: [
    "https://i.ibb.co/5MxwzRk/product-cap.jpg",
    "https://i.ibb.co/Tmx7S06/81lzys2u4bhhqhnyz4ltltm488o1t2fd.jpg",
    "https://i.ibb.co/6gyk3Y7/102465105-C69-1.jpg",
  ],
  rating: 5,
};

export const Product: React.FC = () => {
  const [active, setActive] = React.useState(0);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);

  const onFavoriteClick = (id: number) => {
    if (favorites.includes(id)) {
      dispatch(removeFavorite(id));
      return;
    }
    dispatch(addFavorite(id));
  };

  const onPrevClick = () => {
    if (active === 0) {
      setActive(product.imageUrls.length - 1);
      return;
    }
    setActive((n) => n - 1);
  };

  const onNextClick = () => {
    if (active === product.imageUrls.length - 1) {
      setActive(0);
      return;
    }
    setActive((n) => n + 1);
  };

  return (
    <article className={s.product}>
      <div className={s.look}>
        <div className={s.microslider}>
          <Link to={"/"} draggable="false">
            <img
              src={product.imageUrls[active]}
              alt="Product image."
              className={s.microsliderImage}
            />
          </Link>

          <div className={s.microsliderBtns}>
            <button
              onClick={onPrevClick}
              className={`${s.microsliderBtn} ${s.microsliderBtnLeft} ${cs.btnReset}`}
              aria-label="Go to the previous image of the product.">
              <AngleDown aria-hidden="true" />
            </button>

            <button
              onClick={onNextClick}
              className={`${s.microsliderBtn} ${s.microsliderBtnRight} ${cs.btnReset}`}
              aria-label="Go to the next image of the product.">
              <AngleDown aria-hidden="true" />
            </button>
          </div>
        </div>

        {product.rating > 0 && (
          <div className={s.rating}>
            {[...Array(5)].map((_, i) => (
              <Star2
                className={`${s.ratingIcon} ${product.rating > i ? s.ratingIconActive : ""}`}
              />
            ))}
          </div>
        )}

        <button
          onClick={() => onFavoriteClick(product.id)}
          className={`${cs.btnReset} ${s.favorite} ${
            favorites.includes(product.id) ? s.favoriteActive : ""
          } `}
          aria-label="Add to favorite.">
          <HeartFull aria-hidden="true" />
        </button>
      </div>

      <div className={`${s.info} ${s.infoWhite}`}>
        <Link to={"/"} className={s.name}>
          Black and white sport cap
        </Link>

        <div className={s.prices}>
          <span className={s.price}>$18.15</span>
        </div>

        <div className={s.bottom}>
          <div className={s.details}>
            <ul className={`${s.sizes} ${cs.ulReset}`}>
              <li className={s.sizesItem}>
                <button className={`${s.sizesBtn} ${cs.btnReset}`}>36</button>
              </li>

              <li className={s.sizesItem}>
                <button className={`${s.sizesBtn} ${s.sizesBtnActive} ${cs.btnReset}`}>37</button>
              </li>

              <li className={s.sizesItem}>
                <button className={`${s.sizesBtn} ${cs.btnReset}`}>45</button>
              </li>

              <li className={s.sizesItem}>
                <button className={`${s.sizesBtn} ${cs.btnReset}`}>46</button>
              </li>

              <li className={s.sizesItem}>
                <button className={`${s.sizesBtn} ${cs.btnReset}`}>47</button>
              </li>

              <li className={s.sizesItem}>
                <button className={`${s.sizesBtn} ${cs.btnReset}`}>48</button>
              </li>
            </ul>

            <ul className={`${s.colors} ${cs.ulReset}`}>
              <li className={s.colorsItem}>
                <button
                  className={`${s.colorsBtn} ${s.colorsBtnActive} ${cs.btnReset}`}
                  data-color="Black"
                  aria-label="Choose black color."></button>
              </li>

              <li className={s.colorsItem}>
                <button
                  className={`${s.colorsBtn} ${cs.btnReset}`}
                  data-color="Brown"
                  aria-label="Choose brown color."></button>
              </li>

              <li className={s.colorsItem}>
                <button
                  className={`${s.colorsBtn} ${cs.btnReset}`}
                  data-color="Blue-gray"
                  aria-label="Choose blue-gray color."></button>
              </li>
            </ul>
          </div>

          <div className="product__button-wrapper">
            <button className={`${s.buttonCart} ${cs.btn} ${cs.btnMid} ${cs.btnReset}`}>
              <Cart aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

{
  /* <ul ref={srcsRef} className={s.microsliderSrcs} aria-hidden="true">
            <li className={s.microsliderSrc} data-index={0}>
              {image1}
            </li>
            <li className={s.microsliderSrc} data-index={1}>
              {image2}
            </li>
            <li className={s.microsliderSrc} data-index={2}>
              {image3}
            </li>
          </ul> */
}
