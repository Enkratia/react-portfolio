import React from "react";
import { Link } from "react-router-dom";

import { Product } from "../Product";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./NewArrivals.module.scss";
import cs from "../../scss/global/_index.module.scss";

// const test = ["", "", "", "", "", "", ""];

import { useGetNewArrivalsQuery } from "../../redux/backendApi";

const NewArrivalsSlider: React.FC = () => {
  const { data } = useGetNewArrivalsQuery();

  let settings = {
    dots: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 6,
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

  if (!data) return;

  return (
    <Slider {...settings}>
      {data.map((obj, i) => (
        <Product key={i} obj={obj} /> // заменить i на id объектов
      ))}
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
