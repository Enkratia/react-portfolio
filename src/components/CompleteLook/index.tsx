import React from "react";
import { Arrow } from "../../iconComponents";

import { useGetAllCatalogProductsQuery, useGetCompleteLookQuery } from "../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Product, SkeletonCompleteLook, SkeletonProduct } from "../../components";

import s from "./CompleteLook.module.scss";
import cs from "../../scss/global/_index.module.scss";

type CompleteLookProps = {
  productId: string;
};

export const CompleteLook: React.FC<CompleteLookProps> = ({ productId }) => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);

  let lookImage: string | undefined;
  let productIds = [] as number[] | undefined;

  const {
    data,
    isLoading: isLoadingData,
    isError: isErrorData,
  } = useGetCompleteLookQuery(productId); // загрузка id для дальнейшего запроса продуктов с этими id

  lookImage = data?.[0].lookImage;
  productIds = data?.[0].productIds;
  const productsRequest = `?id=${productIds?.slice(0, 6)?.join("&id=")}`;

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
  } = useGetAllCatalogProductsQuery(productsRequest, {
    skip: !productIds || productIds.length === 0,
  });

  if (isErrorData || isErrorProducts) {
    console.warn("Failed to load data: 'Complete-look'.");
  }

  const isLoading = isLoadingData || isLoadingProducts || !data || !products;

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
    dots: true,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 414,
        settings: {
          dots: true,
          arrows: false,
          swipe: true,
          swipeToSlide: true,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={`${s.root} ${cs.flatPagination} ${isLoading ? s.none : ""}`}>
      <h2 className={cs.srOnly}>Products that complete fashion.</h2>

      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Head --> */}
        <div className={s.head}>
          <p className={`${s.title} ${cs.sectionTitle}`}>Complete your look</p>

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

        {/* <!-- Content --> */}
        <div className={s.content}>
          {/* <!-- Image --> */}
          <div className={s.imageWrapper}>
            {isLoading ? (
              <SkeletonCompleteLook />
            ) : (
              <img src={lookImage} alt="Product image." className={s.image} />
            )}
          </div>

          {/* <!-- Slider --> */}
          <div
            className={s.sliderWrap}
            tabIndex={0}
            onFocus={onSliderFocus}
            onKeyDown={onSliderKeyDown}
            onBlur={onSliderBlur}
            onPointerDown={onSliderPointerDown}>
            <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings} className={s.slider}>
              {isLoading
                ? [...Array(2)].map((_, i) => <SkeletonProduct key={i} />)
                : products.map((product) => <Product key={product.id} obj={product} />)}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
