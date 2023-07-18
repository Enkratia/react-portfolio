import React from "react";
import { Link } from "react-router-dom";
import { useGetTopCategoriesQuery } from "../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./TopCategories.module.scss";
import cs from "../../scss/global/_index.module.scss";

const TopCategoriesSlider: React.FC = () => {
  const { data } = useGetTopCategoriesQuery();

  let settings = {
    swipe: false,
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 3,
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

  if (!data) return;

  return (
    <Slider {...settings}>
      {data.map((obj) => (
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
