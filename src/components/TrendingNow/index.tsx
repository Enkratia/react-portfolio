import React from "react";
import { Link } from "react-router-dom";
import { useGetTrendingNowQuery } from "../../redux/backendApi";

import { Product } from "../Product";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./TrendingNow.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { SkeletonProduct } from "../Skeletons";
import { Arrow } from "../../iconComponents";

export const TrendingNow: React.FC = () => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);
  const { data, isLoading, isError } = useGetTrendingNowQuery();

  if (isError) {
    console.warn("Failed to load 'Trending now' data.");
  }

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
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <div className={`${s.head} ${isLoading || !data ? s.none : ""}`}>
          <h2 className={`${s.title} ${cs.sectionTitle}`}>Trending now</h2>

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

        <div className={`${s.slider} ${isLoading || !data ? s.none : ""}`}>
          <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings}>
            {isLoading || !data
              ? [...Array(3)].map((_, i) => <SkeletonProduct key={i} />)
              : data.map((obj) => <Product key={obj.id} obj={obj} theme="gray" mode="lg" />)}
          </Slider>
        </div>

        {/* <!-- Button --> */}
        <Link to="/" className={`${s.button} ${cs.btn} ${cs.btnLg} ${cs.btnOutline}`}>
          Explore top sales
        </Link>
      </div>
    </section>
  );
};
