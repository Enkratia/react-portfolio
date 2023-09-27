import React from "react";
import { Link } from "react-router-dom";
import { useGetPopularCategoriesQuery } from "../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./PopularCategories.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { SkeletonPopularCategories } from "../Skeletons";

export const PopularCategories: React.FC = () => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);

  const { data, isLoading, isError } = useGetPopularCategoriesQuery();

  if (isError) {
    console.warn("Failed to load 'Popular categories' data");
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

    const interactive = slide?.querySelectorAll("a, button") || [];
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
    swipe: false,
    dots: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          swipe: true,
          dots: true,
          swipeToSlide: true,
          slidesToScroll: 1,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          swipe: true,
          dots: true,
          swipeToSlide: true,
          slidesToScroll: 2,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          swipe: true,
          dots: true,
          swipeToSlide: true,
          slidesToScroll: 2,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 690,
        settings: {
          swipe: true,
          dots: true,
          swipeToSlide: true,
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          swipe: true,
          dots: true,
          swipeToSlide: true,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={`${s.root} ${cs.flatPagination}`}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <h2 className={`${s.title} ${cs.sectionTitle}`}>Popular categories</h2>

        <div
          className={`${s.slider} ${isLoading || !data ? s.none : ""}`}
          tabIndex={0}
          onFocus={onSliderFocus}
          onKeyDown={onSliderKeyDown}
          onBlur={onSliderBlur}
          onPointerDown={onSliderPointerDown}>
          <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings}>
            {isLoading || !data
              ? [...Array(6)].map((_, i) => <SkeletonPopularCategories key={i} />)
              : data.map((obj, i) => (
                  <div key={i} className={s.slide}>
                    <div className={s.box}>
                      <img
                        className={s.image}
                        src={obj.imageUrl}
                        alt={`${obj.name} category image.`}
                      />
                    </div>

                    <Link
                      draggable={false}
                      to={`/women/clothes?type%5B0%5D=${obj.name.toLocaleLowerCase()}`}
                      className={s.name}>
                      {obj.name}
                    </Link>
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
