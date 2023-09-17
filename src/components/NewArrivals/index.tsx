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

const NewArrivalsSlider: React.FC = () => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);

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
        <div className={s.slider}>
          <NewArrivalsSlider />
        </div>
      </div>
    </section>
  );
};
