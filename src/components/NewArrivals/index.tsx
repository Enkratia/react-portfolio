import React from "react";
import { Link } from "react-router-dom";

import { useGetNewArrivalsQuery } from "../../redux/backendApi";

import { Product } from "../Product";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./NewArrivals.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { SkeletonProduct } from "../Skeletons";

type NewArrivalsSliderProps = {
  sliderRef: React.RefObject<Slider>;
};

const NewArrivalsSlider: React.FC<NewArrivalsSliderProps> = ({ sliderRef }) => {
  const clickableRef = React.useRef(true);

  const { data, isLoading, isError } = useGetNewArrivalsQuery();

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
    dots: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    className: (isLoading || !data) && s.pointerEventsNone,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (isError) {
    console.log("Failed to load 'New arrivals' data.");
  }

  return (
    <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings}>
      {isLoading || !data
        ? [...Array(6)].map((_, i) => <SkeletonProduct key={i} />)
        : data.map((obj) => <Product key={obj.id} obj={obj} />)}
    </Slider>
  );
};

export const NewArrivals: React.FC = () => {
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
    if (!e.currentTarget.hasAttribute("data-key-mode")) return;

    const { nextSlide } = getSliderInfo(e);

    // On last interactive element in slide (transition to the next slide)
    // if (!isNextSlideActive && !isNextSlideClone && e.target === lastInteractiveElement) {
    //   (nextSlide as HTMLElement).focus();
    // }

    if (e.target.hasAttribute("data-key-next")) {
      e.target.removeAttribute("data-key-next");
      (nextSlide as HTMLElement).focus();
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

    // First tab on slider
    if (e.target === e.currentTarget && !e.shiftKey) {
      startSliderKeyMode(e);
      return;
    }

    // Client got back to slider by shift+tab after leaving it
    if (slickExit && e.target === slickExit && e.shiftKey) {
      e.preventDefault();
      (e.currentTarget as HTMLElement).focus();
      return;
    }

    // Check if the next slide is clone and check whether current tab going to go to this clone (or tab will remain inside this slide for now)
    if (isNextSlideClone && e.target === lastInteractive && !e.shiftKey) {
      e.preventDefault();
      slickExit?.focus();
      return;
    }

    // Check if the prev slide is clone and check whether current tab going to go to this clone (or tab will remain inside this slide for now)
    if (isPrevSlideClone && e.target === firstInteractive && e.shiftKey) {
      e.preventDefault();
      (e.currentTarget as HTMLElement)?.focus();
      return;
    }

    // Show one more slide in slider (before making focus());
    const islastInteractiveElement = e.target === lastInteractive;
    if (!isNextSlideActive && !isNextSlideClone && islastInteractiveElement && !e.shiftKey) {
      e.preventDefault();
      sliderRef.current?.slickNext();

      (e.target as HTMLElement).setAttribute("data-key-next", "");
      // (e.target as HTMLElement).blur();
      return;
    }

    // Show one more slide in slider (before making focus()); // (But for shift+tab)
    const isfirstInteractiveElement = e.target === firstInteractive;
    if (!isPrevSlideActive && !isPrevSlideClone && isfirstInteractiveElement && e.shiftKey) {
      e.preventDefault();
      sliderRef.current?.slickPrev();
    }
  };

  const onSliderFocus = (e: React.FocusEvent) => {
    let slickExit = e.currentTarget.querySelector(".slick-exit");

    // Create slick-exit (element-helper to go outside when only cloned slides left in slider)
    if (!slickExit) {
      createSliderExit(e);
    }
  };

  return (
    <section className={`${s.root} ${cs.flatPagination}`}>
      <div className={`${s.container} ${cs.containerWide}`}>
        <h2 className={`${s.title} ${cs.sectionTitle}`}>New arrivals</h2>

        <div className={s.subtitle}>
          <div className={s.descr}>Check out our latest arrivals for the upcoming season</div>

          <Link to="" className={s.more}>
            See the collection here
          </Link>
        </div>

        {/* <!-- Slider --> */}
        <div
          className={s.slider}
          tabIndex={0}
          onFocus={onSliderFocus}
          onKeyDown={onSliderKeyDown}
          onBlur={onSliderBlur}
          onPointerDown={onSliderPointerDown}>
          <NewArrivalsSlider sliderRef={sliderRef} />
        </div>
      </div>
    </section>
  );
};
