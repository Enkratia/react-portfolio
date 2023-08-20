import React from "react";
import { Link } from "react-router-dom";
import { useGetPopularCategoriesQuery } from "../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./PopularCategories.module.scss";
import cs from "../../scss/global/_index.module.scss";

export const PopularCategories: React.FC = () => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);

  const { data } = useGetPopularCategoriesQuery();
  if (!data) return;

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

        <div className={s.slider}>
          <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings}>
            {data.map((obj, i) => (
              <div key={i} className={s.slide}>
                <div className={s.box}>
                  <img className={s.image} src={obj.imageUrl} alt={`${obj.name} category image.`} />
                </div>

                <Link draggable={false} to={obj.linkUrl} className={s.name}>
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
