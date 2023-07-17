import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./TopCategories.module.scss";
import cs from "../../scss/global/_index.module.scss";

const topCategories = [
  {
    id: 0,
    url: "/",
    imageUrl: "https://i.ibb.co/9Zr3YQn/top-categories-womens.png",
    text: "Women’s",
  },
  {
    id: 1,
    url: "/",
    imageUrl: "https://i.ibb.co/tzSvb3b/top-categories-mens.png",
    text: "Men’s",
  },
  {
    id: 2,
    url: "/",
    imageUrl: "https://i.ibb.co/mbr3RKm/top-categories-kids.png",
    text: "Kid’s",
  },
];

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
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

    return (
      <Slider {...settings}>
        {topCategories.map((obj) => (
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
  }
}

export const TopCategories: React.FC = () => {
  return (
    <section className={`${s.root} ${cs.flatPagination}`}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <div className={s.slider}>
          <ReactSlickDemo />
        </div>
      </div>
    </section>
  );
};
