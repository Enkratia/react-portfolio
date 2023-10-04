import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectModalImage } from "../../../redux/modalImageBtnSlice/selectors";
import { setIsActiveMI } from "../../../redux/modalImageBtnSlice/slice";
import { ProductType } from "../../../redux/backendApi/types";

import { useMediaQuery } from "../../../util/customHooks";
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
  const { isMQ1024 } = useMediaQuery();
  const [isDraggable, setIsDraggable] = React.useState(false);

  const isActiveMI = useAppSelector(selectModalImage);
  const dispatch = useAppDispatch();

  const [initZoomData, setInitZoomData] = React.useState<Record<string, number>>();
  const [zoomData, setZoomData] = React.useState<Record<string, number>>({});

  // **
  const onImageOver = (e: React.PointerEvent<HTMLImageElement>) => {
    if (!isMQ1024) return;

    const image = e.currentTarget;
    const wrapper = image.parentElement;
    if (!wrapper) return;

    const top = wrapper.getBoundingClientRect().top;
    const width = wrapper.getBoundingClientRect().width;
    const height = wrapper.getBoundingClientRect().height;
    const left = wrapper.getBoundingClientRect().left;

    const scale = 2;
    // const coeff = (width * scale) / ((width * scale - width) / 2);

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    setInitZoomData({
      top,
      width,
      height,
      left,
      centerX,
      centerY,
      scale,
    });
  };

  const onImageMove = (e: React.PointerEvent<HTMLImageElement>) => {
    if (!isMQ1024) return;
    if (!initZoomData) return;

    const { scale, top, width, height, left, centerX, centerY } = initZoomData;

    let offsetX;
    let offsetY;

    if (e.pageX > centerX) {
      offsetX = ((centerX - e.clientX) / (width / 2)) * 100;
    } else {
      offsetX = 100 - ((e.clientX - left) / (width / 2)) * 100;
    }

    if (e.pageY > centerY) {
      offsetY = ((centerY - e.clientY) / (height / 2)) * 100;
    } else {
      offsetY = 100 - ((e.clientY - top) / (height / 2)) * 100;
    }

    setZoomData({
      scale,
      offsetX: ~~(offsetX / 4),
      offsetY: ~~(offsetY / 4),
    });
  };

  const onImageLeave = () => {
    setInitZoomData(undefined);
  };

  //**
  const onSlideDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // видео слайды свайпаются некорректно, курсор теряется в iframe при перелистывании
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

  // **
  const onCloseClick = () => {
    dispatch(setIsActiveMI());
    setOverflowHidden(!isActiveMI);
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
      <div className={s.sliderWrapper}>
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
                  <img
                    style={{
                      transform: initZoomData
                        ? `scale(${zoomData.scale}) translate(${zoomData.offsetX}%, ${zoomData.offsetY}%)`
                        : "scale(1)",
                    }}
                    onPointerOver={onImageOver}
                    onPointerMove={onImageMove}
                    onPointerLeave={onImageLeave}
                    src={imageUrl}
                    alt="Product image."
                    className={s.image}
                    loading="lazy"
                  />
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
