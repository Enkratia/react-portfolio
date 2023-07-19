import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/store";

import { selectFavorites } from "../../redux/favoriteSlice/selectors";
import { addFavorite, removeFavorite } from "../../redux/favoriteSlice/slice";

import s from "./Product.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { AngleDown, Cart, HeartFull, Star2 } from "../../iconComponents";

const productMB = 80; // для box-shadow в слайдере

// const products = [
//   {
//     id: 0,
//     title: "Black and white sport cap",
//     linkUrl: "/",
//     imageUrls: [
//       "https://i.ibb.co/5MxwzRk/product-cap.jpg",
//       "https://i.ibb.co/Tmx7S06/81lzys2u4bhhqhnyz4ltltm488o1t2fd.jpg",
//       "https://i.ibb.co/6gyk3Y7/102465105-C69-1.jpg",
//     ],
//     rating: 5,
//     price: 18.15,
//     oldPrice: 0,
//     sizes: ["XL", "L", "M", "XS", "S"],
//     colors: ["black", "beige", "blue-gray"],
//     category: "new-arrivals",
//   },
//   {
//     id: 1,
//     title: "Metal bridge sunglasses",
//     linkUrl: "/",
//     imageUrls: [
//       "https://i.ibb.co/5MxwzRk/product-cap.jpg",
//       "https://i.ibb.co/Tmx7S06/81lzys2u4bhhqhnyz4ltltm488o1t2fd.jpg",
//       "https://i.ibb.co/6gyk3Y7/102465105-C69-1.jpg",
//     ],
//     rating: 0,
//     price: 89.95,
//     oldPrice: 0,
//     sizes: ["XL", "L", "M", "XS", "S"],
//     colors: ["black", "beige", "blue-gray"],
//     category: "new-arrivals",
//   },
//   {
//     id: 2,
//     title: "Green baby romper",
//     linkUrl: "/",
//     imageUrls: [
//       "https://i.ibb.co/5MxwzRk/product-cap.jpg",
//       "https://i.ibb.co/Tmx7S06/81lzys2u4bhhqhnyz4ltltm488o1t2fd.jpg",
//       "https://i.ibb.co/6gyk3Y7/102465105-C69-1.jpg",
//     ],
//     rating: 4,
//     price: 20.4,
//     oldPrice: 0,
//     sizes: ["XL", "L", "M", "XS", "S"],
//     colors: ["black", "beige", "blue-gray"],
//     category: "new-arrivals",
//   },
//   {
//     id: 3,
//     title: "Mid-rise slim cropped fit jeans",
//     linkUrl: "/",
//     imageUrls: [
//       "https://i.ibb.co/5MxwzRk/product-cap.jpg",
//       "https://i.ibb.co/Tmx7S06/81lzys2u4bhhqhnyz4ltltm488o1t2fd.jpg",
//       "https://i.ibb.co/6gyk3Y7/102465105-C69-1.jpg",
//     ],
//     rating: 0,
//     price: 40.0,
//     oldPrice: 0,
//     sizes: ["XL", "L", "M", "XS", "S"],
//     colors: ["black", "beige", "blue-gray"],
//     category: "new-arrivals",
//   },
//   {
//     id: 4,
//     title: "Red dangle earrings",
//     linkUrl: "/",
//     imageUrls: [
//       "https://i.ibb.co/5MxwzRk/product-cap.jpg",
//       "https://i.ibb.co/Tmx7S06/81lzys2u4bhhqhnyz4ltltm488o1t2fd.jpg",
//       "https://i.ibb.co/6gyk3Y7/102465105-C69-1.jpg",
//     ],
//     rating: 5,
//     price: 29.95,
//     oldPrice: 0,
//     sizes: ["XL", "L", "M", "XS", "S"],
//     colors: ["black", "beige", "blue-gray"],
//     category: "new-arrivals",
//   },
//   {
//     id: 5,
//     title: "Baby shoes with laces",
//     linkUrl: "/",
//     imageUrls: [
//       "https://i.ibb.co/5MxwzRk/product-cap.jpg",
//       "https://i.ibb.co/Tmx7S06/81lzys2u4bhhqhnyz4ltltm488o1t2fd.jpg",
//       "https://i.ibb.co/6gyk3Y7/102465105-C69-1.jpg",
//     ],
//     rating: 0,
//     price: 30.6,
//     oldPrice: 0,
//     sizes: ["XL", "L", "M", "XS", "S"],
//     colors: ["black", "beige", "blue-gray"],
//     category: "new-arrivals",
//   },
// ];

type ProductProps = {
  obj: {
    id: number;
    title: string;
    linkUrl: string;
    imageUrls: string[];
    rating: number;
    price: number;
    oldPrice: number;
    sizes: string[];
    colors: string[];
    category: string;
  };
};

export const Product: React.FC<ProductProps> = ({ obj }) => {
  const botRef = React.useRef<HTMLDivElement>(null); // (slider)

  const [activeImg, setActiveImg] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeColor, setActiveColor] = React.useState(0);

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);

  const onTestEnter = (e: React.MouseEvent<HTMLElement>) => {
    const list = e.currentTarget.closest(".slick-list") as HTMLDivElement;
    const listMarginBottom = window.getComputedStyle(list).marginBottom;

    if (botRef.current) {
      botRef.current.setAttribute("data-visible", "");
      const bottomHeight = botRef.current?.getBoundingClientRect().height;
      list.style.marginBottom = parseFloat(listMarginBottom) - productMB - bottomHeight + "px";
    }
  };

  const onTestLeave = (e: React.MouseEvent<HTMLElement>) => {
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
    <article onMouseEnter={onTestEnter} onMouseLeave={onTestLeave} className={s.root}>
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
          className={`${cs.btnReset} ${s.favorite} ${
            favorites.includes(obj.id) ? s.favoriteActive : ""
          } `}
          data-visible
          aria-label="Add to favorite.">
          <HeartFull aria-hidden="true" />
        </button>
      </div>

      <div className={`${s.info} ${s.infoWhite}`}>
        <Link to={obj.linkUrl} className={s.name}>
          {obj.title}
        </Link>

        <div className={s.prices}>
          <span className={s.price}>{`$${obj.price}`}</span>
        </div>

        <div ref={botRef} className={s.bottom}>
          <div className={s.details}>
            <ul className={`${s.sizes} ${cs.ulReset}`}>
              {obj.sizes.map((size, i) => (
                <li key={i} className={s.sizesItem}>
                  <button
                    onClick={() => onSizeBtnClick(i)}
                    className={`${cs.btnReset} ${s.sizesBtn} ${
                      activeSize === i ? s.sizesBtnActive : ""
                    } `}>
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
                    className={`${cs.btnReset} ${s.colorsBtn} ${
                      activeColor === i ? s.colorsBtnActive : ""
                    }`}
                    aria-label={`Choose ${color} color`}></button>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="product__button-wrapper"> */}
          <button className={`${s.buttonCart} ${cs.btn} ${cs.btnMid} ${cs.btnReset}`}>
            <Cart aria-hidden="true" />
          </button>
          {/* </div> */}
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
