import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectModalImage } from "../../../redux/modalImageBtnSlice/selectors";
import { setIsActiveMI } from "../../../redux/modalImageBtnSlice/slice";
import { ProductType } from "../../../redux/backendApi/types";

import { setOverflowHidden } from "../../../util/customFunctions";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./ModalImage.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Arrow, Cross } from "../../../iconComponents";

type ModalImageProps = {
  product: ProductType;
  activeSlide: number;
  sliderRef: React.RefObject<Slider>;
  macroSliderRef: React.RefObject<Slider>;
};

export const ModalImage: React.FC<ModalImageProps> = ({
  product,
  activeSlide,
  sliderRef,
  macroSliderRef,
}) => {
  const [isDraggable, setIsDraggable] = React.useState(false);

  const isActiveMI = useAppSelector(selectModalImage);
  const dispatch = useAppDispatch();

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
  };

  return (
    <div className={`${s.root} ${isActiveMI ? s.rootShow : ""}`}>
      {/* <!-- Image-modal head --> */}
      <div className={s.head}>
        <div className={s.count}>
          <span className={s.countCurrent}>{activeSlide + 1}</span>/
          <span className={s.countTotal}>{product.imageUrls.length + product.videos.length}</span>
        </div>

        <button onClick={onCloseClick} className={s.close} aria-label="Close image-modal.">
          <Cross aria-hidden="true" />
        </button>
      </div>

      {/* <!-- Slider --> */}
      <div className={s.slider}>
        <Slider
          ref={macroSliderRef}
          asNavFor={sliderRef.current || undefined}
          className={s.slider}
          {...settings}>
          {/* SlideImage */}
          {product.imageUrls.map((imageUrl, i) => (
            <div key={i} className={s.slide}>
              <div className={s.imageWrapperOuter}>
                <div className={s.imageWrapper}>
                  <div className={s.imageWrapperInner}>
                    <img src={imageUrl} alt="Product image." className={s.image} loading="lazy" />
                  </div>
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
        <button
          onClick={() => macroSliderRef?.current?.slickPrev()}
          className={`${s.btn} ${s.btnPrev} ${cs.arrow}`}
          aria-label="Choose previous slide.">
          <Arrow aria-hidden="true" />
        </button>

        <button
          onClick={() => macroSliderRef?.current?.slickNext()}
          className={`${s.btn} ${s.btnNext} ${cs.arrow}`}
          aria-label="Choose next slide.">
          <Arrow aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
