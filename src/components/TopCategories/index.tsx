import React from "react";
import { Link } from "react-router-dom";
import { useGetTopCategoriesQuery } from "../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./TopCategories.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { SkeletonTopCategories } from "../Skeletons";

const TopCategoriesSlider: React.FC = () => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);

  const { data, isError, isLoading } = useGetTopCategoriesQuery();

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
              <div className={s.wrap}>
                <div className={s.box}>
                  <img src={obj.imageUrl} alt={`${obj.text} image.`} className={s.image} />
                </div>

                <Link to={obj.url} className={s.link} draggable={false}>
                  {obj.text}
                </Link>
              </div>
            </div>
          ))}
    </Slider>
  );
};

export const TopCategories: React.FC = () => {
  return (
    <section className={`${s.root} ${cs.flatPagination}`}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <div className={s.slider}>
          <TopCategoriesSlider />
        </div>
      </div>
    </section>
  );
};
