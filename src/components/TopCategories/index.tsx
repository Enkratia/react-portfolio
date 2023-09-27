import React from "react";
import { Link } from "react-router-dom";
import { useGetTopCategoriesQuery } from "../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./TopCategories.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { SkeletonTopCategories } from "../Skeletons";

type TopCategoriesSliderProps = {
  sliderRef: React.RefObject<Slider>;
};

const TopCategoriesSlider: React.FC<TopCategoriesSliderProps> = ({ sliderRef }) => {
  const clickableRef = React.useRef(true);

  const { data, isError, isLoading } = useGetTopCategoriesQuery();

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
    slidesToShow: 3,
    className: isLoading && s.pointerEventsNone,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipe: true,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          swipe: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isError) {
    console.warn("Failed to load top-categories data");
  }

  return (
    <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings}>
      {isLoading || !data
        ? [...Array(4)].map((_, i) => <SkeletonTopCategories key={i} />)
        : data.map((obj) => (
            <div key={obj.id} className={s.category}>
              <div className={s.box}>
                <img src={obj.imageUrl} alt={`${obj.text} image.`} className={s.image} />
              </div>

              <Link to={obj.url} className={s.link} draggable={false}>
                {obj.text}
              </Link>
            </div>
          ))}
    </Slider>
  );
};

export const TopCategories: React.FC = () => {
  const sliderRef = React.useRef<Slider>(null);

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

  return (
    <section className={`${s.root} ${cs.flatPagination}`}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <div
          className={s.slider}
          tabIndex={0}
          onFocus={onSliderFocus}
          onKeyDown={onSliderKeyDown}
          onBlur={onSliderBlur}
          onPointerDown={onSliderPointerDown}>
          <TopCategoriesSlider sliderRef={sliderRef} />
        </div>
      </div>
    </section>
  );
};
