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
  const getSliderInfo = (e: React.FocusEvent | React.KeyboardEvent) => {
    const slide = (e.target as HTMLElement)?.closest(".slick-slide");
    const nextSlide = slide?.nextElementSibling;
    const isNextSlideClone = nextSlide?.classList.contains("slick-cloned");
    const isNextSlideActive = nextSlide?.classList.contains("slick-active");

    const interactiveElements = slide?.querySelectorAll("a, button") || [];
    const realInteractiveElements = [...interactiveElements].filter(
      (elem) => elem?.clientHeight !== 0,
    );
    const lastInteractiveElement = realInteractiveElements[realInteractiveElements.length - 1];

    return { nextSlide, isNextSlideClone, isNextSlideActive, lastInteractiveElement };
  };

  const onSliderBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.hasAttribute("data-key-mode")) return;

    if (e.target.classList.contains("slick-exit")) {
      e.target.remove();
      return;
    }

    // On last interactive element in slide (transition to the next slide)
    const { nextSlide, isNextSlideClone, isNextSlideActive, lastInteractiveElement } =
      getSliderInfo(e);

    if (!isNextSlideActive && !isNextSlideClone && e.target === lastInteractiveElement) {
      (nextSlide as HTMLElement).focus();
    }
  };

  const onSliderMouseDown = (e: React.MouseEvent) => {
    e.currentTarget.removeAttribute("data-key-mode");
  };

  const onSliderKeyDown = (e: React.KeyboardEvent) => {
    // if (e.key !== "Tab") return;
    e.currentTarget.setAttribute("data-key-mode", "");

    const { isNextSlideClone, isNextSlideActive, lastInteractiveElement } = getSliderInfo(e);

    // Check if the next slide is clone and check whether current tab gonna to go to this clone (or tab will remain inside this slide for now)
    if (isNextSlideClone && e.target === lastInteractiveElement) {
      e.preventDefault();

      const list = e.currentTarget.querySelector(".slick-list");
      const slickExit = document.createElement("span");
      slickExit.className = "slick-exit";
      slickExit.setAttribute("tabindex", "-1");
      list?.appendChild(slickExit);
      slickExit.focus();
      return;
    }

    // Show one more slide in slider before making focus();
    console.log(isNextSlideActive, isNextSlideClone, e.target === lastInteractiveElement);
    if (!isNextSlideActive && !isNextSlideClone && e.target === lastInteractiveElement) {
      e.preventDefault();
      sliderRef.current?.slickNext();
      console.log("next");
    }
  };

  // On the first slider focus
  const onSliderFocus = (e: React.FocusEvent) => {
    if (e.currentTarget === e.target) {
      const currentSlide = e.currentTarget.querySelector(".slick-current") as HTMLElement;
      currentSlide?.focus();
      return;
    }
  };

  return (
    <section className={`${s.root} ${cs.flatPagination}`}>
      <div className={`${s.container} ${cs.containerWide}`}>
        <h2 className={`${s.title} ${cs.sectionTitle}`}>New arrivals</h2>

        <div className={s.subtitle}>
          <div className={s.descr}>Check out our latest arrivals for the upcoming season</div>

          <Link to={"/"} className={s.more}>
            See the collection here
          </Link>
        </div>

        {/* <!-- Slider --> */}
        <div
          className={s.slider}
          tabIndex={0}
          onFocus={onSliderFocus}
          onKeyDown={onSliderKeyDown}
          onMouseDown={onSliderMouseDown}
          onBlur={onSliderBlur}>
          <NewArrivalsSlider sliderRef={sliderRef} />
        </div>
      </div>
    </section>
  );
};
