import React from "react";
import { useLocation } from "react-router-dom";

import { useGetAllCatalogProductsQuery } from "../../../redux/backendApi";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectModalImage } from "../../../redux/modalImageBtnSlice/selectors";
import { setIsActiveMI } from "../../../redux/modalImageBtnSlice/slice";

import { setOverflowHidden } from "../../../util/customFunctions";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./ModalImage.module.scss";
import { Cross } from "../../../iconComponents";

type ModalImageProps = {
  macroSliderRef: React.MutableRefObject<Slider>;
};

export const ModalImage: React.FC<ModalImageProps> = ({ macroSliderRef }) => {
  const [isDraggable, setIsDraggable] = React.useState(false);

  const isActiveMI = useAppSelector(selectModalImage);
  const dispatch = useAppDispatch();

  // const sliderRef = React.useRef<Slider>(null);
  const location = useLocation();

  const [object, category, id] = location.pathname.split("/").filter((path) => path !== "");
  const request = `?object_like=${object}&category_like=${category}&id=${id}`;

  const { product } = useGetAllCatalogProductsQuery(request, {
    selectFromResult: ({ data }) => ({
      product: data?.[0],
    }),
  });

  if (!product) return;

  const onCloseClick = () => {
    dispatch(setIsActiveMI());
    setOverflowHidden(!isActiveMI);
  };

  const onSlideDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const slide = e.currentTarget;

    const onSlideMove = () => {
      setIsDraggable(true);
      document.documentElement.addEventListener("pointerup", onSlideUp);
    };

    const onSlideUp = () => {
      slide.removeEventListener("pointermove", onSlideMove);
      document.documentElement.removeEventListener("pointerup", onSlideUp);
      setIsDraggable(false);
    };

    slide.addEventListener("pointermove", onSlideMove);
  };

  let settings = {
    arrows: false,
    dots: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      // {
      //   breakpoint: 900,
      //   settings: {
      //     slidesToShow: 3,
      //   },
      // },
    ],
  };

  return (
    <div className={`${s.root} ${isActiveMI ? s.rootShow : ""}`}>
      {/* <!-- Image-modal head --> */}
      <div className={s.head}>
        <div className={s.count}>
          <span className={s.countCurrent}></span>/<span className={s.countTotal}></span>
        </div>

        <button onClick={onCloseClick} className={s.close} aria-label="Close image-modal.">
          <Cross aria-hidden="true" />
        </button>
      </div>

      {/* <!-- Slider --> */}
      <div className={s.slider}>
        <Slider ref={macroSliderRef} className={s.slider} {...settings}>
          {/* SlideImage */}
          {product.imageUrls.map((imageUrl, i) => (
            <div key={i} className={s.slide}>
              <div className={s.imageWrapperOuter}>
                <div className={s.imageWrapper}>
                  <img src={imageUrl} alt="Product image." className={s.image} loading="lazy" />
                </div>
              </div>
            </div>
          ))}

          {/* SlideVideo */}
          {product.videos.map((video, i) => (
            <div key={i} onPointerDown={onSlideDown} className={s.slide}>
              <div className={s.imageWrapperOuter}>
                <div className={s.videoWrapper}>
                  <iframe
                    src={video.video}
                    className={`${s.video} ${isDraggable ? s.videoDrag : ""}`}
                    loading="lazy"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <!-- Navigation --> */}
        {/* <button
          className="image-modal__button image-modal__button-prev arrow"
          id="image-modal-button-prev"
          aria-label="Choose previous slide.">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <use href="./img/sprite.svg#arrow"></use>
          </svg>
        </button>

        <button
          className="image-modal__button image-modal__button-next arrow"
          id="image-modal-button-next"
          aria-label="Choose next slide.">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <use href="./img/sprite.svg#arrow"></use>
          </svg>
        </button> */}

        {/* <!-- Pagination --> */}
        {/* <div className="image-modal__pagination-wrapper">
          <div className="image-modal__pagination" id="image-modal-pagination"></div>
        </div> */}
      </div>
    </div>
  );
};
