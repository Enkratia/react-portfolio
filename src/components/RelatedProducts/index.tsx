import React from "react";
import { useGetAllCatalogProductsQuery } from "../../redux/backendApi";

import { Product } from "../Product";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./RelatedProducts.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Arrow } from "../../iconComponents";
import { SkeletonProduct } from "..";

export const RelatedProducts: React.FC = () => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);

  const { data, isLoading, isError } = useGetAllCatalogProductsQuery("");

  if (isError) {
    console.warn("Failed to load 'recently-viewed' data");
  }

  // **
  const createSliderExit = (e: React.FocusEvent) => {
    const list = e.currentTarget.querySelector(".slick-list");
    const slickExit = document.createElement("span");
    slickExit.className = "slick-exit";
    slickExit.setAttribute("tabindex", "0");
    list?.appendChild(slickExit);
  };

  const startSliderKeyMode = (e: React.FocusEvent | React.KeyboardEvent) => {
    const firstSlide = e.currentTarget.querySelectorAll(".slick-slide:not(.slick-cloned)")[0];
    sliderRef.current?.slickGoTo(0);
    (firstSlide as HTMLElement)?.focus();
  };

  const getSliderInfo = (e: React.FocusEvent | React.KeyboardEvent) => {
    const slide = (e.target as HTMLElement)?.closest(".slick-slide");

    const nextSlide = slide?.nextElementSibling;
    const prevSlide = slide?.previousElementSibling;

    const isNextSlideClone = nextSlide?.classList.contains("slick-cloned");
    const isNextSlideActive = nextSlide?.classList.contains("slick-active");

    const isPrevSlideClone = prevSlide?.classList.contains("slick-cloned");
    const isPrevSlideActive = prevSlide?.classList.contains("slick-active");

    const interactive = slide?.querySelectorAll("a, button, [tabindex='0']") || [];
    const realInteractive = [...interactive].filter(
      (elem) => window.getComputedStyle(elem).visibility !== "hidden",
    );

    const firstInteractive = realInteractive[0];
    const lastInteractive = realInteractive[realInteractive.length - 1];

    return {
      nextSlide,
      isNextSlideClone,
      isNextSlideActive,
      isPrevSlideClone,
      isPrevSlideActive,
      firstInteractive,
      lastInteractive,
    };
  };

  const onSliderBlur = (e: React.FocusEvent) => {
    if (e.target.hasAttribute("data-key-next")) {
      e.target.removeAttribute("data-key-next");
      return;
    }

    if (e.target.hasAttribute("data-key-prev")) {
      e.target.removeAttribute("data-key-prev");
    }
  };

  const onSliderPointerDown = (e: React.MouseEvent) => {
    e.currentTarget.removeAttribute("data-key-mode");
  };

  const onSliderKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    e.currentTarget.setAttribute("data-key-mode", "");

    const {
      isNextSlideClone,
      isNextSlideActive,
      isPrevSlideClone,
      isPrevSlideActive,
      firstInteractive,
      lastInteractive,
    } = getSliderInfo(e);
    const slickExit = e.currentTarget.querySelector(".slick-exit") as HTMLElement;

    if ((e.target as HTMLElement).hasAttribute("data-key-next") && e.shiftKey) {
      e.preventDefault();
      (e.target as HTMLElement).removeAttribute("data-key-next");
      sliderRef.current?.slickPrev();
      return;
    }

    if ((e.target as HTMLElement).hasAttribute("data-key-prev") && !e.shiftKey) {
      e.preventDefault();
      (e.target as HTMLElement).removeAttribute("data-key-prev");
      sliderRef.current?.slickNext();
      return;
    }

    if (e.target === e.currentTarget && !e.shiftKey) {
      startSliderKeyMode(e);
      return;
    }

    if (slickExit && e.target === slickExit && e.shiftKey) {
      e.preventDefault();
      (e.currentTarget as HTMLElement).focus();
      return;
    }

    if (isNextSlideClone && e.target === lastInteractive && !e.shiftKey) {
      e.preventDefault();
      slickExit?.focus();
      return;
    }

    if (isPrevSlideClone && e.target === firstInteractive && e.shiftKey) {
      e.preventDefault();
      (e.currentTarget as HTMLElement)?.focus();
      return;
    }

    const islastInteractiveElement = e.target === lastInteractive;
    if (!isNextSlideActive && !isNextSlideClone && islastInteractiveElement && !e.shiftKey) {
      e.preventDefault();

      if (isNextSlideActive === undefined && isNextSlideClone === undefined) {
        slickExit?.focus();
        return;
      }

      (e.target as HTMLElement).setAttribute("data-key-next", "");
      sliderRef.current?.slickNext();
      return;
    }

    const isfirstInteractiveElement = e.target === firstInteractive;
    if (!isPrevSlideActive && !isPrevSlideClone && isfirstInteractiveElement && e.shiftKey) {
      e.preventDefault();

      if (isPrevSlideActive === undefined && isPrevSlideClone === undefined) {
        (e.currentTarget as HTMLElement)?.focus();
        return;
      }

      (e.target as HTMLElement).setAttribute("data-key-prev", "");
      sliderRef.current?.slickPrev();
      return;
    }
  };

  const onSliderFocus = (e: React.FocusEvent) => {
    let slickExit = e.currentTarget.querySelector(".slick-exit");

    if (!slickExit) {
      createSliderExit(e);
    }
  };

  // **
  const handleClick = (event: MouseEvent) => {
    // Для swipeEvent
    if (!clickableRef.current) {
      event.stopPropagation();
      event.preventDefault();
    }
    clickableRef.current = true;
  };

  const swipeEvent = () => {
    // Фикс (слайдер воспринимает свайп, как клик)
    if (sliderRef?.current?.innerSlider?.list) {
      sliderRef.current.innerSlider.list.onclick = handleClick;
      clickableRef.current = false;
    }
  };

  let settings = {
    arrows: false,
    dots: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={`${s.root} ${isLoading || !data ? cs.none : ""}`}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <div className={s.head}>
          <h2 className={`${s.title} ${cs.sectionTitle}`}>You may be interested in</h2>

          <div className={s.btns}>
            <button
              onClick={() => sliderRef?.current?.slickPrev()}
              className={`${s.btn} ${cs.arrow} ${cs.arrowTrans}`}
              aria-label="Got to the previous slide.">
              <Arrow aria-hidden="true" />
            </button>

            <button
              onClick={() => sliderRef?.current?.slickNext()}
              className={`${s.btn} ${cs.arrow} ${cs.arrowTrans}`}
              aria-label="Go to the next slide.">
              <Arrow aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className={s.slider}
          tabIndex={0}
          onFocus={onSliderFocus}
          onKeyDown={onSliderKeyDown}
          onBlur={onSliderBlur}
          onPointerDown={onSliderPointerDown}>
          <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings}>
            {isLoading || !data
              ? [...Array(4)].map((_, i) => <SkeletonProduct key={i} />)
              : data.map((obj) => <Product key={obj.id} obj={obj} theme="gray" />)}
          </Slider>
        </div>
      </div>
    </section>
  );
};
