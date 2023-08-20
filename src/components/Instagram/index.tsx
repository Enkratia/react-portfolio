import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./Instagram.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Instagram as InstagramIcon } from "../../iconComponents";

const intagramImgs = [
  "https://i.ibb.co/hWMgHxf/instagram-1.jpg",
  "https://i.ibb.co/zFdtQKH/instagram-2.jpg",
  "https://i.ibb.co/KwqY758/instagram-3.jpg",
];

export const Instagram: React.FC = () => {
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
    arrows: false,
    dots: false,
    swipe: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          swipe: true,
          swipeToSlide: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          dots: true,
          swipe: true,
          swipeToSlide: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={`${s.root} ${cs.flatPagination}`}>
      <h2 className={cs.srOnly}>Our instagram</h2>

      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <div className={s.left}>
          <div className={s.text}>
            <span className={s.subtitle}>Follow us on Instagram</span>
            <p className={s.title}>@createx_store</p>
          </div>

          <a href="#" className={`${s.button} ${cs.btn} ${cs.btnLg} ${cs.btnOutline}`}>
            <InstagramIcon aria-hidden="true" />
            Follow instagram
          </a>
        </div>

        <div className={s.right}>
          <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings}>
            {intagramImgs.map((imgUrl, i) => (
              <div key={i} className={s.slide}>
                <img src={imgUrl} alt="Instagram photo." className={s.image} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
