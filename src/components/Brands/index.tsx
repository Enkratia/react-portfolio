import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./Brands.module.scss";
import cs from "../../scss/global/_index.module.scss";

const brands = [
  {
    name: "InDepth Consulting",
    imageUrl: "https://i.ibb.co/RNPtc91/brand-in-Depth.png",
    url: "/",
  },
  {
    name: "Higher Fit",
    imageUrl: "https://i.ibb.co/VwNWGjq/brand-higher-Fit.png",
    url: "/",
  },
  {
    name: "Sentinal consulting",
    imageUrl: "https://i.ibb.co/x6KKrL5/brand-sentinel-Consulting.png",
    url: "/",
  },
  {
    name: "National",
    imageUrl: "https://i.ibb.co/dc14pjp/brand-national-Logo.png",
    url: "/",
  },
  {
    name: "ForSale",
    imageUrl: "https://i.ibb.co/njVV1NR/brand-for-Sale-Logo.png",
    url: "/",
  },
  {
    name: "Del Mar Strategy",
    imageUrl: "https://i.ibb.co/vJ45hry/brand-der-Mar-Logo.png",
    url: "/",
  },
];

export const Brands: React.FC = () => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);

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
    dots: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings} autoplay>
          {brands.map((brand, i) => (
            <a key={i} href={brand.url} target="_blank" className={s.brand}>
              <img
                src={brand.imageUrl}
                alt={`${brand.name}'s logo`}
                className={s.image}
                aria-hidden="true"
              />
            </a>
          ))}
        </Slider>
      </div>
    </section>
  );
};
